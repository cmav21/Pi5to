import React, { Component } from 'react';
import api from '../../api'
import axios from 'axios'
import { withRouter } from 'react-router-dom'
import connect from "react-redux/es/connect/connect";
import { loginSuccess } from "../../actions/UserActions";

class admins extends Component {
  state ={ account: "", pass: ""}

  handleaccount = e => this.setState({ account: e.target.value })
  handlepass = e => this.setState({ pass: e.target.value })
  save = () => {
    axios.post(`${api}/usuarios/`,{
      'name': "ADMIN",
      'career': "ADMIN",
      'email': "ADMIN",
      'user': "ADMIN",
      'password': this.state.pass,
      'cuenta': this.state.account,
      'type': "ADMIN"
    }).then(res => {
        this.props.history.push('/');
        this.props.loginSuccess(res.data)})
      .catch(err => alert("ERORR has occurred"))
  }


  render() {
    return (
      <div>
        <p>account</p>
        <input onChange={this.handleaccount}/>
        <p>password</p>
        <input onChange={this.handlepass}/>
        <button onClick={this.save}>go</button>
      </div>
    );
  }
}


let Admins = connect(state => ({
  users: state.users
}), {
  loginSuccess
})(admins);
export default withRouter(Admins);