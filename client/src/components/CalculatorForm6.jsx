import React, { lazy, useEffect, useRef, useState } from 'react'
import imagePrev from '../components/icons/image-preview.png';
import '../styles/calculatorForm6.css';
import api from '../apis/axiosConfig.js';
import pests from '../data/pest';
import '../styles/loader.css';
import LoadingOverlay from '../widgets/Loader';
const CalculatorForm6 = () => {

    const inputRef = useRef(null);

    const [file, setFile] = useState();
    const [isImage, setIsImage] = useState(false);
    const [loading, setLoading] = useState(false);
    const [selectedFile, setSelectedFile] = useState(null);
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [pest, setPest] = useState("");
    const handleImageClick = () => {
        inputRef.current.click();
    };
    const handleImageChange = (event) => {
        setSelectedFile(event.target.files[0]);
        setIsImage(true);
        setFile(URL.createObjectURL(event.target.files[0]));
    }
    useEffect(() => {
        if (loading === true) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [loading]);
    const handleSubmit = async (event) => {
        setLoading(true);
        event.preventDefault();
        // console.log(loading);
        const formData = new FormData();
        formData.append('image', selectedFile);
        try {
            const response = await api.post('/api/calc', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            setLoading(false);
            // console.log(loading);
            console.log(response.data.pre);
            console.log(response.data.message);
            setPest(response.data.pre);
            setFormSubmitted(true);
        }
        catch (err) {
            setLoading(false);
            console.log(err)
        }
    }




    return (

        <div className="form6">

            <form onSubmit={handleSubmit}>
                <div className='image-field' onClick={handleImageClick}>
                    {isImage ? <img className='image-file' src={file} alt='uploaded successfully' /> : <img src={imagePrev} alt='upload image' />}
                    <input
                        type='file'
                        ref={inputRef}
                        onChange={handleImageChange}
                        style={{ display: 'none' }}
                    />
                </div>
                <center>
                    <div className='button-field'>
                        <button className='button-40' type="submit">Submit</button>
                    </div>
                </center>
            </form>
            {loading && <LoadingOverlay />}
            {formSubmitted && (
                <div className='image-field09'>
                    <p>{pests[pest].name}</p>
                    {
                        (pests[pest].image && <img className='image-fl' src={pests[pest].image} alt='pesticide' />)
                    }

                </div>
            )}

        </div>

    )
}

export default CalculatorForm6