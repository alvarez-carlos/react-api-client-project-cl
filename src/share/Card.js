import React from "react";
import {Link} from 'react-router-dom'

import './Card.css'

const Card = ({ title, description, link }) => {
  return (
    <div className="box">
      <div className="my-card">
        <div className="my-card-left" style={{backgroundImage: `url(${link})`}}></div>
        <div className="my-card-right">
          <div className="my-card-container">
            <p className="my-card-title">
              {title}
            </p>
            <p className="my-card-paragraph">
              {description}
            </p>
            <Link to="#" className="my-card-link app-link">
              read more
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
