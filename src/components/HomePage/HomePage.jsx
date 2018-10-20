import React, { Component } from 'react';
import 'bulma'
import TopBar from './TopBar';
import Body from './Body';


class HomePage extends Component {
  render() {
    return (
      <div className="hero is-light is-fullheight">
        <TopBar/>
        <Body/>
      </div>
    );
  }
}

export default HomePage;