import React, { Component } from 'react';
import moment from "moment";

class CommentList extends Component {

  renderComments = () => {
    const comments = this.props.comments ? this.props.comments : []
    return <div> {
        comments.map((c, i) => {
          return <Comment comment={c} key={i}/>
        })
      }</div>
  }

  render() {
    console.log(this.props);
    
    return (
      <div>
        <div>
          <h4 className="commentHeader" style={{marginTop:20}}>Comentarios</h4>
          {
            this.renderComments()
          }
        </div>
      </div>
    );
  }
}

export default CommentList;


const Comment = (props) => {
  
  const { comment } = props 
  return (
    <div>
      <hr className="commentHR"/>
      <h4 className="title is-6" style={{ marginBottom: 5 }}>{comment.usuario.nombre}<span className="is-pulled-right">{moment(comment.fechaPublicacion).lang("es").format('LLLL')}</span></h4>
      <p className="commentP">{comment.contenido}</p>
    </div>
  )
}