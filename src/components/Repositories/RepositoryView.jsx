import React, { Component } from 'react';
import API from '../../api'
import axios from 'axios'
import TopBar from '../HomePage/TopBar';
import RepositoryBody from './RepositoryBody';

class RepositoryView extends Component {
  state = { repo : {} }

  componentDidMount(){
    axios.get(`${API}/repositorios/${this.props.match.params.id}`)
      .then(res => this.setState({ repo: res.data }))
      .catch(err=> console.log(err))
  }

  render() {
    return (
      <div className="hero is-light is-fullheight">
        <TopBar/>
        <RepositoryBody repo={this.state.repo}/>
      </div>
    );
  }
}

export default RepositoryView;