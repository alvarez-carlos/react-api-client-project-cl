import React, { useEffect } from "react";
import "./About.css";
import { Link } from "react-router-dom";

import { useAbouts } from "../store/aboutsContext";

const About = () => {
  const { abouts, fetchAllAbouts } = useAbouts();

  useEffect(() => {
    fetchAllAbouts();
  }, []);

  return (
    <div className="about-container box">
      {abouts.map((about, index) => (
        <div className="about" key={index}>
          <div
            className="about-top"
            style={{ backgroundImage: `url(${about.link})` }}
          ></div>
          <div className="about-bottom">
            <p className="about-title">{about.title}</p>
            <p className="about-paragraph">{about.description}</p>
            <Link className="about-link app-link" to={about.link}>
              red more
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default About;
