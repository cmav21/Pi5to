import React, {Component} from 'react';
import RepositorioCard from "./RepositorioCard";
import API from '../../api'
import axios from 'axios'

class List extends Component {
  state = { cards: [] };

  componentDidMount(){
    axios.get(`${API}/repositorios/`)
      .then( res => {
        this.setState({ cards: res.data })
      })
      .catch( err => {
        console.log(err)
      })
  };

  render() {
    return (
      <div className={"hero-body"} style={{flexFlow: "column", margin: "0px 1vw 0px 1vw"}} >
        <div style={{marginBottom: 40}} className={"columns"}>
          <div className={"column"}><h1 className={"title is-3"}>Repositorios</h1></div>
          <div className={"column"} style={{textAlign: "right"}}>
            <h1 className={"title is-3"}>Repositorios</h1>
          </div>
        </div>
        <div>
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

export default List;