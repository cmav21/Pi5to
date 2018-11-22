import React,{ Component } from "react";
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { map } from 'lodash'
import { clearNotification} from '../../actions/UserActions'
 


class notification extends Component {
    handleDissmiss = () => {
        this.props.clearNotification(this.props.id);
        console.log(this.props.id + this.props.notif)
    }

    render() {
        return(
            <div key={this.props.id} className={`${this.props.notif.class}`}>
              <button className="delete" onClick = {this.handleDissmiss}></button>
              <strong>{this.props.notif.strong}</strong>
            </div>
        );
    }
}

let Notif = notification
Notif = connect(state => ({users: state.users }), {clearNotification})(notification);

class Notification extends Component {
    
    componentDidUpdate() {
        this.container.scrollIntoView({ behavior: "smooth" })
    }
    render () {
        console.log(this.props);
        return <div ref={el =>{ this.container = el; }}>
        {map(this.props.users, (notif,i) => {
            return(
                <Notif key={i} id={i} notif={notif}/>
            )
        }
            )}
        </div>
    }


}
let Notifications = Notifications = connect(state => ({ users: state.users }), { clearNotification })(Notification)

export default withRouter(Notifications);