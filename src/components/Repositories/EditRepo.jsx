import React, { Component } from 'react';
import './Model.scss'
import styled from 'styled-components'
import API from '../../api'
import axios from 'axios'

const Save = styled.button`
    background: transparent;
    border: none;
    background-color: #40ad44;
    height: 60px;
    width: 60px;
    position: absolute;
    top: 80%;
    left: 78%;
    border-radius: 100px;
    color: white;
    font-size: 20px;
    
    &:hover {
      background-color: #42F468;
    }
`;

class EditRepo extends Component {
  state = { showModal: "", nombre: "", descripcion: "", etiquetas: "" };

  componentDidMount() {
    this.setState({
      nombre: this.props.repo.nombre,
      descripcion: this.props.repo.descripcion,
      etiquetas: this.props.repo.etiquetas
    })
  }
  

  activateModal = () => this.setState({ showModal: "active" });
  deactivateModal = () => this.setState({ showModal: "" });
  handleNombre = e => this.setState({ nombre: e.target.value });
  handleDescripcion = e => this.setState({ descripcion: e.target.value });
  handleEtiquetas = e => this.setState({ etiquetas: e.target.value });

  save = () => {
    const data = {
      "nombre": this.state.nombre,
      "descripcion": this.state.descripcion,
      "etiquetas": this.state.etiquetas,
    };
    
    axios.put(`${API}/repositorios/${this.props.repo.id}`, data)
      .then(res => {
        this.props.fetch();
        this.setState({ showModal: ""})
      })
      .catch(err => console.log(err))
  };

  render() {
    return (
      <div>
        <button style={{position: "relative", top: -40, left: 208, width: 70}} className="show" aria-haspopup="true" onClick={this.activateModal}>
          <i className="fas fa-pen" /> {'   '} Editar
        </button>
        <div className={"mask " + this.state.showModal} role="dialog" />
        <div className={"modal is-" + this.state.showModal} role="alert" style={{ paddingTop: 45, overflow: "inherit", top: 150 }}>

          <div className="groupmodal">
            <input type="text" className={"inputmodal"} onChange={this.handleNombre} value={this.state.nombre} />
            <span className="highlight" />
            <span className="bar" />
            <label className={"labelmodal"}>Nombre</label>
          </div>
          <div className="groupmodal">
            <input type="text" className={"inputmodal"} onChange={this.handleDescripcion} value={this.state.descripcion} />
            <span className="highlight" />
            <span className="bar" />
            <label className={"labelmodal"}>Descripción</label>
          </div>
          <div className="groupmodal">
            <input type="text" className={"inputmodal"} onChange={this.handleEtiquetas} value={this.state.etiquetas} />
            <span className="highlight" />
            <span className="bar" />
            <label className={"labelmodal"}>Etiquetas</label>
          </div>

          <Save onClick={this.save} >
            <i className="fas fa-check" />
          </Save>

          <button style={{top: -2, right: 25}} className="close" role="button" onClick={this.deactivateModal}><i className="fas fa-times" /></button>
        </div>
      </div>
    );
  }
}

export default EditRepo;