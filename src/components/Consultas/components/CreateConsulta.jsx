import React, { Component } from 'react';
import styled from 'styled-components'
import API from '../../../api'
import axios from 'axios'

const Save = styled.button`
    background: transparent;
    border: none;
    background-color: #40ad44;
    height: 60px;
    width: 60px;
    position: absolute;
    top: 90%;
    left: 90%;
    border-radius: 100px;
    color: white;
    font-size: 20px;
    
    &:hover {
      background-color: #42F468;
    }
`;

class CreateConsulta extends Component {
  state = { showModal: "", usuario: "", fecha: "", recurso: "" };

  activateModal = () => this.setState({ showModal: "active" });
  deactivateModal = () => this.setState({ showModal: "" });
  handleusuario = e => this.setState({ usuario: e.target.value });
  handlefecha = e => this.setState({ fecha: e.target.value });
  handlerecurso = e => this.setState({ recurso: e.target.value });

  save = () => {
    const data = {
      "usuario": this.state.usuario,
      "fecha": this.state.fecha,
      "recurso": this.state.recurso,
    };

    axios.post(`${API}/consultas/`, data)
      .then(res => {
        this.setState({ showModal: "", usuario: "", fecha: "", recurso: "" });
        this.props.fetch();
      })
      .catch(err => console.log(err))
      .then(() => {
        this.setState({ showModal: "", usuario: "", fecha: "", recurso: "" });
      })
  };

  render() {
    return (
      <div>
        <button className="show" aria-haspopup="true" onClick={this.activateModal}>
          <i className="fas fa-plus" /> {'  '} Nueva Consulta
        </button>
        <div className={"mask " + this.state.showModal} role="dialog" />
        <div className={"modal is-" + this.state.showModal} role="alert" style={{ paddingTop: 45, overflow: "inherit" }}>
          <div className="groupmodal">
            <input type="text" className={"inputmodal"} onChange={this.handleusuario} value={this.state.usuario} />
            <span className="highlight" />
            <span className="bar" />
            <label className={"labelmodal"}>Numero de cuenta</label>
          </div>
          <div className="groupmodal">
            <input type="text" className={"inputmodal"} onChange={this.handlerecurso} value={this.state.recurso} />
            <span className="highlight" />
            <span className="bar" />
            <label className={"labelmodal"}>Recurso</label>
          </div>
          <div className="groupmodal">
            <input type="date" className={"inputmodal"} onChange={this.handlefecha} value={this.state.fecha} />
            <span className="highlight" />
            <span className="bar" />
            <label className={"labelmodal"}>Fecha</label>
          </div>

          <Save onClick={this.save} >
            <i className="fas fa-check" />
          </Save>

          <button className="close" role="button" onClick={this.deactivateModal}><i className="fas fa-times" /></button>
        </div>
      </div>
    );
  }
}

export default CreateConsulta;