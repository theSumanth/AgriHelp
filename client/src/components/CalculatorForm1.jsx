import React, { useState } from 'react'
import '../styles/calculatorForm.css';
import block from './icons/block.png';
import sun from './icons/sun.png';
import waterQuan from './icons/waterQuan.png';
import crops from '../data/calccrop';

const CalculatorForm1 = () => {
    const lands = [
"Alluvial soil",
"Clayey soil",
"Marshy land",
"Loamy soil",
"Red soil",
"Black soil",
"Sandy soil",
"Saline soil",
"Clay loam soil",
"Laterite soil",
"Peat soil",
"Silt soil",
"Coastal region",
"Hilly terrain",
"Urban garden",
"Red lateritic soil", 
"Clay soil",
"Volcanic soil",
"Coconut plantation",
"Urban rooftop",
"Organic farm",
"Shaded garden",
"Hydroponic setup",
"Greenhouse",
"Mountainous region",
"Sandy loam soil",
"Desert region",
"Subtropical region",
"Coastal sandy soil",
"Coastal clayey soil",
"Coastal alluvial soil",
"Humid region"

    ]

    const seasons = [
        "Kharif",
       "Rabi",
        "Year-round",
      "Summer"
    ]

    const waters =["High (60000-120000 liters/acre)",
        "Moderate (30000-6000 liters/acre)",
        "Low (15000-30000 liters/acre)"
    ]
    
    const [land, setLand] = useState("");
    const [season, setSeason] = useState("");
    const [formSubmitted, setFormSubmitted] = useState(false);

    const [water, setWater] = useState("");
    const [cropDetails, setCropDetails] = useState([]);

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
        const matchingCrops = crops.filter((crop) => 
            crop["Type of Land"] === land &&
            crop["Season"] === season &&
            crop["Water Required"] === water
        );

        setCropDetails(matchingCrops);
        setFormSubmitted(true);
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
                    required
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
            {formSubmitted && (
                <div className="crop-details">
                    <table>
                        <thead>
                            <tr>
                                <th>Crop</th>
                                <th>Machinery Required</th>
                                <th>Min cap</th>
                                <th>Nitrogen (N)</th>
                                <th>Phosphorus (P)</th>
                                <th>Potassium (K)</th>
                                {/* <th>NPK</th> */}
                            </tr>
                        </thead>
                        <tbody>
                            {cropDetails.map((crop, index) => (
                                <tr key={index}>
                                    <td>{crop["Crop"]}</td>
                                    <td>{crop["Machinery Required"]}</td>
                                    <td>{crop["Minimum Capital"]}</td>
                                    <td>{crop["Nitrogen (N)"]}</td>
                                    <td>{crop["Phosphorus (P)"]}</td>
                                    <td>{crop["Potassium (K)"]}</td>
                                    {/* <td>{crop["Nitrogen (N)"]+","+crop["Phosphorus (P)"]+","+crop["Potassium (K)"]}</td> */}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    )
}

export default CalculatorForm1