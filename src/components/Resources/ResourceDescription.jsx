import React, { Component } from 'react'
import TopBar from '../HomePage/TopBar'
import Description from './Description'
import { withRouter } from 'react-router-dom'
import CommentBox from './CommentBox'
import { getResource } from '../../actions/UserActions'
import { connect } from 'react-redux'

class ResourceDescription extends Component {

  componentDidMount(){
      this.props.getResource(this.props.match.params.id);
  }

  render() {
    const resource = this.props.users.resource ? this.props.users.resource : {};

    return (
      <div className="hero is-light is-fullheight">
        <TopBar />
        <Description resource={resource}/>
        <CommentBox comments={resource.comentarios}/>
      </div>
    );
  }
}

const ResourceView = connect(state => ({
    users: state.users
}),{
    getResource
})(ResourceDescription);

export default withRouter(ResourceView);