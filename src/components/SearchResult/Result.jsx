import React, { Component } from 'react'
import ResourceCard from "./ResourceCard"

class Result extends Component {
  render() {
    return (
      <div className="hero-body">
        <div className="container">
          <h1 className="title is-1" style={{margin:0}}>Resultados</h1>
          <div className="is-12">
            <ResourceCard resource={{
              "id": 5,
              "numLikes": 5,
              "numConsultas": 5,
              "categoria": "134",
              "formato": "course",
              "nombre": "Clojure para dummies",
              "autor": "Jobs",
              "edicion": "1",
              "etiquetas": "programación, clojure, funcional, facil",
              "descripcion": "Aprende programación funcional desde 0 hasta super duper heroe",
              "comentarios": [
                {
                  "id": 10,
                  "fechaPublicacion": "2018-10-16T07:40:49.000+0000",
                  "usuario": {
                    "id": 4,
                    "cuenta": 59010225,
                    "nombre": "Juan Vazquez",
                    "carrera": "Software",
                    "correo": "juanitos@ucol.mx",
                    "usuario": "jnito",
                    "contrasena": "jijiji",
                    "tipo": "STUDENT"
                  },
                  "contenido": "This book is beautiful"
                }
              ]
            }}/>
          </div>
        </div>
      </div>
    );
  }
}

export default Result;