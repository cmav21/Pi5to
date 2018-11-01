import React, {Component} from 'react'
import { connect } from 'react-redux'


class Notificacions extends Component {
  render() {
    return (
      <div>

      </div>
    );
  }
}

const NotificationS = connect( state => ({
  notifications: state.notifications
}),{

})(Notificacions);

export default NotificationS;