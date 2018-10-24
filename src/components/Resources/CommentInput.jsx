import React, { Component } from 'react';
import { connect } from 'react-redux'

class CommentInput extends Component {
  render() {
    if(this.props.users.userLogged){
      return (
        <div className="comment-form">
          <div className="commentHeader">¡Haz un comentario!</div>
            <div>
              <textarea className="commentTextarea" id="comment" rows="3" cols="30" placeholder="Comentario"></textarea>
            </div>
            <button className="commentButton">COMENTAR</button>
        </div>
      );
    }
    return <div> ¡Inicia sesión para realizar un comentario! </div>
  }
}

let SubmitComment = connect( state => ({
  users: state.users
}), {

})(CommentInput)

export default SubmitComment;