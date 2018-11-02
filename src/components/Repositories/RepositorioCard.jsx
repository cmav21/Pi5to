import React, {Component} from 'react';
import './RepositorioCard.scss'
import { connect } from 'react-redux'
import {loginSuccess} from "../../actions/UserActions";

class RepositorioCard extends Component {
  render() {
    const c = this.props.users.userLogged ?
                this.props.users.userLogged.tipo === "MANAGER" ? "card card--big" : "card card--big cv"
              : "card card--big cv";
    return (
        <div className={c}>
          <div className="card__image" style={{backgroundImage: `url(${"https://images.unsplash.com/photo-1541102387691-6c263a16c763?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=4a6de9ebb8419913f2af116925ea1815&auto=format&fit=crop&w=889&q=80"})`}}/>
          <h2 className="card__title">{this.props.repo.nombre}</h2><span
          className="card__subtitle">By ... </span>
          <p className="card__text">{this.props.repo.descripcion}</p>
          {
            this.props.users.userLogged ?
              <div className="card__action-bar">
                <button className="card__button" onClick={()=>alert("hi")}>SHARE</button>
                <button className="card__button">LEARN MORE</button>
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