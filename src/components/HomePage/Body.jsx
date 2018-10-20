import React, { Component } from 'react';
import 'bulma';
import axios from 'axios';

class Body extends Component {
  state = { busqueda: "", buscarPor: "" }
  buttonStyle = { width: "45%", marginRight: "5%" }
  
  handleBusqueda = (e) => this.setState({ busqueda: e.target.value})
  handleBuscarPor = (e) => this.setState({ buscarPor : e.target.value })

  buscar = (e) => {
    console.log(this.state);
    const data = {};
    data[this.state.buscarPor] = this.state.busqueda
    axios.post('http://localhost:8080/recursos/find', data)
    .then((res)=>{
      console.log(res);
    })
  }

  render() {
    return (
      <div className="hero-body">
        <div className="container has-text-centered">
          <div className="column is-6 is-offset-3">
            <h1 className="title">
              ¿Qué aprenderás hoy?
              </h1>
            <input
              className="input is-rounded"
              type="text"
              placeholder="Bases de datos, Psicología del color, Antimateria" 
              onChange={this.handleBusqueda}/>
            <div className="control column is-12 center has-text-centered">
              <label className="radio">
                <input name="buscarPor" type="radio" value="name" onClick={this.handleBuscarPor}/>
                Nombre
                </label>
              <label className="radio">
                <input name="buscarPor" type="radio" value="author" onClick={this.handleBuscarPor}/>
                Autor
                </label>
              <label className="radio">
                <input name="buscarPor" type="radio" value="description" onClick={this.handleBuscarPor}/>
                Descripción
                </label>
              <label className="radio">
                <input name="buscarPor" type="radio" value="format" onClick={this.handleBuscarPor}/>
                Formato
                </label>
              <label className="radio">
                <input name="buscarPor" type="radio" value="category" onClick={this.handleBuscarPor}/>
                Categoría
                </label>
            </div>
            <div className="field is-grouped center has-text-centered">
              <a className="button is-medium" style={this.buttonStyle} onClick={this.buscar}>Buscar</a>
              <a className="button is-medium" style={this.buttonStyle} onClick={this.buscar}>Voy a tener suerte</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Body;