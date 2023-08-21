import React from 'react';
import {Parallax} from 'react-parallax';
import Backbone from './images/backbone2.jpg';
import '../styles/reactBackboneStyle.css';

const ReactBackbone = () => {
  return (
    <div>
        <Parallax strength={300} blur={{min:-10, max:15}} bgImage={Backbone}>
            <div className="content">
                <div className="text-content"><center>
                    <h1>The Backbone of India</h1>
                    <p className='para'>With a staggering contribution of 15-17% to the nation's GDP, Indian agriculture stands tall as the backbone 
                    of the economy,supporting over half of the country's workforce. From the fertile Indo-Gangetic plains, yielding 
                    over 50% of India's total food, grain production, to the arid northwestern regions producing 80% of the country's 
                    coarse cereals, India's agricultural landscape embodies remarkable variety. The southern Deccan plateau is a 
                    cornucopia of horticultural delights, contributing to 40% of India's fruit output and being a major cotton and 
                    sugarcane hub. The northeast, with its lush greenery, accounts for 65% of India's total tea production and is a 
                    significant source of spices. Along the vast coastline, the aquaculture industry thrives, representing 6.3% 
                    of global fish production, led by states like Kerala and Andhra Pradesh. Embracing tradition and innovation, 
                    India nurtures organic farming practices, conserving 40,000 unique seed varieties, while also adopting cutting 
                    edge technologies like precision agriculture. Truly, India's agricultural diversity stands as a testament to its 
                    resilience, adaptability, and unwavering commitment to feeding itsvast population and beyond.
                    </p>
                    </center>
                </div>
            </div>
        </Parallax>
    </div>
  )
}

export default ReactBackbone;