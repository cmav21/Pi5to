import React from 'react'
import 'bulma'
import './ResourceCard.scss'
import { getResourceFormat } from "../../helpers/helpers";

const ResourceCard = ( resource ) => {
  resource = resource.resource

  const format = getResourceFormat(resource.formato.toUpperCase())

  return (<div className="column is-one-third">
    <div className="card large">
      <div className="card-content">
        <div className="media">
          <div className="media-content">
            <p className="title is-4 no-padding">{resource.nombre}</p>
            <p className="subtitle is-6">Autor: {resource.autor}</p>
            <p className="subtitle is-6">Categoria: {resource.categoria}</p>
          </div>
        </div>
        <div className="content formatoWraper">
          {resource.descripcion}
          <p>
            <i className={ format + " formatoIcon"}></i>
          </p>
          <span class="tag is-danger is-large">
            <i class="fas fa-heart"></i>
            {' ' + resource.numLikes}
          </span>
        </div>
      </div>
    </div>
  </div>);
};

export default ResourceCard;