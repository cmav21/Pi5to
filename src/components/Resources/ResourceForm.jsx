import React,{Component} from 'react';
import { isNull } from 'util';
import axios from 'axios'
import API from '../../../api'

class ResouceForm extends Component {

    state = {
        nombre: "",
        autor: "",
        categoria:"",
        formato: "",
        edicion:"",
        etiquetas:"",
        descripcion:""
    }

    handleValues = () => {
        let nombre = document.getElementById('nombre').value;
        let autor = document.getElementById('autor').value;
        let categoria = document.getElementById('categoria').value;
        let formato = document.getElementById('formato').value;
        let edicion = document.getElementById('edicion').value;
        let etiquetas = document.getElementById('etiquetas').value;
        let descripcion = document.getElementById('descripcion').value;
        if( autor == ""  || categoria == "" || formato == "" || edicion == "" || etiquetas == "" || descripcion == "") {
            this.setState({nombre:"no"});
        }
        else {
            this.setState({
                nombre: nombre,
                autor: autor,
                categoria: categoria,
                formato: formato,
                edicion: edicion,
                etiquetas: etiquetas,
                descripcion : descripcion
            });
    }
}
    render() {
        console.log(this.state);
        return(
            <div className="columns">
                <div className = "column is-three-quarters is-half is-offset-one-quarter">
                    <h1 className="title">
                        Registrar recurso
                    </h1>
                    <div class="field">
                        <label class="label">Nombre</label>
                        <div class="control">
                            <input class="input" type="text" id="nombre" placeholder="Nombre"/>
                        </div>
                    </div>
                    <div class="field">
                        <label class="label">Autor</label>
                        <div class="control">
                            <input class="input" type="text" id="autor" placeholder="Autor"/>
                        </div>
                    </div>
                    <div class="field">
                      <label class="label">Categoria</label>
                      <div class="control">
                        <div class="select">
                          <select id="categoria">
                            <option value=""> </option>
                            <option value="Lirico">Lirico</option>
                            <option value="Epico">Epico</option>
                            <option value="Dramatico">Dramatico</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div class="field">
                        <label class="label">Formato</label>
                        <div class="control">
                            <input class="input" type="text" id="formato" placeholder="Formato"/>
                        </div>
                    </div>
                    <div class="field">
                        <label class="label">Edicion</label>
                        <div class="control">
                            <input class="input" type="text" id="edicion" placeholder="Edicion"/>
                        </div>
                    </div>
                    <div class="field">
                        <label class="label">Etiquetas</label>
                        <div class="control">
                            <input class="input" type="text" id="etiquetas" placeholder="Etiquetas"/>
                        </div>
                    </div>
                    <div class="field">
                      <label class="label">Descripcion</label>
                      <div class="control">
                        <textarea class="textarea" id="descripcion" placeholder="Textarea"></textarea>
                      </div>
                    </div>
                    <div class="field is-grouped">
                      <div class="control">
                        <button class="button is-link" onClick={this.handleValues}>Submit</button>
                      </div>
                      <div class="control">
                        <button class="button is-text">Cancel</button>
                      </div>
                    </div>
                </div>
        </div>
        );
    }
}

export default ResouceForm;