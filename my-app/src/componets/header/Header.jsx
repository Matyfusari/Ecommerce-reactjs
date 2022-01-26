import Logo from "../../assets/images/logo.png";
import NavBar from "../NavBar/NavBar";
import { NavLink, Link } from "react-router-dom";
import { useCartContext } from "../context/CartContext";
import { FaWhatsapp, FaInstagram, FaShoppingCart } from "react-icons/fa";
import "./Header.css";
const Header = () => {
  const { totalCart, totalItems } = useCartContext();
  return (
    <>
    
      
    <header className="headerL">
        <Link className="brand" to="/">
          <h1>
          
            <img src={Logo} alt="Logo" className="logo" />
          </h1>
        </Link>
        <div className="innerHeader">
        <div className="rrss">
            <ul className="fooUl">
              <li className="fooUlLi">
                <a href="https://walink.co/d3f2c1" className="link" target="_blank" rel="noreferrer">
                  <FaWhatsapp />
                </a>
              </li>
              <li className="fooUlLL">
                <a href="https://www.instagram.com/handmade.style.bymarita/?hl=es-la/" className="link" target="_blank" rel="noreferrer">
                  <FaInstagram />
                </a>
              </li>
            </ul>
          </div>
        <NavLink className="cartL" to="/Cart">
            <FaShoppingCart />
            <small>{totalItems()}</small>
            <small>${totalCart()}</small>
          </NavLink>
        </div>
      </header>
      
      <div className="navbarL">
        <NavBar />
      </div>
    </>
  );
};

export default Header;
