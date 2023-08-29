import {React,useState, useEffect} from "react";
import './calculator.css'
import CalculatorMain from "../../components/CalculatorMain";
import CalculatorMain2 from "../../components/CalculatorMain2";
import bgvid from "../../widgets/bgvid2.mp4";
import calc_bg from "../../components/images/calc_bg.jpg";
import CalculatorMain3 from "../../components/CalculatorMain3";
import axios from "axios";
const Calculator = () => {
    // const [data, setData] = useState('');

    // useEffect(() => {
    //     axios.get('http://localhost:5000/calculator')
    //         .then(response => setData(response.data.message))
    //         .catch(error => console.error(error));
    //     console.log(data);
    // }, []);

 
    return (
        <div className="parshu">
            <video className='calc-bg' muted autoPlay loop poster={calc_bg} id="bgvid">
                <source src={bgvid} type="video/mp4"/>
                Your Browser doesn't support the video tag.
            </video>
            <CalculatorMain />
            <CalculatorMain2 />
            <CalculatorMain3 />
        </div>
    )
}

export default Calculator;