import React, { useRef, useState } from 'react'
import imagePrev from '../components/icons/image-preview.png';
import '../styles/calculatorForm6.css';

const CalculatorForm6 = () => {

    const inputRef = useRef(null);

    const [file, setFile] = useState();
    const [isImage, setIsImage] = useState(false);

    const handleImageClick = () => {
        inputRef.current.click();
    };

    const handleImageChange = (event) => {
        setIsImage(true);
        setFile(URL.createObjectURL(event.target.files[0]));
    }

  return (
    <div className='form6'>
        <div className='image-field' onClick={handleImageClick}>
            {isImage ? <img className='image-file' src={file} alt='uploaded successfully'/>: <img src={imagePrev} alt='upload image'/>}
            <input 
                type='file'
                ref={inputRef}
                onChange={handleImageChange}
                style={{display: 'none'}}
            />
        </div>
        <div className='button-field'>
            <button className='button-40' type="submit">Submit</button>
        </div>
    </div>
  )
}

export default CalculatorForm6