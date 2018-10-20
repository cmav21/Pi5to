import logo from "../../assets/logo5.gif";
import React, { Component } from 'react';
import { Link } from "react-router-dom";
import 'bulma'


class TopBar extends Component {
  render() {
    return (
      <div className="hero-head">
        <nav className="navbar">
          <div className="container">
            <div className="navbar-brand">
              <Link to="/">
                <img src={logo} alt="Logo" width="120" />
              </Link>
              <span className="navbar-burger burger" data-target="navbarMenuHeroA">
                <span></span>
                <span></span>
                <span></span>
              </span>
            </div>
            <div id="navbarMenuHeroA" className="navbar-menu">
              <div className="navbar-end">
                <Link to="/" className="navbar-item is-active">
                  Inicio
                </Link>
                <Link to="/about" className="navbar-item">
                  ¿Qué es UCHub?
                </Link>
                <span className="navbar-item">
                  <a className="button is-dark is-inverted">
                    <span className="icon">
                      <i className="fas fa-user"></i>
                    </span>
                    <span>Iniciar Sesión</span>
                  </a>
                </span>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default TopBar;