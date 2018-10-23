import logo from "../../assets/logo5.gif";
import React, { Component } from 'react';
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import 'bulma'


class TopBar extends Component {

  renderLoginButton = () => {
    if(this.props.users.userLogged){
      return (
        <h1>{this.props.users.userLogged.cuenta}</h1>
      )
    } else {
      return (
        <Link to="/login" className="button is-dark is-inverted">
          <span className="icon">
            <i className="fas fa-user"></i>
          </span>
          <span>Iniciar Sesión</span>
        </Link>
      )
    }

  }


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
                <Link to="/repositories" className="navbar-item">
                  Repositorios
                </Link>
                <span className="navbar-item">
                  {
                    this.renderLoginButton()
                  }
                </span>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

let TopBar_R = connect( state => ({
  users: state.users
}),{

})(TopBar)

export default withRouter(TopBar_R);