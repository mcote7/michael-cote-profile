import React from 'react';
import '../../css/message.css';
import Form from './form';
import Joi from 'joi-browser';

class Message extends Form {
  state = {
    data: {
      username: '',
      email: '',
      message: '',
    },
    
    errors: {}
  };
  schema = {
    name: Joi.string().required().label('Name'),
    email: Joi.string().required().regex(/(.+)@(.+){2,}\.(.+){2,}/).label('Email'),
    message: Joi.string().required().label('Message'),
  };
  doSubmit = async () => {
    try {

    }
    catch (ex) {
      if(ex.response && ex.response.status === 400) {
        const errors = {...this.state.errors};
        errors.email = ex.response.data;
        this.setState({errors});
      }
    }
  };
  render() {
    return (
      <React.Fragment>
        <div className="messageCont">
        <h1 className="formTitle">Send me a message</h1>
          <form className="myForm" onSubmit={this.handleSubmit}>
            {this.renderInput("name", "Name")}
            {this.renderInput("email", "Email")}
            {this.renderText("message", "Message")}
            {this.renderButton('SEND')}
          </form>
        </div>
      </React.Fragment>
    );
  };
};
export default Message;