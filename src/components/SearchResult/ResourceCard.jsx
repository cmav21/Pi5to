import React from 'react';

/**
 * 
 * @param { {
        "id": 5,
        "numLikes": 5,
        "numConsultas": 5,
        "categoria": "134",
        "formato": "course",
        "nombre": "Clojure para dummies",
        "autor": "Jobs",
        "edicion": "1",
        "etiquetas": "programación, clojure, funcional, facil",
        "descripcion": "Aprende programación funcional desde 0 hasta super duper heroe",} resource
 */

const ResourceCard = ( resource ) => {  
  return (<div className="column is-one-third">
            <div className="card large">
              <div className="card-content">
                <div className="media">
                  <div className="media-content">
                    <p className="title is-4 no-padding">{resource.resource.nombre}</p>
                    <p className="subtitle is-6">Autor {resource.resource.autor}</p>
                    <p className="subtitle is-6">Categoria {resource.resource.categoria}</p>
                  </div>
                </div>
                <div className="content">
                  { resource.resource.descripcion }
                  <p>
                    Formato: {' '}
                    <p class="fas fa-file-pdf"></p>
                  </p>
                </div>
              </div>
            </div>
          </div>
  );
};

export default ResourceCard;