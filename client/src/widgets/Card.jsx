import React from 'react';
import '../styles/Card.css';

const Card = ({ imageUrl, description, articleLink , classArr, isCalc, heading}) => {
  return (
    <a style={{textDecoration:"none"}} href={articleLink}  className={(classArr[0])} target='_blank'>
    <div className={(classArr[1])}>
      <img src={imageUrl} alt="Card" className={(classArr[2])} />
      {isCalc? <div className='sol-card-description'><b>{heading}</b> <br /> <br />{description}</div> : <div className="card-description">{description}</div>}
      {/* <div className="card-description">{description}</div> */}
    </div>
    </a>
  );
};

export default Card;
