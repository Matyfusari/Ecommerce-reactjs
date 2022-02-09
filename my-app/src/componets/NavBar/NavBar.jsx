
import { NavLink } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import { FaHome, FaList } from "react-icons/fa";
import { useState, useEffect } from "react";

import './NavBar.css';

const NavBar = () => {
  

  return (
    <>
      <nav className="menu">
        <ul>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "isActive" : "")}
              to="/"
            >
              <FaHome className="icon"/>
              INICIO
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "isActive" : "")}
              to="/all"
            >
              <FaList className="icon"/>
              PRODUCTOS
            </NavLink>
            
          </li>
          <CartWidget />
        </ul>
      </nav>
    </>
  );
};
export default NavBar;








