import React from "react";
import { Link } from "react-router-dom";
import "./Overlay.css";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const Overlay = () => {
  return (
    <div className="overlay-container">
      <div className="overlay-top">
        <h1 className="overlay-title">Retro: Old is New Again</h1>
        <p className="overlay-paragraph">
          Officia sint excepteur eu est magna aliqua nulla excepteur adipisicing
          sunt cupidatat fugiat velit.
        </p>
        <Link to="#" className="overlay-link app-link">
          discover this trend
        </Link>
      </div>
      <div className="overlay-bottom">
        <div className="overlay-bottom-container">
          <Link className="app-link"><AiOutlineLeft /></Link>
          <Link className="app-link"><AiOutlineRight /></Link>
        </div>
      </div>
    </div>
  );
};

export default Overlay;