import logo from "../../assets/logo5.gif";
import React, { Component } from 'react';
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import 'bulma'


class TopBar extends Component {
  styles = {
    icon: { position: "relative",
            top: -24 }
  };

  renderManagerButtons = () => {
    const user = this.props.users.userLogged;
    if(user && user.tipo === "MANAGER"){
      return (<Link to="/addresource" className="navbar-item">
          Registrar recurso
        </Link>)
    } else {
      return (<Link to="/about" className="navbar-item">
        ¿Qué es UCHub?
      </Link>)
    }
  };

  renderLoginButton = () => {
    const user = this.props.users.userLogged;
    if(user){
      return (
        <div className="dropdown is-hoverable is-right">
          <div className="dropdown-trigger">
            <Link to="/" aria-haspopup="true" aria-controls="dropdown-menu4">
              <span className="icon is-small">
                <i className="fas fa-user"/>
              </span>
              {' '}
              <span>{ user.nombre}</span>
            </Link>
          </div>
          <div className="dropdown-menu" id="dropdown-menu4" role="menu">
            <div className="dropdown-content">
              <div className="dropdown-item">
                <h1>Cuenta: {user.cuenta}</h1>
              </div>
              <hr className="dropdown-divider"/>
              <div className="dropdown-item">
                <a className="dropdown-item" href="/"> Cerrar Sesión </a>
                {'  '}
                <span className="icon is-small is-pulled-right">
                  <i className="fas fa-sign-out-alt" style={this.styles.icon}/>
                </span>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <Link to="/login" className="button is-dark is-inverted">
          <span className="icon">
            <i className="fas fa-user"/>
          </span>
          <span>Iniciar Sesión</span>
        </Link>
      )
    }

  };


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
                <span/>
                <span/>
                <span/>
              </span>
            </div>
            <div id="navbarMenuHeroA" className="navbar-menu">
              <div className="navbar-end">
                <Link to="/" className="navbar-item is-active">
                  Inicio
                </Link>
                {
                  this.renderManagerButtons()
                }
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

})(TopBar);

export default withRouter(TopBar_R);