import React, { useState } from 'react'
import CalculatorForm5 from './CalculatorForm5';
import '../styles/calculatorMain.css'
import {motion} from 'framer-motion';
import CalculatorForm2 from './CalculatorForm2';

const CalculatorMain3 = () => {
    const [onUse1, setOnUse1] = useState(true);
    const [onUse2, setOnUse2] = useState(false);

    const [active1, setActive1] = useState("activeForm");
    const [active2, setActive2] = useState("");

    const onClickHandler1 = () => {
        if(onUse1 == false) {
            setOnUse1(true);
            setOnUse2(false);

            setActive1("activeForm")
            setActive2("")
        }
    };

    const onClickHandler2 = () => {
        if(onUse2 == false) {
            setOnUse2(true);
            setOnUse1(false);

            setActive2("activeForm")
            setActive1("")
        } 
    };

  return (
    <motion.div
        layout 
        transition={{layout:{duration:1, type:"spring"}}}
        className='calc'>
        <center>
            <motion.div 
                layout="position"
                initial={{opacity: 0}} 
                animate={{opacity: 1}} 
                transition={{duration: 1}}
                className='mainform3'>
            <table style={{borderCollapse: "collapse"}}>
                <thead>
                    <td style={{}} className={active1}>
                        <div className='form1' onClick={onClickHandler1}>
                        <center><h3 style={{
                                color: "#4a4a4a"
                            }}>Irrigation Scheduler</h3></center>
                        </div>
                    </td>
                    <td className={active2}>
                        <div className='form2' onClick={onClickHandler2} 
                        >
                            {/* {onUse1? className={active}: className={'form2'}} */}
                            <center><h3 style={{
                                color: "#4a4a4a"
                            }}>What it does?</h3></center>
                        </div>
                    </td>
                </thead>
                <tr>
                <td colSpan={2}>
                        <div>
                            {onUse1 && (
                                <CalculatorForm5 />
                            )}
                        </div>

                        <div>
                            {onUse2 && (
                                <div className='firstform' style={{paddingTop: "2%"}}>
                                <div className='description'>
                                    <p>The Irrigation Scheduler has simplified irrigation scheduling for farmers. It considers <b>Location</b> to render weather data like </p>
                                    <ul style={{marginLeft:"5%"}}>
                                        <li>Maximum temperature</li>
                                        <li>Minimum temperature</li>
                                        <li>Humidity</li>
                                        <li>Wind Speed</li>
                                    </ul>
                                    <p><b>Soil data: </b></p>
                                    <ul style={{marginLeft:"5%"}}>
                                            <li>Land type</li>
                                            <li>Soil moisture</li>
                                            <li>Crop type and</li>
                                            <li>Growth stage</li>
                                        </ul>
                                    <p>to calculate field capacity, wilting point and crop co-efficient. This data is then used to determine evapotranspiration which in turn informs the precise irrigation requirements. This tool facilitates decisions aimed at cultivating high-yield crops and enhancing water productivity.</p>
                                </div>
                                </div>
                            )}
                        </div>
                    </td>
                </tr>
            </table>
            </motion.div>
        </center>
    </motion.div>
  )
}

export default CalculatorMain3