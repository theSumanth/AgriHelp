import React, { useState } from 'react'
import CalculatorForm5 from './CalculatorForm5';
import '../styles/calculatorMain.css'
import {motion} from 'framer-motion';

const CalculatorMain3 = () => {
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
                    <td style={{}} className='activeForm'>
                        <div className='form1'>
                        <center><h3 style={{
                                color: "#4a4a4a"
                            }}>Irrigation Recommendation</h3></center>
                        </div>
                    </td>
                </thead>
                <tr>
                    <td>
                        <div>
                            <CalculatorForm5 />
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