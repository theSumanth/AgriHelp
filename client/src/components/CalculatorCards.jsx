import React from 'react'
import Card from '../widgets/Card';
import '../styles/calculatorCards.css'

import cardImage1 from './images/croprot2.jpg'
import cardImage2 from './images/notill2.jpg'
import cardImage3 from './images/cropcover2.jpg'
import cardImage4 from './images/regagr2.jpg'

const CalculatorCards = () => {
    const calcCards = [
        {   
            id : 0,
            imageUrl : cardImage1,
            description: "Effective implementation of crop rotation is key to reaping its numerous benefits. While the principles of crop rotation are straightforward, the devil is in the details. Here's a guide to help you successfully implement crop rotation on your farm",
            articleLink: "/othersolution1",
            classArr: ["sol-card-button", "sol-card", "sol-card-image",],
            isCalc: true,
            heading: "Implementing Crop Rotation: A Guide to Sustainable Farming",
        },
        {
            id: 1,
            imageUrl: cardImage2,
            description: "No-till farming is a progressive agricultural practice that stands as a beacon of sustainability and environmental stewardship. By eliminating or reducing the need for traditional plowing and tilling, this method offers a myriad of advantages, including enhanced soil health, decreased greenhouse gas emissions, and improved crop quality. Here's an in-depth look at how to implement no-till farming effectively.",
            articleLink: '/othersolution2',
            classArr: ["sol-card-button", "sol-card", "sol-card-image",],
            isCalc: true,
            heading: "No-Till Farming: Revolutionizing Sustainable Agriculture",
        },
        {
            id: 1,
            imageUrl: cardImage3,
            description: "Cover cropping is a transformative agricultural practice that plays a pivotal role in enhancing sustainability, soil health, and overall ecosystem balance. By strategically planting non-cash crops during fallow periods, this method offers a multitude of benefits, including improved soil structure, weed suppression, nutrient enrichment, and reduced erosion. Here's a comprehensive guide to effectively implementing cover cropping on your farm.",
            articleLink: '/othersolution3',
            classArr: ["sol-card-button", "sol-card", "sol-card-image",],
            isCalc: true,
            heading: "Cover Cropping: Nurturing Agricultural Resilience and Soil Health",
        },
        {
            id: 1,
            imageUrl: cardImage4,
            description: "Regenerative agriculture is a holistic and forward-thinking approach to farming that goes beyond sustainability, aiming to actively restore and revitalize the land while simultaneously producing high-quality agricultural products. Rooted in the idea of working in harmony with nature, this method has gained global recognition for its potential to address critical environmental challenges and promote resilient, healthy ecosystems. Here's an in-depth exploration of regenerative agriculture and how to integrate its principles into your farming practices ",
            articleLink: '/othersolution4',
            classArr: ["sol-card-button", "sol-card", "sol-card-image",],
            isCalc: true,
            heading: "Regenerative Agriculture: Cultivating a Sustainable Future",
        }
    ];

  return (
    <div className="solutions">
    <center><h2 style={{color: "white", paddingTop: "3%"}}>Other Solutions</h2></center>
    <div className="sol-card-container">
        {calcCards.map((card) => (
            <Card
                key={card.id}
                imageUrl={card.imageUrl}
                description={card.description}
                articleLink={card.articleLink}
                classArr={card.classArr}
                isCalc={card.isCalc}
                heading={card.heading}
            />
        ))}
    </div>
    </div>
  )
}

export default CalculatorCards