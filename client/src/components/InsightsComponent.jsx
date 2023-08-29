import React, { useState } from 'react'
import {motion} from 'framer-motion'

import '../styles/insightsComponentStyle.css'
// import bg from "../components/images/background_for_insights.jpg"

const InsightsComponent = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    const [isOpen3, setIsOpen3] = useState(false);
    const [isOpen4, setIsOpen4] = useState(false);
    const [isOpen5, setIsOpen5] = useState(false);
    const [isOpen6, setIsOpen6] = useState(false);
    const [isOpen7, setIsOpen7] = useState(false);
    const [isOpen8, setIsOpen8] = useState(false);
    const [isOpen9, setIsOpen9] = useState(false);

  return (
    <motion.div className='insights'
        layout 
        initial={{opacity: 0}} 
        animate={{opacity: 1}}
    >
        {/* <img src={bg} alt="insight_bg" /> */}
        <div className='insight-head1'>
            <center><h1>Agriculture in India - Current Scenario</h1></center>
        </div>
        <motion.div
            layout 
            variants={{
                hidden: { opacity: 0, y: 275 },
                visible: { opacity: 1, y: 0},
            }}
            initial="hidden"
            animate="visible"
            transition={{duration: 0.5, delay: 0.25}}
            className='in-card-container'
            style={{borderRadius: '1.5rem', boxShadow: '0px 10px 30px rgba(0,0,0, 0.5)'}}>
            <motion.div layout="position" className='in-cognos-container'
                onMouseEnter={() => setIsOpen(true)}
                // onMouseOut={() => setIsOpen(false)}
                >
                <center>
                    <iframe src="https://us3.ca.analytics.ibm.com/bi/?perspective=dashboard&amp;pathRef=.my_folders%2FInsight1&amp;closeWindowOnLastView=true&amp;ui_appbar=false&amp;ui_navbar=false&amp;shareMode=embedded&amp;action=view&amp;mode=dashboard&amp;subView=model0000018a156479be_00000000" width="885" height="450" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen=""></iframe>
                </center>
            </motion.div>
            {isOpen && (
            <motion.div 
                initial={{opacity: 0}} 
                animate={{opacity: 1}} 
                transition={{duration: 1}}
                className='in-card-title'>
                <center>
                    <p>
                        Over the past 15 years, rice has been the highest grown crop by covering 32.1% of overall production which is closely followed by wheat.
                    </p>
                </center>
            </motion.div>
            )}
        </motion.div>

        <motion.div
            layout 
            transition={{layout:{duration:1, type:"spring"}}}
            className='in-card-container'
            style={{borderRadius: '1.5rem', boxShadow: '0px 10px 30px rgba(0,0,0, 0.5)'}}>
            <motion.div layout="position" className='in-cognos-container'
                // onMouseOut={() => setIsOpen2(false)}
                onMouseEnter={() => setIsOpen2(true)}>
                <center>
                    <iframe src="https://us3.ca.analytics.ibm.com/bi/?perspective=dashboard&amp;pathRef=.my_folders%2FInsight2&amp;closeWindowOnLastView=true&amp;ui_appbar=false&amp;ui_navbar=false&amp;shareMode=embedded&amp;action=view&amp;mode=dashboard&amp;subView=model0000018a159923e1_00000001" width="885" height="450" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen=""></iframe>
                </center>
            </motion.div>
            {isOpen2 && (
            <motion.div 
                initial={{opacity: 0}} 
                animate={{opacity: 1}} 
                transition={{duration: 1}}
                className='in-card-title'>
                <center>
                    <p>
                        Uttar pradesh, Madhya Pradesh, Andhra Pradesh and West Bengal are the states with most production
                    </p>
                </center>
            </motion.div>
            )}
        </motion.div>

        <motion.div
            layout 
            transition={{layout:{duration:1, type:"spring"}}}
            className='in-card-container'
            style={{borderRadius: '1.5rem', boxShadow: '0px 10px 30px rgba(0,0,0, 0.5)'}}>
            <motion.div layout="position" className='in-cognos-container'
                // onMouseOut={() => setIsOpen3(false)}
                onMouseEnter={() => setIsOpen3(true)}>
                <center>
                    <iframe src="https://us3.ca.analytics.ibm.com/bi/?perspective=dashboard&amp;pathRef=.my_folders%2FInsight3&amp;closeWindowOnLastView=true&amp;ui_appbar=false&amp;ui_navbar=false&amp;shareMode=embedded&amp;action=view&amp;mode=dashboard&amp;subView=model0000018a1b0bf4eb_00000008" width="885" height="450" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen=""></iframe>
                </center>
            </motion.div>
            {isOpen3 && (
            <motion.div 
                initial={{opacity: 0}} 
                animate={{opacity: 1}} 
                transition={{duration: 1}}
                className='in-card-title'>
                <center>
                    <p>
                        India experienced one of the worst droughts in the year 2002 with all India rainfall being 81% of its long period average. [
                        <a href='https://mausamjournal.imd.gov.in/index.php/MAUSAM/article/download/491/459/1790#:~:text=India%20experienced%20one%20of%20the,to%20middle%20of%20nineteenth%20century'>
                             Source
                        </a> ]<br />
                        <b> Therefore area cultivated also decreased</b> <br />
                        Production has been in an upward trend in recent years.
                        According to the forecast production has decreased after 2019-20 which is actually the case.                    </p>
                </center>
            </motion.div>
            )}
        </motion.div>

        <motion.div
            layout 
            transition={{layout:{duration:1, type:"spring"}}}
            className='in-card-container'
            style={{borderRadius: '1.5rem', boxShadow: '0px 10px 30px rgba(0,0,0, 0.5)'}}>
            <motion.div layout="position" className='in-cognos-container'
                // onMouseOut={() => setIsOpen4(false)}
                onMouseEnter={() => setIsOpen4(true)}>
                <center>
                    <iframe src="https://us3.ca.analytics.ibm.com/bi/?perspective=dashboard&amp;pathRef=.my_folders%2FInsights4&amp;closeWindowOnLastView=true&amp;ui_appbar=false&amp;ui_navbar=false&amp;shareMode=embedded&amp;action=view&amp;mode=dashboard&amp;subView=model0000018a1c218cbb_00000001" width="885" height="450" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen=""></iframe>                
                </center>
            </motion.div>
            {isOpen4 && (
            <motion.div 
                initial={{opacity: 0}} 
                animate={{opacity: 1}} 
                transition={{duration: 1}}
                className='in-card-title'>
                <center>
                    <p>
                        At times, no production was done even when cultivable area was available.                    
                    </p>
                </center>
            </motion.div>
            )}
        </motion.div>

        <motion.div
            layout 
            transition={{layout:{duration:1, type:"spring"}}}
            className='in-card-container'
            style={{borderRadius: '1.5rem', boxShadow: '0px 10px 30px rgba(0,0,0, 0.5)'}}>
            <motion.div layout="position" className='in-cognos-container'
                // onMouseOut={() => setIsOpen5(false)}
                onMouseEnter={() => setIsOpen5(true)}>
                <center>
                    <iframe src="https://us3.ca.analytics.ibm.com/bi/?perspective=dashboard&amp;pathRef=.my_folders%2FInsight5&amp;closeWindowOnLastView=true&amp;ui_appbar=false&amp;ui_navbar=false&amp;shareMode=embedded&amp;action=view&amp;mode=dashboard&amp;subView=model0000018a1dc4845d_00000001" width="885" height="450" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen=""></iframe>                
                </center>
            </motion.div>
            {/* {isOpen5 && (
            <motion.div 
                initial={{opacity: 0}} 
                animate={{opacity: 1}} 
                transition={{duration: 1}}
                className='in-card-title'>
                <center>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur fugiat molestias iure ipsum cum temporibus dolorum, repellat, velit alias obcaecati cumque vel nemo, blanditiis provident laborum commodi ex officiis impedit?
                        Unde, dicta quae fugit quidem temporibus itaque ducimus atque iure odit laborum asperiores                    </p>
                </center>
            </motion.div>
            )} */}
        </motion.div>

        <motion.div
            layout 
            transition={{layout:{duration:1, type:"spring"}}}
            className='in-card-container'
            style={{borderRadius: '1.5rem', boxShadow: '0px 10px 30px rgba(0,0,0, 0.5)'}}>
            <motion.div layout="position" className='in-cognos-container'
                // onMouseOut={() => setIsOpen6(false)}
                onMouseEnter={() => setIsOpen6(true)}>
                <center>
                    <iframe src="https://us3.ca.analytics.ibm.com/bi/?perspective=dashboard&amp;pathRef=.my_folders%2FInsight6&amp;closeWindowOnLastView=true&amp;ui_appbar=false&amp;ui_navbar=false&amp;shareMode=embedded&amp;action=view&amp;mode=dashboard&amp;subView=model0000018a1df8f52c_00000002" width="885" height="450" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen=""></iframe>                
                </center>
            </motion.div>
            {/* {isOpen6 && (
            <motion.div 
                initial={{opacity: 0}} 
                animate={{opacity: 1}} 
                transition={{duration: 1}}
                className='in-card-title'>
                <center>
                    <p>
                        Some crops are different from other crops in terms of weight, they can have a lot of weight for each unit like sugarcane or very less weight like cotton. As a result, they can’t be collectively compared with other crops.                    </p>
                </center>
            </motion.div>
            )} */}
        </motion.div>

        <div className='insight-head1'>
            <center><h1>Special crops</h1></center>
            <center>
                <p>
                    Some crops are different from other crops in terms of weight, they can have a lot of weight for each unit <br />like sugarcane or very less weight like cotton. As a result, they can’t be collectively compared with other crops.
                </p>
            </center>
        </div>


        <motion.div
            layout 
            transition={{layout:{duration:1, type:"spring"}}}
            className='in-card-container'
            style={{borderRadius: '1.5rem', boxShadow: '0px 10px 30px rgba(0,0,0, 0.5)'}}>
            <motion.div layout="position" className='in-cognos-container'
                // onMouseOut={() => setIsOpen7(false)}
                onMouseEnter={() => setIsOpen7(true)}>
                <div className='insight-head2'>
                    <center><h3>COCONUT</h3></center>
                </div>
                <center>
                    <iframe src="https://us3.ca.analytics.ibm.com/bi/?perspective=dashboard&amp;pathRef=.my_folders%2FInsight7&amp;closeWindowOnLastView=true&amp;ui_appbar=false&amp;ui_navbar=false&amp;shareMode=embedded&amp;action=view&amp;mode=dashboard&amp;subView=model0000018a22d71877_00000002" width="885" height="450" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen=""></iframe>                
                </center>
            </motion.div>
            {isOpen7 && (
            <motion.div 
                initial={{opacity: 0}} 
                animate={{opacity: 1}} 
                transition={{duration: 1}}
                className='in-card-title'>
                <center>
                    <p>
                        Coconuts are measured in counts. On an average nearly 7000 nuts of coconuts are required to produce one tonne of ‘copra’. As shown above, coconuts are mostly produced in the southern states.                    
                    </p>
                </center>
            </motion.div>
            )}
        </motion.div>

        <motion.div
            layout 
            transition={{layout:{duration:1, type:"spring"}}}
            className='in-card-container'
            style={{borderRadius: '1.5rem', boxShadow: '0px 10px 30px rgba(0,0,0, 0.5)'}}>
            <motion.div layout="position" className='in-cognos-container'
                // onMouseOut={() => setIsOpen8(false)}
                onMouseEnter={() => setIsOpen8(true)}>
                <div className='insight-head2'>
                    <center><h3>SUGARCANE</h3></center>
                </div>
                <center>
                    <iframe src="https://us3.ca.analytics.ibm.com/bi/?perspective=dashboard&amp;pathRef=.my_folders%2FInsight8&amp;closeWindowOnLastView=true&amp;ui_appbar=false&amp;ui_navbar=false&amp;shareMode=embedded&amp;action=view&amp;mode=dashboard&amp;subView=model0000018a22e002dc_00000002" width="885" height="450" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen=""></iframe>                
                </center>
            </motion.div>
            {isOpen8 && (
            <motion.div 
                initial={{opacity: 0}} 
                animate={{opacity: 1}} 
                transition={{duration: 1}}
                className='in-card-title'>
                <center>
                    <p>
                        Though measured in tonnes, sugarcane requires very little area to produce each stick which weighs 2-3 kg. As seen in the chart above, Sugarcane contributes nearly half of production in terms of weight. India is the second largest producer of sugarcane which constitutes nearly 18% of sugar output in the world.                    
                    </p>
                </center>
            </motion.div>
            )}
        </motion.div>

        <motion.div
            layout 
            transition={{layout:{duration:1, type:"spring"}}}
            className='in-card-container'
            style={{borderRadius: '1.5rem', boxShadow: '0px 10px 30px rgba(0,0,0, 0.5)'}}>
            <motion.div layout="position" className='in-cognos-container'
                // onMouseOut={() => setIsOpen9(false)}
                onMouseEnter={() => setIsOpen9(true)}>
                <div className='insight-head2'>
                    <center><h3>LIGHTWEIGHT CROPS</h3></center>
                </div>
                <center>
                    <iframe src="https://us3.ca.analytics.ibm.com/bi/?perspective=dashboard&amp;pathRef=.my_folders%2FInsight9&amp;closeWindowOnLastView=true&amp;ui_appbar=false&amp;ui_navbar=false&amp;shareMode=embedded&amp;action=view&amp;mode=dashboard&amp;subView=model0000018a23235bb6_00000003" width="885" height="450" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen=""></iframe>                
                </center>
            </motion.div>
            {isOpen9 && (
            <motion.div 
                initial={{opacity: 0}} 
                animate={{opacity: 1}} 
                transition={{duration: 1}}
                className='in-card-title'>
                <center>
                    <p>
                        Cotton, jute and mesta are three lightweight crops that are used for commercial purposes. As shown above, all these crops are low yielding crops with an collective average of 4 compared with the highest yield of 29.                    
                    </p>
                </center>
            </motion.div>
            )}
        </motion.div>

        <div style={{paddingTop: "1rem", paddingBottom: "1rem"}}>
                <center><hr style={{width: "1100px"}}/></center>
        </div>
    </motion.div>
  )
}

export default InsightsComponent