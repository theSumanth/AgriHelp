import bg from '../components/images/backbone2.jpg';
import '../styles/backboneStyle.css';
const Backbone= () =>{
    return(
        <header>
                <img src={bg} alt="Backbone of India" className='background'/>
                <h2 className='title'>The Backbone of India</h2>
                <section className='para'>
                With a staggering contribution of 15-17% to the nation's GDP, Indian agriculture stands tall as the backbone<br />
                of the economy,supporting over half of the country's workforce. From the fertile Indo-Gangetic plains, yielding<br />
                over 50% of India's total food, grain production, to the arid northwestern regions producing 80% of the country's<br />
                coarse cereals, India's agricultural landscape embodies remarkable variety. The southern Deccan plateau is a<br />
                cornucopia of horticultural delights, contributing to 40% of India's fruit output and being a major cotton and<br />
                sugarcane hub. The northeast, with its lush greenery, accounts for 65% of India's total tea production and is a<br />
                significant source of spices. Along the vast coastline, the aquaculture industry thrives, representing 6.3%<br />
                of global fish production, led by states like Kerala and Andhra Pradesh. Embracing tradition and innovation,<br />
                India nurtures organic farming practices, conserving 40,000 unique seed varieties, while also adopting cutting<br />
                edge technologies like precision agriculture. Truly, India's agricultural diversity stands as a testament to its<br />
                resilience, adaptability, and unwavering commitment to feeding itsvast population and beyond.
                </section>
            </header>
    )
}

export default Backbone;