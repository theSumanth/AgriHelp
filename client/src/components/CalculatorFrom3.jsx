import React, { useState } from 'react'
import '../styles/calculatorForm.css';
import nitrogen from './icons/nitrogen2.png';
import potassium from './icons/potassium.png';
import phosphorus from './icons/phosphorus.png';
import soilicon from './icons/soil.png';
import wheat from './icons/wheat.png';


import image1 from './images/urea.jpg'
import image2 from './images/10-26-26.png'
import image3 from './images/14-35-14.jpg'
import image4 from './images/17-17-17.jpg'
import image5 from './images/20-20.jpg'
import image6 from './images/28-28.jpg'
import image7 from './images/dap.jpg'

const CalculatorForm3 = () => {
import axios from "axios";
const CalculatorForm3 = () => {
    // const lands = [
    //     "land1",
    //     "land2",
    //     "land3",
    //

    const soils = [
        "Black", "Clayey", "Loamy", "Red", "Sandy",
    ]

    const crops = ["Barley", "Cotton", "Ground Nuts", "Maize", "Millets", "Oil seeds", "Paddy", "Pulses", "Sugarcane", "Tobacco", "Wheat"]

    const fertilizers = {
        'urea': image1,
        '10-26-26': image2,
        '14-35-14': image3,
        '17-17-17': image4,
        '20-20': image5,
        '28-28': image6,
        'Dap': image7,
    };

    const [fert, setFert] = useState("");
    const [nitro, setNitro] = useState(0);
    const [data, setData] = useState(0);
    const [potas, setPotas] = useState(0);
    const [phos, setPhos] = useState(0);
    const [soil, setSoil] = useState("");
    const [crop, setCrop] = useState("");

    const [formSubmitted, setFormSubmitted] = useState(false);

    const onChangeHandler1 = (event) => {
        setNitro(event.target.value);
    }

    const onChangeHandler2 = (event) => {
        setPotas(event.target.value);
    }

    const onChangeHandler3 = (event) => {
        setPhos(event.target.value);
    }

    const onChangeHandler4 = (event) => {
        setSoil(event.target.value);
    }

    const onChangeHandler5 = (event) => {
        setCrop(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(nitro, potas, phos, soil, crop);

        setFert("urea")
        console.log(fert);
        setFormSubmitted(true);
        axios.post('/api/calculator', {
             nitro,
            'potas': potas,
            'phos': phos,
            'soil': soil,
            'crop': crop
        })
            .then(function(response)  { 
                console.log(response.data.prediction);
                setData(response.data.prediction);
             })
            .catch(error => console.error(error));

        console.log(nitro, potas, phos, soil, crop);
    };

    return (
        <div className='firstform'>
            <form onSubmit={handleSubmit}>
                <div className='form-input'>
                    <img src={nitrogen} alt='nitrogen icon'></img>
                    <input
                        className='calc-input-field'
                        type='text'
                        placeholder='Enter Nitrogen amount'
                        id='nitro' name='nitro'
                        onChange={onChangeHandler1}
                    />
                </div>
                <br />

                <div className='form-input'>
                    <img src={potassium} alt='potassium icon'></img>
                    <input
                        className='calc-input-field'
                        type='text'
                        placeholder='Enter Potassium amount'
                        id='nitro' name='nitro'
                        onChange={onChangeHandler2}
                    />
                </div>
                <br />

                <div className='form-input'>
                    <img src={phosphorus} alt='phosphorus icon'></img>
                    <input
                        className='calc-input-field'
                        type='text'
                        placeholder='Enter Phosphorus amount'
                        id='nitro' name='nitro'
                        onChange={onChangeHandler3}
                    />
                </div>
                <br />

                <div className='form-input'>
                    <img src={soilicon} alt='soil icon'></img>
                    <select
                        className="calc-dropdown"
                        onChange={onChangeHandler4}
                        id='soils'
                    >
                        <option value="none" selected disabled>Select soil</option>
                        {soils.map((soil_el, index) => {
                            return (
                                <option key={index} value={soil_el}>
                                    {soil_el}
                                </option>
                            );
                        })}
                    </select>
                </div>

                <br />

                <div className='form-input'>
                    <img src={wheat} alt='crop icon'></img>
                    <select
                        className="calc-dropdown"
                        onChange={onChangeHandler5}
                        id='crops'
                    >
                        <option value="none" selected disabled>Select crop</option>
                        {crops.map((crop_el, index) => {
                            return (
                                <option key={index} value={crop_el}>
                                    {crop_el}
                                </option>
                            );
                        })}
                    </select>
                </div>

                <br />

                <center><button className="button-40" type="submit" value="Submit">Submit</button></center>
            </form>
            {formSubmitted && (
                <div className='image-field3'>
                    <p>{(fert.toUpperCase())}</p>
                    <img className='image-file' src={fertilizers[fert]} alt='fertilzer'/>
                </div>
            )}
        </div>
    )
}

export default CalculatorForm3