import React, { Component } from 'react'
import "./Login.scss"
import { Link, withRouter }  from 'react-router-dom'
import axios from 'axios'
import API from '../../../api'
import { connect } from 'react-redux'
import { loginSuccess } from '../../../actions/UserActions'


class UserLogin extends Component {
  state  = { account: "", password : "" }

  handleAccount = e => this.setState({ account: e.target.value })
  handlePassword = e => this.setState({ password: e.target.value })
  
  login = (e) => {
    e.preventDefault()

    const data = {
      'cuenta': this.state.account.toString(),
      'password': this.state.password.toString()
    }

    axios.post(`${API}/usuarios/${this.state.account}/login/`, data)
    .then(res => {
      const student = res.data

      if(student.cuenta.toString() ===  this.state.account){
        console.log("you're in")
        this.props.loginSuccess(student)
        this.props.history.push("/")
      }
      

    })
    .catch(e => { console.log(e) })
  }

  render() {
    return (
      <div className="login_body">
        <div className="wrapper">
          <form className="login">
            <p className="title">¡Bienvenido!</p>
            <input type="text" placeholder="Numero de cuenta" autoFocus onChange={this.handleAccount}/>
            <i className="fa fa-user"></i>
            <input type="password" placeholder="Contraseña"  onChange={this.handlePassword}/>
            <i className="fa fa-key"></i>
            <Link to="/" href="#">Olvidaste tu contraseña?</Link>
            <button onClick={this.login}>
              <i className="spinner"></i>
              <span className="state">Log in</span>
            </button>
          </form>
        </div>
      </div>
    );
  }
}

let LogIn = connect( state => ({
  users: state.users
}), {
  loginSuccess
})(UserLogin)

export default withRouter(LogIn);