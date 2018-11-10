import React from 'react'
import 'bulma'
import styled from 'styled-components'
import './Resources.scss'
import modalImagePicker from "../../assets/modalImagePicker";
import { getResourceFormat } from "../../helpers/helpers"
import { withRouter } from 'react-router-dom'
import axios from 'axios'
import API from '../../api'
import { connect } from 'react-redux'

export const Card = styled.div`
  opacity: 0.7;

  &:hover{
    opacity: 1;
  }
`

const RepoResourceCard = (props) => <React.Fragment>
    <Card className={"card card--big"} >
    <div onClick={() => props.history.push(`/resource/${props.resource.id}`)}>
      <div className="card__image" style={{ backgroundImage: `url(${modalImagePicker()})`, filter: "brightness(20%)"}} />
      <div className="rsc_title">
        <h2 className="card__title">{props.resource.nombre}</h2>
        <span className="card__title" style={{position: "inherit", top: 167, fontSize: 16}}>{props.resource.autor}</span>
        <p className="card__title" style={{ position: "inherit", top: 163, fontSize: 14 }}>{props.resource.categoria}</p>
        <i className={getResourceFormat(props.resource.formato.toUpperCase()) + " formatoIcon is-pulled-right"} />
        <span className="tag is-danger likes is-pulled-right">
          <i className="fas fa-heart" />
          <p className="numLikes">{' ' + props.resource.numLikes}</p>
        </span>
      </div>
      <p className="card__text">{props.resource.descripcion}</p>
    </div>
      <div className="card__action-bar">
        <button className="card__button" onClick = {() => { 
            axios.delete(`${API}/${props.resource.id}`)
            .then( res => { 
                alert('se elimino'); 
                props.history.push(`/repository/${props.match.params.id}`)})
            .catch( err => { 
                console.log(props);
                
                props.history.push(`/repository/${props.match.params.id}`)})
        }}> Eliminar recurso</button>
      </div>
    </Card>
  </React.Fragment>

let deleteResource = deleteResource = connect(state=>({users: state.users}),{ })(RepoResourceCard)

export default withRouter(deleteResource);