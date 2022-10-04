import React, {useEffect} from "react";

import { Link } from "react-router-dom";

import { useTrends } from "../store/trendsContext";


import "./Trends.css";

const Trends = () => {
  const { trends, fetchAllTrends } = useTrends();
  
  useEffect(() => {
    fetchAllTrends();
  }, []);

  return (
    <div className="trends-container box">
      <div className="trends">
        <div className="card-container">
          <h2 className="card-title">Discover your true style</h2>
          <p className="card-paragraph">
            Eiusmod mollit exercitation consectetur officia nisi. Ut laborum
            anim proident eu cupidatat dolor.
          </p>
          <Link to="/trends" className="card-link">
            explore our trends
          </Link>
        </div>

        {trends.map((image, index) => (
          <div key={index} className="gallery-item" onClick={()=>{}} style={{backgroundImage: `url(${image.link})`}}></div>
        ))}
      </div>
    </div>
  );
};

export default Trends;
