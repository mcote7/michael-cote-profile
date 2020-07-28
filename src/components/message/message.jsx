import React from 'react';
import '../../css/message.css';
import Form from './form';
import Joi from 'joi-browser';
import { onRoute } from '../../utilities/onRoute';
import emailjs from 'emailjs-com';

class Message extends Form {
  state = {
    data: {
      name: '',
      email: '',
      message: '',
    },
    errors: {}
  };
  schema = {
    name: Joi.string().required().label('Name'),
    email: Joi.string().required().regex(/(.+)@(.+){2,}\.(.+){2,}/).label('Email'),
    message: Joi.string().min(10).label('Message'),
  };
  componentDidMount() {
    onRoute();
  }

  doSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm('gmail', 'mytemp', e.target, 'user_KRJPD3NhrsH0tdT0veU9v')
    .then((result) => {
      console.log(result.text);
      //???change message state = true pass up
      this.props.handleMessage();
      this.props.history.push("/");
    }, (error) => {
      console.log(error.text);
    });
  };
  render() {
    return (
      <React.Fragment>
          <div className="messageCont container">
            <form className="myForm" onSubmit={this.doSubmit}>
              <div className="row">
                <div className="col-lg-6">
                  {this.renderInput("name", "Name")}
                  {this.renderInput("email", "Email")}
                </div>
                <div className="col-lg-6">
                  {this.renderText("message", "Message")}
                </div>
              </div>
              <div className="row pt-3 moreBtm">
                <div className="col-lg-12 mt-4 pt-5">
                  {this.renderButton('SEND MESSAGE')}
                </div>
              </div>
            </form>
          </div>
      </React.Fragment>
    );
  };
};
export default Message;