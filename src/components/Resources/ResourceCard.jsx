import React from 'react'
import 'bulma'
import './Resources.scss'
import { getResourceFormat } from "../../helpers/helpers"
import { Link } from 'react-router-dom'

const ResourceCard = ( resource ) => {
  resource = resource.resource;
  const format = getResourceFormat(resource.formato.toUpperCase());

  return (<div className="column is-one-third">
    <div className="card">
      <div className="card-content">
        <div className="media">
          <div className="media-content">
            <Link to={`/resource/${resource.id}`} id={resource.id}>
              <p className="title is-4 no-padding">{resource.nombre}</p> 
            </Link>
            <p className="subtitle is-6">Autor: {resource.autor}</p>
            <p className="subtitle is-6">Categoria: {resource.categoria}</p>
          </div>
        </div>
        <div className="content formatoWraper">
          {resource.descripcion}
          <div className="is-clearfix">
            <p className="is-pulled-right">
              <i className={format + " formatoIcon"}/>
            </p>
            <span className="tag is-danger is-large likes is-pulled-left">
              <i className="fas fa-heart"/>
              <p className="numLikes">{' ' + resource.numLikes }</p>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>);
};

export default ResourceCard;