import React from 'react';
import '../styles/Card.css';
import { Link } from "react-router-dom";
const Card = ({ imageUrl, description, articleLink , classArr, isCalc, heading}) => {
  let tar = "_blank"
  if(isCalc){
    tar = "_self";
  }
  return (
    <Link style={{textDecoration:"none"}} to={articleLink}  className={(classArr[0])} target={tar}>
    <div className={(classArr[1])}>
      <img src={imageUrl} alt="Card" className={(classArr[2])} />
      {isCalc? <div className='sol-card-description'><b>{heading}</b> <br /> <br />{description}</div> : <div className="card-description">{description}</div>}
      {/* <div className="card-description">{description}</div> */}
    </div>
    </Link>
  );
};

export default Card;
