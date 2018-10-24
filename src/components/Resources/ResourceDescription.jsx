import React, { Component } from 'react'
import TopBar from '../HomePage/TopBar'
import Description from './Description'
import axios from 'axios'
import API from '../../api'
import { withRouter } from 'react-router-dom'
import CommentBox from './CommentBox';


class ResourceDescription extends Component {
  state = { resource: {} }

  componentDidMount() {
    axios.get(API + `/recursos/${this.props.match.params.id}`)
      .catch(error => {
        console.log(error)
      })
      .then(res => {
        this.setState({ resource: res.data })
      })
  }
  
  render() {
    return (
      <div className="hero is-light is-fullheight">
        <TopBar />
        <Description resource={this.state.resource}/>
        <CommentBox comments={this.state.resource.comentarios}/>
      </div>
    );
  }
}

export default withRouter(ResourceDescription);