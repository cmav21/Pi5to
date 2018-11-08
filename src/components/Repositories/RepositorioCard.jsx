import React, {Component} from 'react';
import './RepositorioCard.scss'
import { connect } from 'react-redux'
import {withRouter} from "react-router-dom";
import { Card as CardWrapper } from '../Resources/ResourceCard'
import { Link } from 'react-router-dom'
import modalImagePicker from "../../assets/modalImagePicker";
import API from '../../api'
import axios from 'axios'
import Confirmation from "../common/Confirmation";
import EditRepo from './EditRepo';

class RepositorioCard extends Component {
  state = { confirm: "" };

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
        <CardWrapper className={c}> 
        <div className="card__image" style={{ backgroundImage: `url(${modalImagePicker()})` }} onClick={() => this.props.history.push(`/repository/${this.props.repo.id}`)}/>
          <h2 className="card__title">{this.props.repo.nombre}</h2><span
          className="card__subtitle">By ... </span>
          <p className="card__text">{this.props.repo.descripcion}</p>
          {
            this.props.users.userLogged ?
              <div className="card__action-bar">
                <Link to={`/repositories/${this.props.repo.id}/addresource`}>
                  <button className="card__button"> Agregar recurso</button>
                </Link>
                <EditRepo/>
                <Confirmation onAccept={this.onDelete} text={"Eliminar"}/>
              </div>:
              <div/>
          }
        </CardWrapper>
    );
  }
}

let Card = connect( state => ({
  users: state.users
}), {})(RepositorioCard);

export default withRouter(Card);