from flask import Flask, request, jsonify
from flask_cors import CORS
from PIL import Image
import io
# from tensorflow import keras
from keras.preprocessing import image
# from keras.preprocessing.image import img_to_array

import joblib
import numpy as np
import requests
app = Flask(__name__,static_folder='./build',static_url_path='/')
CORS(app)

# Load the machine learning model
model = joblib.load('newclassifier.pkl')  # Replace with the actual path to your .pkl file
Soil = {'Black':0, 'Clayey':1, 'Loamy':2, 'Red':3, 'Sandy':4}
Crop = {'Barley':0, 'Cotton':1, 'Ground Nuts':2, 'Maize':3, 'Millets':4, 'Oil seeds':5,
       'Paddy':6, 'Pulses':7, 'Sugarcane':8, 'Tobacco':9, 'Wheat':10}


# Serving react application
@app.route('/')
def index():
    return app.send_static_file('index.html')


@app.route('/api/calculator', methods=['POST','GET'])
def predict():
    try:
        data = request.get_json()

        print(data)
    except:
        return{
            'message':'Input not given.'
        },400
    nitro = int(data['nitro'])
    potas = int(data['potas'])
    phos = int(data['phos'])
    soil = data['soil']
    crop = data['crop']
    # print(nitro, potas, phos, soil, crop)
    ans = model.predict([[Soil[soil],Crop[crop],nitro,phos,potas]])
    if ans[0] == 0:
        prediction = "10-26-26"
    elif ans[0] ==1:
        prediction =  "14-35-14"
    elif ans[0] == 2:
        prediction = "17-17-17"
    elif ans[0] == 3:
        prediction = "20-20"
    elif ans[0] == 4:
        prediction = "28-28"
    elif ans[0] == 5:
        prediction = "DAP"
    else:
        prediction = "Urea"
    # Process the input data and get the prediction
    # Example: prediction = model.predict([[nitro, potas, phos, soil]])
    # Replace the example with your actual prediction logic

    print(prediction)
    return jsonify({'prediction': prediction})

@app.route("/api/calc", methods=['POST'])
def mdl():
    try:
        img = request.files['image']
        img_data = img.read()
        img = Image.open(io.BytesIO(img_data))
        img = img.resize((256, 256)) 
        img_array = image.img_to_array(img)
        img_array = np.expand_dims(img_array, axis=0)
        img_array /= 255.0
        l = img_array[0].tolist()
        API_KEY = "F2MMw1zEoAkWU_msoPlY0tw4OVGoRc_nuzYNcb1skLUp"
        token_response = requests.post('https://iam.cloud.ibm.com/identity/token', data={"apikey": API_KEY, "grant_type": 'urn:ibm:params:oauth:grant-type:apikey'})
        mltoken = token_response.json()["access_token"]

        header = {'Content-Type': 'application/json', 'Authorization': 'Bearer ' + mltoken}

        payload_scoring = {"input_data": [{"fields": [], "values": [l]}]}

        response_scoring = requests.post('https://eu-gb.ml.cloud.ibm.com/ml/v4/deployments/015ec6b0-e6ec-4649-820c-e87818f72fce/predictions?version=2021-05-01', json=payload_scoring,headers={'Authorization': 'Bearer ' + mltoken})
        print("Scoring response")
        print(response_scoring.json())
        predicted_class_index = response_scoring.json()['predictions'][0]['values'][0][1]
        class_names = ['Apple___Apple_scab',
        'Apple___Black_rot',
        'Apple___Cedar_apple_rust',
        'Apple___healthy',
        'Blueberry___healthy',
        'Cherry_(including_sour)___Powdery_mildew',
        'Cherry_(including_sour)___healthy',
        'Corn_(maize)___Cercospora_leaf_spot Gray_leaf_spot',
        'Corn_(maize)___Common_rust_',
        'Corn_(maize)___Northern_Leaf_Blight',
        'Corn_(maize)___healthy',
        'Grape___Black_rot',
        'Grape___Esca_(Black_Measles)',
        'Grape___Leaf_blight_(Isariopsis_Leaf_Spot)',
        'Grape___healthy',
        'Orange___Haunglongbing_(Citrus_greening)',
        'Peach___Bacterial_spot',
        'Peach___healthy',
        'Pepper,_bell___Bacterial_spot',
        'Pepper,_bell___healthy',
        'Potato___Early_blight',
        'Potato___Late_blight',
        'Potato___healthy',
        'Raspberry___healthy',
        'Soybean___healthy',
        'Squash___Powdery_mildew',
        'Strawberry___Leaf_scorch',
        'Strawberry___healthy',
        'Tomato___Bacterial_spot',
        'Tomato___Early_blight',
        'Tomato___Late_blight',
        'Tomato___Leaf_Mold',
        'Tomato___Septoria_leaf_spot',
        'Tomato___Spider_mites Two-spotted_spider_mite',
        'Tomato___Target_Spot',
        'Tomato___Tomato_Yellow_Leaf_Curl_Virus',
        'Tomato___Tomato_mosaic_virus',
        'Tomato___healthy']
# predicted_class_index = np.argmax(predictions)
        predicted_class_name = class_names[predicted_class_index]

        print(f"The model predicts: {predicted_class_name}")
        return {
            "message" : "Successful",
            "pre" : predicted_class_name
        }
    except:
        return {
            'message': "Input not given"
        },400
    
if __name__ == '__main__':
    app.run(debug=True)