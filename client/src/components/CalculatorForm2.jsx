import React, { useState } from 'react'
import '../styles/calculatorForm.css';
import block from './icons/block.png';
import sun from './icons/sun.png';
import waterQuan from './icons/waterQuan.png';

const CalculatorForm2 = () => {
    const lands = [
        "land1",
        "land2",
        "land3",
    ]

    const seasons = [
        "summer", "winter", "spring",
    ]

    const waters =["Min", "Max"]

    const [land, setLand] = useState("");
    const [season, setSeason] = useState("");
    const [water, setWater] = useState("");

    const onChangeHandler1 = (event) => {
        setLand(event.target.value);
    }

    const onChangeHandler2 = (event) => {
        setSeason(event.target.value);
    }

    const onChangeHandler3 = (event) => {
        setWater(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(land, season, water);
    };

    return (
        <div className='firstform'>
            <form onSubmit={handleSubmit}>
                <div className='form-input'>
                <img src={block} alt='land icon'></img>
                {/* <label htmlFor="lands">Choose type of Land  </label> */}
                <select
                    className="calc-dropdown"
                    // value={land}
                    onChange={onChangeHandler1}
                    id='lands'
                >
                    <option value="none" selected disabled>Select type of Land</option>
                    {lands.map((land_el, index) => {
                        return (
                            <option key={index} value={land_el}>
                                {land_el}
                            </option>
                        );
                    })}
                </select>
                </div>
                <br />               

                <div className='form-input'>
                <img src={sun} alt='sun icon'></img>
                {/* <label htmlFor="seasons">Choose Season  </label> */}
                <select
                    className="calc-dropdown"
                    onChange={onChangeHandler2}
                    id='seasons'
                >
                    <option value="none" selected disabled>Select Season</option>
                    {seasons.map((season_el, index) => {
                        return (
                            <option key={index} value={season_el}>
                                {season_el}
                            </option>
                        );
                    })}
                </select>
                </div>

                <br />               

                <div className='form-input'>
                <img src={waterQuan} alt='water icon'></img>
                {/* <label htmlFor="waters">Choose amount of Water  </label> */}
                <select
                    className="calc-dropdown"
                    onChange={onChangeHandler3}
                    id='waters'
                >
                    <option value="none" selected disabled>Select amount of water</option>
                    {waters.map((water_el, index) => {
                        return (
                            <option key={index} value={water_el}>
                                {water_el}
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

export default CalculatorForm2