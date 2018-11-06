import React,{Component} from 'react';
import TopBar from '../HomePage/TopBar';
import Form from './ResourceForm';
class AddResource extends Component {
    render() {
        return(
            <div className="hero is-light is-fullheight">
                <TopBar/>
                <Form />
            </div>
        );
    }
}

export default AddResource;