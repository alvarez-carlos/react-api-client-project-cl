import React from "react";
import { Link } from "react-router-dom";

import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

import Logo from "../assets/im2.jpg";

import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-container" id="footer">
      <div className="footer-left">
        <div className="footer-left-container">
          <div className="footer-nav-container">
            <div>
              <Link to="/trends" className="footer-nav-link footer-nav-items">
                trends
              </Link>
            </div>
            <div>
              <Link to="/collections" className="footer-nav-link footer-nav-items">
                collections
              </Link>
            </div>
            <div>
              <Link to="/tips-and-guides" className="footer-nav-link footer-nav-items">
                tips & guides
              </Link>
            </div>
            <div>
              <Link to="/stores" className="footer-nav-link footer-nav-items">
                find a store
              </Link>
            </div>
            <div>
              <Link to="/careers" className="footer-nav-link footer-nav-items">
                careers
              </Link>
            </div>
          </div>

          <div className="footer-contact-container">
            <div className="footer-contact-left">
              <p className="footer-details">tel:+(507)314-7709</p>
              <p className="footer-details">tel:+(507)314-7709</p>
              <p className="footer-details">
                <Link
                  to="#"
                  onClick={() =>
                    (window.location = "mailto:info@tiendaconcepslife.com")
                  }
                  className="footer-email"
                >
                  info@tiendaconcepslife.com
                </Link>
              </p>
            </div>
            <div className="footer-contact-right">
              <p className="footer-details">Av. República de Brasil 303</p>
              <p className="footer-details">Panamá</p>
              <p className="footer-details">Panamá</p>
            </div>
          </div>

          <div className="footer-details">
            <Link to="/">
              <img src={Logo} alt='Concepts Life Log' width="100c%" height="100%" />
            </Link>
          </div>

          <div className="footer-details">
            All rights reserved 2017 &copy; Tienda Concepts Life
          </div>
        </div>
      </div>
      <div className="footer-right">
        <div className="right-container">
          <div className="right-top">
            <div className="follow">
              <p>Follow us</p>
            </div>
            <div className="social-icons-container">
              <div className="social-icons">
                <FaTwitter />
              </div>
              <div className="social-icons">
                <FaFacebookF />
              </div>
              <div className="social-icons">
                <FaInstagram />
              </div>
            </div>
          </div>
          <div className="right-bottom">
            <p>Created by Nessim Btesh and Michael Del Muro</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
