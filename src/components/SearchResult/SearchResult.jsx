import React, { Component } from 'react'
import TopBar from '../HomePage/TopBar'
import Result from './Result'

// TODO UPDATE RESULT CARDS
class SearchResult extends Component {
  render() {
    return (
        <div className="hero is-light is-fullheight">
          <TopBar />
          <Result />
        </div>
    );
  }
}

export default SearchResult;