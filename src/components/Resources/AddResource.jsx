import React,{Component} from 'react';
import TopBar from '../HomePage/TopBar';
import Form from './ResourceForm';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { resourceAdded} from '../../actions/UserActions'

class AddResource extends Component {
    state = {
        added: "",
        cleanNotification: ""
    }

    componentWillReceiveProps(nextProps){
        this.setState({
            added: nextProps.users.resourceAdded.added,
            cleanNotification: nextProps.users.notification
        })
    }

    dismissNotification = () => {
        this.props.resourceAdded({'added':""})
    }
    
    renderNotification = () => {
        if(this.state.added == "false" ) {
            return(
                <div className="notification is-danger">
                    <button className="delete" onClick = {this.dismissNotification}></button>
                    Ups!, hay un problema con los datos introducidos
                </div>
            );
        }
        else if(this.state.added == "true" ){
            return(
                <div className="notification is-success">
                    <button className="delete" onClick = {this.dismissNotification}></button>
                    El recurso ha sido agregado con exito
                </div>
            );
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

let resourceRegister = connect( state => ({users: state.users}),{resourceAdded})(AddResource);

export default withRouter(resourceRegister);