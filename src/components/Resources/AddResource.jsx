import React,{Component} from 'react';
import TopBar from '../HomePage/TopBar';
import Form from './ResourceForm';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

class AddResource extends Component {
    state = {
        added: "",
        addClass: "notification is-danger"
    }

    componentWillReceiveProps(nextProps){
        this.setState({
            added: nextProps.users.resourceAdded.added
        })
    }

    dismissNotification = () => {
        if(this.state.addClass == "notification is-danger") {
            this.setState({
                added: "hola",
                addClass: "notification is-danger is-hidden"
            });
        }
    }
    
    renderNotification = () => {
        if(this.state.added === "true") {
            return(
                <div className="notification is-success">
                    <button className="delete"></button>
                    El recurso ha sido agregado con exito
                </div>
            );
        }
        else if(this.state.added === "false") {
            if(this.state.addClass == "notification is-danger is-hidden") {
                this.setState({
                    addClass: "notification is-danger"
                });
            }
            return(<div className={this.state.addClass}>
                <button className="delete" onClick = {this.dismissNotification}></button>
                Ups!, hay un problema con los datos introducidos
            </div>)
        }
    }
    render() {
        return(
            <div className="hero is-light is-fullheight">
                <TopBar/>
                <Form />
                {
                    this.renderNotification()
                }
            </div>
        );
    }
}

let resourceRegister = connect( state => ({
  users: state.users
}),{

})(AddResource);

export default withRouter(resourceRegister);