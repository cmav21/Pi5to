import React, { Component } from 'react'
import "bulma"
import './Resources.scss'
import axios from 'axios'
import API from "../../api"
import { connect } from 'react-redux'
import { updateResource,addNotification} from '../../actions/UserActions'
import '../../estilos.css'

class Description extends Component {
  style = {
    heroStyle : { alignItems : "flex-start"},
    box: { paddingLeft: "10vw" },
  };

  giveLike = () => {

    const data = {}
    if(this.props.users.userLogged)
      data['userId'] = this.props.users.userLogged.id

    axios.put(`${API}/recursos/${this.props.resource.id}/like`, data)
    .then(res => {
      console.log(res);
      
      if(res.data !== "") {
        this.props.updateResource(res);
      }
      else 
      this.props.addNotification({
        class: "notification is-danger",
        strong: "Debes iniciar sesion para poder realizar esta accion"
    })
    })
    .catch(err=>{
      console.log(err)
    })

  }

  render() {
    const { resource } = this.props;

    if(!resource)
      return (<h1 className=""> Ha ocurrido un error </h1>);
    else {
      return (
<div className=" hero-body columns is-multiline" style={this.style.heroStyle}>
          <div className="column is-12 relative">
            <div className="content" style={this.style.box}>
              <p className="title is-3">{ resource.nombre }</p>
              <p className="subtitle is-6">{ resource.autor }</p>
              <p className="subtitle is-6">{ resource.etiquetas }</p>

            </div>

            <div className="is-pulled-right iconos" style={{ left: "25vw" }}>
              <div className="columns icono">
                <div className="column c icon has-text-danger ">
                  <i className="icons fas fa-heart" onClick={this.giveLike}/>
                </div>
                <div className="column c">
                  <p className="nums">{ resource.numLikes }</p>
                </div>
                </div>
                <div className="columns icono">
                <div className="column c icon has-text-info">
                  <i className="icons fas fa-eye"/>
                </div>
                <div className="column c">
                  <p className="nums">{resource.numConsultas }</p>
                </div>
              </div>
            </div>

            <div className="columns is-full" style={{marginTop: "4vw", marginLeft: "4vw"}}>
              <div className="column is-8 is-offset-2">
                <p className="title is-4">Descripción </p>
                <p style={{marginLeft: "1vw"}}>{ resource.descripcion }</p>
                <p className="title is-4" style={{marginTop: "2vw"}}>Abstract </p>
                <p style={{marginLeft: "1vw"}}>{ resource.abstract }</p>
              </div>
              <div className="column is-4">
                
              </div>
            </div>
          </div>

        </div>
      );
    }
  }
}

const Descripcion = connect(state => ({
  users: state.users
}),{
  updateResource,addNotification
})(Description);

export default Descripcion;