import React, { useState } from 'react'
import '../styles/calculatorForm.css';
import nitrogen from './icons/nitrogen2.png';
import potassium from './icons/potassium.png';
import phosphorus from './icons/phosphorus.png';
import soilicon from './icons/soil.png';
import wheat from './icons/wheat.png';
import axios from "axios";
const CalculatorForm3 = () => {
    // const lands = [
    //     "land1",
    //     "land2",
    //     "land3",
    // ]

    const soils = [
        "Black", "Clayey", "Loamy", "Red", "Sandy",
    ]

    const crops = ["Barley", "Cotton", "Ground Nuts", "Maize", "Millets", "Oil seeds", "Paddy", "Pulses", "Sugarcane", "Tobacco", "Wheat"]

    const [nitro, setNitro] = useState(0);
    const [data, setData] = useState(0);
    const [potas, setPotas] = useState(0);
    const [phos, setPhos] = useState(0);
    const [soil, setSoil] = useState("");
    const [crop, setCrop] = useState("");

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
        axios.post('http://localhost:5000/calculator', {
            'nitro': nitro,
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
        </div>
    )
}

export default CalculatorForm3