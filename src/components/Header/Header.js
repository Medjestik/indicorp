import React from 'react';
import './Header.css';
import { Link } from "react-scroll";
import logo from '../../images/logo.png';

function Header() {
  return (
    <nav className="header container">
      <img className="header__logo" src={logo} alt='логотип'></img>
      <ul className="header__nav-list">
        <li className="header__nav-item"><Link to="main" smooth={true} offset={0} duration= {500}>Home</Link></li>
        <li className="header__nav-item"><Link to="advice" smooth={true} offset={0} duration= {500}>Product</Link></li>
        <li className="header__nav-item"><Link to="advertising" smooth={true} offset={0} duration= {500}>Pricing</Link></li>
        <li className="header__nav-item"><Link to="contacts" smooth={true} offset={0} duration= {500}>Contact</Link></li>
      </ul>
      <button className="header__menu" type="button"></button>
    </nav>
  );
}

export default Header;