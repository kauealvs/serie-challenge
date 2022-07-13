import React from "react";
import "./Header.css";
import logo from "../../assets/img/logo-header.jpeg";
import login from "../../assets/img/login.png";
import miniCart from "../../assets/img/miniCart.png";
import HamburgerIcon from "../../assets/img/Hamburger_icon.svg";

function index() {
  return (
    <header>
      <div className="container-header">
        <div>
          <input className="search-header" placeholder="Pesquisar..." />
        </div>
        <div className="div-logo">
          <img src={logo} />
        </div>
        <div className="container-login-minicart">
          <img className="login" src={login} />
          <img className="mini-cart" src={miniCart} />
        </div>
      </div>
      <div className="container-list">
        <ul>
          <li>Categoria lorem</li>
          <li>Categoria</li>
          <li>Categoria lorem ipsum</li>
          <li>Categoria lorem</li>
          <li>Categoria</li>
          <li>Categoria lorem ipsum</li>
          <li>Categoria ipsum</li>
          <li>
            <img src={HamburgerIcon} />
          </li>
        </ul>
      </div>
    </header>
  );
}

export default index;
