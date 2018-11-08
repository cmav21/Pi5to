import React, { Component } from 'react'
import "./Login.scss"
import { Link, withRouter }  from 'react-router-dom'
import axios from 'axios'
import API from '../../../api'
import { connect } from 'react-redux'
import { loginSuccess } from '../../../actions/UserActions'


class UserLogin extends Component {
  state = { account: "", password: "", loginStatus: "", loginButtonText: "Iniciar sesión", spinner:"spinner" };

  handleAccount = e => this.setState({ account: e.target.value });
  handlePassword = e => this.setState({ password: e.target.value });
  
  login = (e) => {
    e.preventDefault();


    const data = {
      'cuenta': this.state.account,
      'password': this.state.password
    };

    this.setState({ loginStatus: "loading", loginButtonText: "Cargando ...", spinner: "spinner"});

    axios.post(`${API}/usuarios/${this.state.account}/login/`, data)
    .then(res => {
      const student = res.data;
      console.log(student.cuenta.toString());
      if(student.cuenta.toString() ===  this.state.account){
        this.props.loginSuccess(student);
        this.setState({ loginStatus: "loading ok", loginButtonText: "¡Te extrañabamos!"});
        setTimeout(() => {
          this.props.history.goBack();
        }, 1000);
      } else {
        this.setState({ loginStatus: "loading notok", loginButtonText: "¡Parece que olvidaste tu!"})

      }
    })
    .catch( e => {
      console.log(data);
      this.setState({ 
        loginStatus: "loading notok", 
        loginButtonText: "Ha ocurrido un error, vuelve a intentarlo más tarde",
        spinner: "fas fa-times error"})
     })
  };

  render() {
    return (
      <div className="login_body">
        <div className="wrapper">
          <form className={"login " + this.state.loginStatus}>
            <p className="title">¡Bienvenido!</p>
            <input type="text" placeholder="Numero de cuenta" autoFocus onChange={this.handleAccount}/>
            <i className="fa fa-user"/>
            <input type="password" placeholder="Contraseña"  onChange={this.handlePassword}/>
            <i className="fa fa-key"/>
            <Link to="/" href="#">Olvidaste tu contraseña?</Link>
            <button onClick={this.login} className={"boton"}>
              <i className={this.state.spinner}/>
              <span className="state">{ this.state.loginButtonText }</span>
            </button>
            <Link to={"/signup"}>
              <button className={"signup"}>
                <span className="state">Registrarse</span>
              </button>
            </Link>
          </form>
        </div>
      </div>
    );
  }
}
let LogIn = connect( state => ({ users: state.users }), {loginSuccess})(UserLogin);

export default withRouter(LogIn);