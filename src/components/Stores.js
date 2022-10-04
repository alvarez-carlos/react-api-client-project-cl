import React from "react";
import "./Stores.css";
import { Link } from "react-router-dom";
import {Map} from "../components";

const Stores = () => {  
  return (
    <div className="stores">
      <div className="stores-top">
        <div className="stores-title-container">
          <p className="stores-title">Found in over</p>
          <p className="stores-link">XXXX Stores</p>
        </div>
        <Link className="app-link stores-link" to='/stores'>find a store near you</Link>
      </div>
      <div className="stores-bottom">        
        <Map fullScreen={false}/>
      </div>
    </div>
  );
};

export default Stores;
