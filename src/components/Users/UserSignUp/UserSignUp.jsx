import React, {Component} from 'react';
import "./UserSignUp.scss"
import SignUpForm from './SignUpForm'
import Notifications from '../../Notification/notification'


class UserSignUp extends Component {

  render() {
    return (
      <div className={"booty"}>
        <div className="signup__container">
          <div className="container__child signup__thumbnail">
            <div className="thumbnail__logo">
              <h1 className="sh1 logo__text">UCHub</h1>
            </div>
            <div className="thumbnail__content text-center">
              <h1 className="sh1 heading--primary">Bienvenido a UCHub.</h1>
              <h2 className="sh2 heading--secondary">¿Listo para aprender?</h2>
            </div>
            <div className="signup__overlay"></div>
          </div>
          <div className="container__child signup__form">
            <SignUpForm/>
          </div>
        </div>
        <Notifications/>
      </div>
    );
  }
}

export default UserSignUp;