import React, { Component } from 'react'
import ResourceCard from "../Resources/ResourceCard"
import { connect } from "react-redux"
import { getResource } from '../../actions/UserActions'


class Result extends Component {

  renderCards = () => {
    if(this.props.users.resourcesFound)
    return  this.props.users.resourcesFound.map((r, i) => {
          return <ResourceCard resource={r} key={i} getRsc={this.goForResource}/> 
        })
  };

  render() {
    return (
      <div className={"hero-body"} style={{ flexFlow: "column", margin: "0px 1vw 0px 1vw" }} >
        <div style={{ marginBottom: 40 }} className={"columns"}>
          <div className={"column"}><h1 className={"title is-1"}>Resultados</h1></div>
        </div>
        <div className={"columns is-multiline"} style={{ justifyContent: "center" }}>
          {
            this.renderCards()
          }
        </div>
      </div>
    );
  }
}

let ResultComponent = Result
ResultComponent = connect(state => ({
  users: state.users
}), {getResource})(Result)

export default ResultComponent;