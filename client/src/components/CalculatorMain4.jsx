import React, { useState } from 'react'
import '../styles/calculatorMain.css'
import {motion} from 'framer-motion';
import CalculatorForm6 from './CalculatorForm6';
import CalculatorForm2 from './CalculatorForm2';

const CalculatorMain4 = () => {
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
                className='mainform4'>
            <table style={{borderCollapse: "collapse"}}>
                <thead>
                <td style={{}} className={active1}>
                        <div className='form1' onClick={onClickHandler1}>
                        <center><h3 style={{
                                color: "#4a4a4a"
                            }}>Pesticide Recommendation</h3></center>
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
                                <CalculatorForm6 />
                            )}
                        </div>

                        <div>
                            {onUse2 && (
                                <div className='firstform' style={{paddingTop: "2%"}}>
                                <div className='description'>
                                    <p>Pests, Insects and Fungi pose a significant threat to farmers and their presence is virtually unavoidable. Different crops attract various types of pests and diseases, which can potentially lead to crop loss. A valuable ally for farmers is the pesticide recommender, which can identify diseases and prescribe treatment. By simply capturing an image of the affected leaf, the farmer can swiftly determine the cure, offering an effective solution to safeguard their crops.</p>
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

export default CalculatorMain4