import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Link, withRouter} from 'react-router-dom'
import axios from 'axios';
import API from '../../api'
import { updateResource } from "../../actions/UserActions";


class CommentInput extends Component {
  state = { comment: "" };

  handleComment = e => this.setState({ comment: e.target.value });

  uploadComment = () => {
    const data = {
      "cuentaUsuario": this.props.users.userLogged.cuenta,
      "contenido": this.state.comment
    };

    axios.post(`${API}/recursos/${this.props.match.params.id}/comentarios/`, data)
    .then( res => {
      this.props.updateResource(res);
    })
    .catch(err => console.log(err));

  };

  render() {
    if(this.props.users.userLogged){
      return (
        <div className="comment-form">
          <div className="commentHeader">¡Haz un comentario!</div>
            <div>
              <textarea className="commentTextarea" id="comment" rows="3" cols="30" placeholder="Comentario" onChange={this.handleComment}/>
            </div>
            <button className="commentButton" onClick={this.uploadComment}>COMENTAR</button>
        </div>
      );
    }
    return <div> ¡<Link to={'/signup'} style={{color:"blue"}}>Inicia sesión </Link> para realizar un comentario! </div>
  }
}

let SubmitComment = connect( state => ({
  users: state.users
}), {
  updateResource
})(CommentInput);

export default withRouter(SubmitComment);