import React,{Component} from 'react';
import TopBar from '../HomePage/TopBar';
import Form from './ResourceForm';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

class AddResource extends Component {
    state = {
        added: ""
    }

    componentWillReceiveProps(nextProps){
        this.setState({
            added: nextProps.users.resourceAdded.added
        })
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
            return(<div className="notification is-danger">
                <button className="delete"></button>
                Ups!, hay un problema con los datos introducidos
            </div>)
        }
    }
    render() {
        console.log(this.props.users);
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