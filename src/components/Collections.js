import React from "react";
import "./Collections.css";
import { Link } from "react-router-dom";

const Collections = () => {
  return (
    <div className="box">
      <div className="collections">
        <div className="collections-left">
        </div>
        <div className="collections-right">
          <div className="collection-card-container">
            <p className="collection-card-title">Shop anything and everything</p>
            <p className="collection-card-paragraph">
              Eiusmod mollit exercitation consectetur officia nisi. Ut laborum
              anim proident eu cupidatat dolor.
            </p>
            <Link to="/collections" className="collection-card-link app-link">
              browse our collections
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collections;