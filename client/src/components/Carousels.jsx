import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import k1 from './images/1.jpg';
import k2 from './images/2.jpg';
import k3 from './images/3.jpg';
import k4 from './images/4.jpg';
import k5 from './images/5.jpg';
import k6 from './images/6.jpg';
import '../styles/Carousel.css'
const Carousels = () => {
  const onChange = (index, item) => {
    console.log(`Changed to slide ${index}`);
  };

  const onClickItem = (index, item) => {
    console.log(`Clicked on slide ${index}`);
  };

  const onClickThumb = (index, item) => {
    console.log(`Clicked on thumb ${index}`);
  };

  return (
    <div className='slider-container' >
     <div className='carousel-text'>
    <center><h1>Indian Agriculture</h1></center>
    </div>
    <Carousel showArrows={true}  onChange={onChange} onClickItem={onClickItem} showThumbs={false} infiniteLoop={true} autoPlay={true} showStatus={false} interval={3000}>
      <div className='item'>
        <img className="img" src={k1} alt="Slide 1" />
      </div>
      <div className='item'>
        <img className="img" src={k2} alt="Slide 2" />
      </div>
      <div className='item'>
        <img className="img" src={k3} alt="Slide 3" />
      </div>
      <div className='item'>
        <img className="img" src={k4} alt="Slide 4" />
      </div>
        <div className='item'>
            <img className="img" src={k5} alt='slide 5'/>
         </div>
         <div className='item'>
            <img className="img" src={k6} alt="slide 6"/>
         </div>
    </Carousel>
    </div>
  );
};

export default Carousels;
