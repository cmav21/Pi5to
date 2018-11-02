import React, {Component} from 'react';
import TopBar from "../HomePage/TopBar";
import List from "./List";

class RepositoryList extends Component {
  render() {
    return (
      <div className={"hero is-light"}>
        <TopBar/>
        <List/>
      </div>
    );
  }
}

export default RepositoryList;