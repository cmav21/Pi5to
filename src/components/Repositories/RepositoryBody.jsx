import React, { Component } from 'react';
import ResourceCard from "../Resources/ResourceCard";

class RepositoryBody extends Component {
  style = {
    heroStyle: { alignItems: "flex-start" },
    box: { paddingLeft: "10vw" }
  };

  render() {
    const { repo } = this.props;
    console.log(repo);
    
    if(!repo)
      return <h1>ha ocurrido un error</h1>

    return <div className=" hero-body columns is-multiline" style={this.style.heroStyle}>
        <div className="column is-12">
          <div className="content" style={this.style.box}>
            <h1 className="title is-2">{repo.nombre}</h1>
            <p className="subtitle is-6">{String(repo.etiquetas).split(',').join(' #')}</p>
            <div className="column is-8">
              <p className="title is-4">Descripción </p>
              <p style={{ marginLeft: "1vw" }}>{repo.descripcion}</p>
            </div>
          </div>
          <div className="column is-full is-offset-1" style={{ marginTop: "4vw" }}>
            <h1 className="title is-3">Recursos</h1>
            {
              repo.recursos ? repo.recursos.map((rsc, i) => {
                return <ResourceCard resource={rsc} key={i} />
              })
              : <div></div>
            }
          </div>
        </div>
        <div className="column" />
      </div>;
  }
}

export default RepositoryBody;