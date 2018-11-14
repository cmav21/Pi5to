import React,{Component} from 'react';
import { isNull } from 'util';
import { withRouter } from 'react-router-dom'
import axios from 'axios'
import API from '../../api';
import { stringify } from 'querystring';
import '../../estilos.css'
import { connect } from 'react-redux'
import { resourceAdded} from '../../actions/UserActions'


class ResourceForm extends Component {

    state = {
        nombre: "",
        autor: "",
        categoria:"",
        formato: "",
        edicion:"",
        etiquetas:"",
        descripcion:""
    }

    handleNombre = (e) => this.setState({nombre: e.target.value})
    handleAutor = (e) => this.setState({autor:e.target.value})
    handleCategoria = (e) => this.setState({categoria:e.target.value})
    handleFormato = (e) => this.setState({formato:e.target.value})
    handleEdicion = (e) => this.setState({edicion:e.target.value})
    handleEtiquetas = (e) => this.setState({etiquetas:e.target.value})
    handleDescripcion = (e) => this.setState({descripcion:e.target.value})
    
    handleSave = () => {
        if( this.state.autor == ""  || this.state.categoria == "" || this.state.formato == "" || this.state.edicion == "" || this.state.etiquetas == "" || this.state.descripcion == "") {
            this.props.resourceAdded({'added':"false"})
        }  
        else {
            const data = {
                'categoria': this.state.categoria,
                'formato':this.state.formato,
                'nombre':this.state.nombre,
                'autor':this.state.autor,
                'edicion':this.state.edicion,
                'descripcion': this.state.descripcion,
                'etiquetas': this.state.etiquetas
            }
            axios.post(`${API}/repositorios/${this.props.match.params.id}/newrecurso/`, data)
            .then(res => {
                    this.props.resourceAdded({'added':"true"})
                    this.props.history.push(`/repositories/${this.props.match.params.id}/addresource/`);
            }).catch( e => {
                this.props.resourceAdded({'added':"false"})
            })    
        }
    }
    
    render() {
        console.log(this.props.match.params.id);
        return(
            <div className="columns prueba">
                <div className = "column is-three-quarters is-half is-offset-one-quarter">
                    <h1 className="title">
                        Registrar recurso
                    </h1>
                    <div className="field">
                        <label className="label">Nombre</label>
                        <div className="control">
                            <input className="input" onChange = {this.handleNombre} type="text" id="nombre" placeholder="Nombre"/>
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Autor</label>
                        <div className="control">
                            <input className="input" onChange = {this.handleAutor} type="text" id="autor" placeholder="Autor"/>
                        </div>
                    </div>
                    <div className="field">
                      <label className="label">Categoria</label>
                      <div className="control">
                        <div className="select">
                          <select id="categoria" onChange={this.handleCategoria}>
                            <option value="PDF">PDF</option>
                            <option value="Video">Video</option>
                            <option value="Curso">Curso</option>
                            <option value="Imagen">Imagen</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="field">
                        <label className="label">Formato</label>
                        <div className="control">
                            <input className="input" onChange = {this.handleFormato} type="text" id="formato" placeholder="Formato"/>
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Edicion</label>
                        <div className="control">
                            <input className="input" onChange = {this.handleEdicion} type="text" id="edicion" placeholder="Edicion"/>
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Etiquetas</label>
                        <div className="control">
                            <input className="input" onChange = {this.handleEtiquetas} type="text" id="etiquetas" placeholder="Etiquetas"/>
                        </div>
                    </div>
                    <div className="field">
                      <label className="label">Descripcion</label>
                      <div className="control">
                        <textarea className="textarea" onChange = {this.handleDescripcion} id="descripcion" placeholder="Textarea"></textarea>
                      </div>
                    </div>
                    <div className="field is-grouped">
                      <div className="control">
                        <button className="button is-link" onClick={this.handleSave}>Guardar</button>
                      </div>
                      <div className="control">
                        <button className="button is-text" onClick={()=>this.props.history.push('/')}>Cancelar</button>
                      </div>
                    </div>
                </div>
        </div>
        );
    }
}

let resource = connect(state => ({users: state.users}),{resourceAdded})(ResourceForm)

export default withRouter(resource);