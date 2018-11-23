import React, { Component } from 'react';
import API from '../../api'
import axios from 'axios';
import ConsultaRow from './components/ConsultaRow'
import CreateConsulta from './components/CreateConsulta'
import TopBar from '../HomePage/TopBar'
import { connect } from 'react-redux'

class ConsultasView extends Component {
  state = { consultas : [] }


  componentDidMount() {
    this.fetchConsultas()
  }
  
  fetchConsultas = () => {
    axios.get(`${API}/consultas/`)
    .then(res => {
      this.setState({ consultas: res.data })
      console.log(res.data);
      
    })
    .catch(err => console.log(err))  
  }
  
  renderList = () => {
    if(this.state.consultas !== [])
      return this.state.consultas.map((c, i) => {
        return <ConsultaRow consulta={c} key={i}/>
      })
    else return <div></div>
  }

  renderManagerButtons = () => {
    if (this.props.users.userLogged && this.props.users.userLogged.tipo === "MANAGER")
      return (<div className="field has-addons is-pulled-right">
        <CreateConsulta cuenta={this.props.users.userLogged.cuenta} fetch={this.fetchConsultas} />
      </div>)
  };

  render() {
    return (
      <div className="hero is-light" style={{ height: "-webkit-fill-available" }}>
        <TopBar/>
        <div className="hero-body">
          <div style={{ marginBottom: 40 }} className={"columns"}>
            <div className={"column"}><h1 className={"title is-3"}>Consultas</h1></div>
            <div className={"column"}>
              {
                this.renderManagerButtons()
              }
            </div>
          </div>
          <div className={"columns is-multiline"} style={{ justifyContent: "center" }}>
            <table className="table">
              <thead>
                <tr>
                  <th>Fecha</th>
                  <th>Usuario</th>
                  <th>Recurso</th>
                </tr>
              </thead>
              <tbody>
                {
                  this.renderList()
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}


let ConsultasVista = connect( state => ({
  users : state.users
}),{})(ConsultasView)
export default ConsultasVista;