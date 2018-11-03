import React, {Component} from 'react';
import './RepositorioCard.scss'
import { connect } from 'react-redux'
import {loginSuccess} from "../../actions/UserActions";
import modalImagePicker from "../../assets/modalImagePicker";
import API from '../../api'
import axios from 'axios'
import Confirmation from "../common/Confirmation";

class RepositorioCard extends Component {
  state = { confirm: "" };
  handleConfirm = () => this.setState({ confirm: "is_active"});
  handleCancel = () => this.setState({ confirm: "" });

  onDelete = () => {
    axios.delete(`${API}/repositorios/${this.props.repo.id}`)
      .then( res => { this.props.fetchRepos() })
      .catch( err => { alert(err) })
  };

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
                <Confirmation
                  onClick={this.onDelete}
                  onConfirm={this.handleConfirm}
                  onCancel={this.handleCancel}
                  active={this.state.confirm}/>
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