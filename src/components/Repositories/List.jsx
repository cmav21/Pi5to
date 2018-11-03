import React, {Component} from 'react';
import RepositorioCard from "./RepositorioCard";
import API from '../../api'
import axios from 'axios'
import { connect } from 'react-redux'
import CreateRepo from "./CreateRepo";


class List extends Component {
  state = { cards: [] };

  componentDidMount(){
    this.fetchRepos()
  };

  fetchRepos = () => {
    axios.get(`${API}/repositorios/`)
      .then( res => {
        this.setState({ cards: res.data })
      })
      .catch( err => {
        console.log(err)
      })
  };

  renderManagerButtons = () => {
    if(this.props.users.userLogged && this.props.users.userLogged.tipo === "MANAGER")
    return (<div className="field has-addons is-pulled-right">
        <CreateRepo cuenta={this.props.users.userLogged.cuenta} fetch={this.fetchRepos}/>
      </div>)
  };


  render() {
    return (
      <div className={"hero-body"} style={{flexFlow: "column", margin: "0px 1vw 0px 1vw"}} >
        <div style={{marginBottom: 40}} className={"columns"}>
          <div className={"column"}><h1 className={"title is-3"}>Repositorios</h1></div>
          <div className={"column"}>
            {
              this.renderManagerButtons()
            }
          </div>
        </div>
        <div className={"columns is-multiline"} style={{justifyContent: "center"}}>
          {
            this.state.cards.map((card, i) => {
              return <RepositorioCard repo={card} key={i}/>
            })
          }
        </div>
      </div>
    );
  }
}

let ListComponent = connect(state=>({
  users: state.users
}),{})(List);
export default ListComponent;