import React, { useState } from 'react'
import CalculatorForm3 from './CalculatorFrom3';
import CalculatorForm2 from './CalculatorForm2';
import '../styles/calculatorMain.css'
import {motion} from 'framer-motion';

const CalculatorMain2 = () => {
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
                className='mainform'>
            <table style={{borderCollapse: "collapse"}}>
                <thead>
                    <td style={{}} className={active1}>
                        <div className='form1' onClick={onClickHandler1}>
                        <center><h3 style={{
                                color: "#4a4a4a"
                            }}>Fertilizer Recommendation</h3></center>
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
                                <CalculatorForm3 />
                            )}
                        </div>

                        <div>
                            {onUse2 && (
                                <div className='firstform' style={{paddingTop: "2%"}}>
                                    <div className='description'>
                                        <p>After conducting soil testing, the farmer can determine crucial information about their soil including nutrient availability, pH value, moisture levels and more. With this knowledge the farmer can make informed decisions about selecting the appropriate fertilizers tailored to their specific crop and land requirements.</p>
                                        {/* <br /> */}
                                        <p>By supplying information of nitrogen, phosphorus and potassium levels in the soil along with the crop type and land characteristics, the farmer can determine the precise fertilizer needed for the successful growth of crop. This proactive approach prevents crop loss due to nutrient deficiencies, ensuring healthier and more productive yields.</p>
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

export default CalculatorMain2