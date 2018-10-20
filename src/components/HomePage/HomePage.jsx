import React, { Component } from 'react';
import 'bulma'
import logo from "../../assets/logo5.gif";


class HomePage extends Component {
  render() {
    return (
      <div className="hero is-light is-fullheight">
        <div className="hero-head">
          <nav className="navbar">
            <div className="container">
              <div className="navbar-brand">
                <a >
                  <img src={logo} alt="Logo" width="120" />
                </a>
                <span className="navbar-burger burger" data-target="navbarMenuHeroA">
                  <span></span>
                  <span></span>
                  <span></span>
                </span>
              </div>
              <div id="navbarMenuHeroA" className="navbar-menu">
                <div className="navbar-end">
                  <a className="navbar-item is-active">
                    Inicio
                  </a>
                  <a className="navbar-item">
                    ¿Qué es UCHub?
                  </a>
                  <a className="navbar-item">
                    API
                  </a>
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

        <div className="hero-body">
          <div className="container has-text-centered">
            <div className="column is-6 is-offset-3">
              <h1 className="title">
                ¿Qué aprenderás hoy?
              </h1>
              <input
                className="input is-rounded"
                type="text"
                placeholder="Bases de datos, Psicología del color, Antimateria" />
              <div className="control column is-12 center has-text-centered">
                <label className="radio">
                  <input type="radio" name="answer" />
                  Nombre
                </label>
                <label className="radio">
                  <input type="radio" name="answer" />
                  Autor
                </label>
                <label className="radio">
                  <input type="radio" name="answer" />
                  Descripción
                </label>
                <label className="radio">
                  <input type="radio" name="answer" />
                  Formato
                </label>
                <label className="radio">
                  <input type="radio" name="answer" />
                  Categoría
                </label>
              </div>
              <div className="field is-grouped center has-text-centered">
                <a className="button is-medium" style={{ width: "45%", marginRight: "5%" }}>Buscar</a>
                <a className="button is-medium" style={{ width: "45%", marginLeft: "5%" }}>Voy a tener suerte</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;