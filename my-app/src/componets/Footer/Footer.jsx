import React from 'react';
import {Link } from "react-router-dom";
import Logo from "../../assets/images/logo.png";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return <div>
      <div class="container-fluid">
      <footer class=" Row footerbg paddingTB">
        <div class="col-lg-4 col-xs-12">
          <Link to="Home/"><img src={Logo} alt="Logo" className="imgFoot" /></Link>
        </div>
        <div class="col-lg-4 col-xs-12">
          <h3 class="txtFooter positionText">Sitio web creado por Fusari Matias</h3>
        </div>
        <div class="col-lg-4 col-xs-12 positionRedes">
          <h3 class="txtFooter">Nuestras Redes</h3>
          <ul className="fooUl">
              <li className="positionRedes fooUlLi">
                <a href="https://walink.co/d3f2c1" className="linkk" target="_blank" rel="noreferrer" >
                  <FaWhatsapp />
                </a>
              </li>
              <li className=" positionRedes fooUlLL">
                <a href="https://www.instagram.com/handmade.style.bymarita/?hl=es-la/" className="linkk" target="_blank" rel="noreferrer">
                  <FaInstagram />
                </a>
              </li>
            </ul>
        </div>
      </footer>
    </div>
  </div>;
};

export default Footer;
