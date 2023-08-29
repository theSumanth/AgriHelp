import React, { useState } from 'react'
import '../styles/calculatorMain.css'
import {motion} from 'framer-motion';
import CalculatorForm6 from './CalculatorForm6';

const CalculatorMain4 = () => {
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
                    <td style={{}} className='activeForm'>
                        <div className='form1'>
                        <center><h3 style={{
                                color: "#4a4a4a"
                            }}>Pesticide Recommendation</h3></center>
                        </div>
                    </td>
                </thead>
                <tr>
                    <td>
                        <div>
                            <CalculatorForm6 />
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