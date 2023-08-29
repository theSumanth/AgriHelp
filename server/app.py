from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib
app = Flask(__name__)
CORS(app)

# Load the machine learning model
model = joblib.load('newclassifier.pkl')  # Replace with the actual path to your .pkl file
Soil = {'Black':0, 'Clayey':1, 'Loamy':2, 'Red':3, 'Sandy':4}
Crop = {'Barley':0, 'Cotton':1, 'Ground Nuts':2, 'Maize':3, 'Millets':4, 'Oil seeds':5,
       'Paddy':6, 'Pulses':7, 'Sugarcane':8, 'Tobacco':9, 'Wheat':10}
@app.route('/calculator', methods=['POST'])
def predict():
    data = request.get_json()
    print(data)
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


if __name__ == '__main__':
    app.run(debug=True)