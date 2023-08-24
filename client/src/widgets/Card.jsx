import React from 'react';
import '../styles/Card.css';

const Card = ({ imageUrl, description, articleLink }) => {
  return (
    <a style={{textDecoration:"none"}} href={articleLink}  className="card-button" target='_blank'>
    <div className="card">
      <img src={imageUrl} alt="Card" className="card-image" />
     
      <div className="card-description">{description}</div>
    </div>
    </a>
  );
};

export default Card;
