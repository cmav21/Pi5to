import React, { Component } from 'react';
import ResourceCard from "../Resources/RepoResourceCard";
import styled from 'styled-components'
import imgPicker from '../../assets/modalImagePicker'

const Parallax = styled.div`
  background: url(${props => props.img}) repeat-y center top;
  filter: brightness(30%);
  background-attachment: fixed;
  background-size: 100%;
  height: 50vh;
  color: white;

  @media (max-width: 500px) {
    height: 70vh;
  }
`;

class RepositoryBody extends Component {
  style = {
    heroStyle: { alignItems: "flex-start"},
    box: {paddingLeft: "10vw", top: "30%", position: "absolute", width: "100vw"  },
    titles: { color: "white" }
  };

  render() {
    const { repo } = this.props;
    console.log(repo);
    
    if(!repo)
      return <h1>ha ocurrido un error</h1>

    return <div className=" hero-body columns is-multiline" style={this.style.heroStyle}>
        <div className="column is-12-mobile is-12-desktop is-12-tablet">
          <Parallax img={imgPicker()}></Parallax>
          <div className="content" style={this.style.box}>
            <h1 className="title is-2" style={this.style.titles}>{repo.nombre}</h1>
            <p className="subtitle is-6" style={this.style.titles}>{String("#"+repo.etiquetas).split(',').join(' #')}</p>
            <div className="column is-8">
              <p className="title is-4" style={this.style.titles}>Descripción </p>
              <p style={{ marginLeft: "1vw" }} style={this.style.titles}>{repo.descripcion}</p>
            </div>
          </div>
          <div className="column is-full is-offset-1" style={{ marginTop: "4vw" }}>
            <h1 className="title is-3">Recursos</h1>
            <div className={"columns is-multiline"}>
            {
              repo.recursos ? repo.recursos.map((rsc, i) => {
                return <ResourceCard resource={rsc} key={i} />
              })
              : <div></div>
            }
            </div>
          </div>
        </div>
        <div className="column" />
      </div>;
  }
}

export default RepositoryBody;