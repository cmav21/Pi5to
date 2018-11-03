import React, {Component} from 'react';
import './RepositorioCard.scss'
import { connect } from 'react-redux'
import {loginSuccess} from "../../actions/UserActions";
import modalImagePicker from "../../assets/modalImagePicker";

class RepositorioCard extends Component {
  render() {
    const c = this.props.users.userLogged ?
                this.props.users.userLogged.tipo === "MANAGER" ? "card card--big" : "card card--big cv"
              : "card card--big cv";
    return (
        <div className={c}>
          <div className="card__image" style={{backgroundImage: `url(${modalImagePicker()})`}}/>
          <h2 className="card__title">{this.props.repo.nombre}</h2><span
          className="card__subtitle">By ... </span>
          <p className="card__text">{this.props.repo.descripcion}</p>
          {
            this.props.users.userLogged ?
              <div className="card__action-bar">
                <button className="card__button">Editar</button>
                <button className="card__button">Eliminar</button>
              </div>:
              <div/>
          }

        </div>
    );
  }
}

let Card = connect( state => ({
  users: state.users
}), {})(RepositorioCard);

export default Card;