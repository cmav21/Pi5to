import React, { Component } from 'react';
import CommentInput from './CommentInput';
import "./Comment.scss";
import CommentList from './CommentList';

class CommentBox extends Component {
  render() {
    return (
      <div className="columns is-mobile is-centered box">
        <div className="column is-10 is-offset-1">
          <div className="commentBoxContainer">
            <div className="commentBox">
              <CommentInput/>
              <CommentList comments={this.props.comments}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CommentBox;