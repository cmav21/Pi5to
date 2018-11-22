import React,{Component} from 'react';
import TopBar from '../HomePage/TopBar';
import Form from './ResourceForm';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import Notification from '../Notification/notification'

class AddResource extends Component {

    render() {
        return(
            <div className="hero is-light is-fullheight">
                <TopBar/>
                <Notification/>
                <Form />
            </div>
        );
        
    }
}

let resourceRegister = connect( state => ({users: state.users}),{})(AddResource);

export default withRouter(resourceRegister);