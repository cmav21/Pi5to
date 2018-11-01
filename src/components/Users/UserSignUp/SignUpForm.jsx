import React, {Component} from 'react';
import { validateEmail } from "../../../helpers/helpers";
import axios from 'axios'
import API from '../../../api'
import connect from "react-redux/es/connect/connect";
import {loginSuccess} from "../../../actions/UserActions";
import { withRouter } from 'react-router-dom';

class SignUpForm extends Component {
  state = {
    nombre: "",
    email: "",
    cuenta: 0,
    contrasena: "",
    contrasena2: "",
    tipo: "STUDENT",
    carrera: "Arquitectura",

    passwordError: "",
    emailError: "",
    cuentaError: ""
  };

  /*
  *   Handler functions
  * */
  handleNombre = e => this.setState({ nombre : e.target.value });
  handleEmail = e => {
    this.setState({ email : e.target.value });

    if(!validateEmail(e.target.value)) this.setState({ emailError: "is-danger"});
    else this.setState({ emailError: "is-success"});
  };
  handleCuenta = e =>{
    this.setState({ cuenta : e.target.value });

    if(e.target.value.length !== 8) this.setState({ cuentaError: "is-danger" });
    else this.setState({ cuentaError: "is-success" });

  };
  handleContrasena = e => this.setState({ contrasena : e.target.value });
  handleContrasena2 = e => {
    this.setState({ contrasena2 : e.target.value });

    if(this.state.contrasena !== e.target.value) this.setState({ passwordError: "is-danger"});
    else this.setState({passwordError: "is-success"});
  };
  handleTipo = e => this.setState({ tipo : e.target.value });
  handleCarrera = e => this.setState({ carrera : e.target.value });
  handleCancel = e => this.props.history.push("/");


  /*
  *   Functionality methods
  * */
  upload = () => {
    //TODO modals
    if(this.state.cuenta.length !== 8){
      return;
    }
    if(this.state.contrasena !== this.state.contrasena2){
      return;
    }

    const data = {
      'name': this.state.nombre,
      'career': this.state.carrera,
      'email': this.state.email,
      'user': this.state.name,
      'password': this.state.contrasena,
      'cuenta': this.state.cuenta,
      'type': this.state.tipo
    };
    let err = false;

    Object.keys(data).forEach(key => {
      if(!err && (data[key] === "" || data[key] === 0))
        err = true;
    });

    // TODO : create modal to show errors
    if(err) {
      return;
    }

    axios.post(`${API}/usuarios/`, data)
      .then(res => {
        if(res.data.nombre === data.name){
          this.props.history.push("/");
          this.props.loginSuccess(res.data)
        } else{
          alert("Ha ocurrido un error")
        }
      })
      .catch(err => {
        alert(err)
      })
  };


  /**
   *
   * Rendering methods
   */
  renderChoices = () => {
    if(this.state.tipo === "STUDENT")
      return (
        <div className="field">
          <label className="label">Carrera</label>
          <div className="control">
            <div className="select">
              <select onChange={this.handleCarrera}>
                <option value={"Arquitectura"}>Arquitectura</option>
                <option value={"Diseño"}>Diseño</option>
                <option value={"Ing. Telemática"}>Ing. Telemática</option>
                <option value={"Ing. Software"}>Ing. Software</option>
                <option value={"Ing. Mecatrónica"}>Ing. Mecatrónica</option>
                <option value={"Medico Cirujano Partero"}>Medico Cirujano Partero</option>
              </select>
            </div>
          </div>
        </div>
      );
    else
      return (
        <div className="field">
          <label className="label">Facultad</label>
          <div className="control">
            <div className="select">
              <select onChange={this.handleCarrera}>
                <option value={"Medicina"}>Medicina</option>
                <option value={"Mercadotecnia"}>Mercadotecnia</option>
                <option value={"Psicología"}>Psicología</option>
                <option value={"Telemática"}>Telemática</option>
              </select>
            </div>
          </div>
        </div>
      );
  };


  render() {
    return (
      <div>
        <div className="field">
          <label className="label">Nombre y Apellidos</label>
          <div className="control has-icons-left">
            <input className="input" type="text" onChange={this.handleNombre}/>
            <span className="icon is-small is-left">
              <i className="fas fa-user"/>
            </span>
          </div>
        </div>

        <div className="field">
          <label className="label">Email</label>
          <div className="control has-icons-left has-icons-right">
            <input className={"input " + this.state.emailError} type="email" onChange={this.handleEmail}/>
            <span className="icon is-small is-left">
              <i className="fas fa-envelope"/>
            </span>
          </div>
          <p className={this.state.emailError === "is-danger" ? "help is-danger" : ""}>Introduzca un correo correcto</p>
        </div>

        <div className="field">
          <label className="label">Numero de cuenta</label>
          <div className="control has-icons-left has-icons-right">
            <input className={"input " + this.state.cuentaError} type="number" onChange={this.handleCuenta}/>
            <span className="icon is-small is-left">
              <i className="fas fa-user-circle"/>
            </span>
          </div>
          <p className={"help " + this.state.cuentaError}>Introduzca un numero de cuenta correcto</p>
        </div>

        <div className={"field-body"}>
        <div className="field">
          <label className="label">Contraseña</label>
          <div className="control has-icons-left has-icons-right">
            <input className={"input " + this.state.passwordError} type="password" onChange={this.handleContrasena}/>
            <span className="icon is-small is-left">
              <i className="fas fa-key"/>
            </span>
          </div>
          <p className={"help " + this.state.passwordError}>Las contraseñas deben coincidir</p>
        </div>
        <div className="field">
          <label className="label">Repetir Contraseña</label>
          <div className="control has-icons-left has-icons-right">
            <input className={"input " + this.state.passwordError} type="password" onChange={this.handleContrasena2}/>
            <span className="icon is-small is-left">
              <i className="fas fa-key"/>
            </span>
          </div>
        </div>
        </div>

        <div className="field-body">
          <div className="field">
            <label className="label">Eres un : </label>
            <div className="control">
              <div className="select">
                <select onChange={this.handleTipo}>
                  <option value={"STUDENT"}>Alumno</option>
                  <option value={"TEACHER"}>Maestro</option>
                </select>
              </div>
            </div>
          </div>
          {
            this.renderChoices()
          }
        </div>

        <div className="field is-grouped" style={{marginTop: 20}}>
          <div className="control">
            <button className="button is-link" onClick={this.upload}>Submit</button>
          </div>
          <div className="control">
            <button className="button is-text" onClick={this.handleCancel}>Cancel</button>
          </div>
        </div>
      </div>
    );
  }
}

let SignUp = connect( state => ({
  users: state.users
}), {
  loginSuccess
})(SignUpForm);


export default withRouter(SignUp);