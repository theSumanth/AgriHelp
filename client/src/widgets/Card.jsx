import React from 'react';
import '../styles/Card.css';

const Card = ({ imageUrl, description, articleLink }) => {
  return (
    <div className="card">
      
      
      <a href={articleLink}  className="card-button" target='_blank'>
      <img src={imageUrl} alt="Card" className="card-image" />
      </a>
      <div className="card-description">{description}</div>
    </div>
  );
};

export default Card;
