import { useState } from "react";
import '../styles/dropdown.css'
import {useNavigate} from 'react-router-dom'
import { useLocation } from 'react-router-dom';
const DropDown = (props) => {
    const navigate = useNavigate();
    const states = [
        "Andaman & Nicobar Island",
        "Andhra Pradesh",
        "Arunanchal Pradesh",
        "Assam",
        "Bihar",
        "Chhattisgarh","Delhi","Goa","Gujarat","Haryana","Himachal Pradesh","Jammu & Kashmir","Jharkhand","Karnataka","Kerala",
        "Madhya Pradesh","Maharashtra","Manipur","Meghalaya","Mizoram","Nagaland","Odisha",
        "Puducherry","Punjab","Rajasthan","Sikkim","Tamil Nadu","Telangana","Tripura",
        "Uttar Pradesh","Uttarakhand","West Bengal"
    ];

    const [selectedState, setSelectedState] = useState(props.stateName); 
    const loc = useLocation();
    const handleSelect = (event) => {
        setSelectedState(event.target.value);
        const p = loc.pathname;
        const parts = p.split('/');
        parts[parts.length-1] = event.target.value;
        const newpath=parts.join('/');
        navigate(newpath);
    };

    return (
        <center>
            <div className="dropdown-container">
                <select
                    className="state-dropdown"
                    value={selectedState}
                    onChange={handleSelect}
                >
                    {states.map((state, index) => (
                        <option key={index} value={state}>
                            {state}
                        </option>
                    ))}
                </select>
            </div>
        </center>
    );
}

export default DropDown;