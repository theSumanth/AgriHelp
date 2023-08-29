import { React, useState } from "react";
import '../styles/calculatorForm5.css';
import irrigation from "../data/irrigation";
import Dropdowns from "../widgets/DropDown";
import axios from 'axios';

const CalculatorForm3 = () => {
    const data = {
        crops: ["Rice",
            "Wheat",
            "Cotton",
            "Arecanut",
            "Black Pepper",
            "Cashewnuts",
            "Dry Chillies",
            "Ginger",
            "Sweet Potato",
            "Tur",
            "Bajra",
            "Ground nut",
            "Jowar",
            "Maize",
            "Moong",
            "Urad",
            "Jute"],
        typesOfLand: ["Alluvial soil",
            "Clayey soil",
            "Loamy soil",
            "Sandy soil", "Laterite soil",
            "Silt soil",
            "Marshy soil"
        ],
        stagesOfCrop: ["Germination",
            "Vegetative",
            "Flowering", "Ripening"],

    };
  

    const [irrigationDuration, setIrrigationDuration] = useState(0);
    const [updatedSoilMoisture, setUpdatedSoilMoisture] = useState(0);
    const [fieldCapacity, setFieldCapacity] = useState(0);
    const [wiltingCapacity, setWiltingCapacity] = useState(0);
    const [cropCoefficient, setCropCoefficient] = useState(0);
    const [location, setLocation] = useState('');
    const [tempmin, setTempMin] = useState(0);
    const [tempmax, setTempMax] = useState(0);
    const [humidity, setHumidity] = useState(0);
    const [windSpeed, setWindSpeed] = useState(0);
    const [soilMoisture, setSoilMoisture] = useState(0);
    const [irrigationRate, setIrrigationRate] = useState(0);
    const [formsubmitted, setFormSubmitted] = useState(false);
    const handleLocationChange = (event) => {
        setLocation(event.target.value);
    };
    const handleSoilMoisture = (event) => {
        setSoilMoisture(event.target.value);
    };
    const handleIrrigationRate = (event) => {
        setIrrigationRate(event.target.value);
    }

    const handleFetchClick = async (event) => {
        event.preventDefault();
        const options = {
            method: 'GET',
            url: 'https://apjoy-weather-forecast.p.rapidapi.com/forecast',
            params: {
                location: location
            },
            headers: {
                'X-RapidAPI-Key': 'c134a951e7mshd259334330baa17p141fd1jsn93d3fd28737c',
                'X-RapidAPI-Host': 'apjoy-weather-forecast.p.rapidapi.com'
            }
        };

        try {
            const response = await axios.request(options);

            setTempMin(response.data.list[0].main.temp_min);
            setTempMax(response.data.list[0].main.temp_max);
            setHumidity(response.data.list[0].main.humidity);
            setWindSpeed(response.data.list[0].wind.speed)
            console.log(response);
        } catch (error) {
            console.error(error);
        }
    };

    const handleDropdownChange = (selectedCrop, selectedLand, selectedStage) => {

        const res = irrigation.find(crop => crop.crop === selectedCrop && crop.type_of_land === selectedLand && crop.stage_of_crop === selectedStage)
        if (res.field_capacity && res.wilting_capacity && res.crop_coefficient) {
            setFieldCapacity(res.field_capacity);
            setWiltingCapacity(res.wilting_capacity);
            setCropCoefficient(res.crop_coefficient);
        }
        else {
            setFieldCapacity("not found");
            setWiltingCapacity("not found");
            setCropCoefficient("not found");
        }
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        const ETo = (
            0.0023 * (tempmax - tempmin)
            + 0.0516 * humidity * (tempmax + tempmin) * (1 - (humidity / 100))
            + 0.0007 * ((tempmax + tempmin) / 2) * windSpeed
        );
        const ETc = ETo * cropCoefficient;
        let net_irrigation_requirement = (fieldCapacity - soilMoisture) - ETc;
        if (soilMoisture - ETc < wiltingCapacity) {
            net_irrigation_requirement += wiltingCapacity - (soilMoisture - ETc)
        }
        let irrigation_duration;
        let updated_soil_moisture;
        if(net_irrigation_requirement > 0)
        {
            irrigation_duration = net_irrigation_requirement / irrigationRate;
            //console.log(soilMoisture);
            //updated_soil_moisture = (0.2) + (irrigation_duration).toFixed(2) * (0.01)
            // updated_soil_moisture = (soilMoisture) + ((irrigation_duration).toFixed(2) * irrigationRate).toFixed(2);
            updated_soil_moisture = parseFloat(soilMoisture) + (irrigation_duration) * parseFloat(irrigationRate);
            // updated_soil_moisture = 23.3;
            if(updated_soil_moisture > fieldCapacity){
            updated_soil_moisture = fieldCapacity;
            }
        }
        else{
            updated_soil_moisture = parseFloat(soilMoisture);
        }
        // console.log(typeof(irrigationRate));
        updated_soil_moisture = (updated_soil_moisture).toFixed(2);
        irrigation_duration = parseInt(irrigation_duration);
        // console.log((ETc).toFixed(2),(net_irrigation_requirement).toFixed(2),(updated_soil_moisture).toFixed(2), (irrigation_duration));
        console.log(ETc, net_irrigation_requirement, updated_soil_moisture, irrigation_duration);
        setUpdatedSoilMoisture(updated_soil_moisture);
        if(isNaN(irrigation_duration))
        {
            setIrrigationDuration(0);
        }
        else
        {
        setIrrigationDuration(irrigation_duration);
        }
        setFormSubmitted(true);
    };

    return (
        <div className="irrigation-form">
            <center>
                <form onSubmit={handleSubmit}>
                    <div className="forflex">
                    <div className="form5-column">
                        <div className="form5-input">
                            <label htmlFor="loc">Location</label>
                            {/* <div> */}
                                <input
                                    className="location"
                                    id="loc"
                                    type="text"
                                    placeholder="Enter Location"
                                    value={location}
                                    onChange={handleLocationChange}
                                />
                                <button style={{cursor:"pointer"}} onClick={handleFetchClick}>Fetch</button>
                            {/* </div> */}
                        </div>
                        <br></br>
                        <div className="form5-input">
                            <span>Minimum Temparature </span>

                            <input className="calc-input-field5" type="number" disabled value={tempmin} readOnly />
                        </div>
                        <br></br>
                        <div className="form5-input">
                            <span>Maximum Temparature</span>
                            <input className="calc-input-field5-readonly" type="number" disabled value={tempmax} readOnly />
                        </div>
                        <br></br>
                        <div className="form5-input">
                            <span>Humidity</span>
                            <input className="calc-input-field5-readonly" type="number" disabled value={humidity} readOnly />
                        </div>
                        <br></br>
                        <div className="form5-input">
                            <span>Wind speed</span>
                            <input className="calc-input-field5-readonly" type="number" disabled value={windSpeed} readOnly />
                        </div>
                    </div>

                    <div className="form5-column">
                        <Dropdowns data={data} onChange={handleDropdownChange} />

                        <div className="form5-input">
                            <span>Field Capacity</span>
                            <input className="calc-input-field5-readonly" type="number" disabled value={fieldCapacity} readOnly />
                        </div>
                        <br></br>
                        <div className="form5-input">
                            <span>Wilting Capacity Power</span>
                            <input className="calc-input-field5-readonly" type="number" disabled value={wiltingCapacity} readOnly />
                        </div>
                        <br></br>
                        <div className="form5-input">
                            <span>Crop Coefficient</span>
                            <input className="calc-input-field5-readonly" type="number" disabled value={cropCoefficient} readOnly />
                        </div>
                    </div>
                    <br></br>
                    <div className="form5-column">
                        <div className="form5-input">
                            <span>Initial Soil Moisture</span>
                            <input
                                className="calc-input-field5"
                                type="number"
                                placeholder="Enter"
                                value={soilMoisture}
                                onChange={handleSoilMoisture}
                                />
                        </div>
                        <br></br>
                        <div className="form5-input">
                            <span>Irrigation rate</span>
                            <input
                                className="calc-input-field5"
                                type="number"
                                placeholder="Enter"
                                value={irrigationRate}
                                onChange={handleIrrigationRate}
                                />
                        </div>
                    </div>
                    <br></br>
                    </div>
                    <button className="button-40" type="submit" value="Submit">Submit</button>
                    <br />
                    {/* <input type="submit" /> */}
                </form>
                {formsubmitted && (<div>
                <br></br>
                <div className="output-form5">
                    <p>Updated Soil Moisture : {updatedSoilMoisture}</p>
                    <p>Irrigation duration : {irrigationDuration}</p>
                </div>
                </div>)
                }
            </center>
        </div>
    );
}
export default CalculatorForm3;