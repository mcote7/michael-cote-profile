import React from 'react';
import '../../css/message.css';
import Form from './form';
import Joi from 'joi-browser';
import { onRoute } from '../../utilities/onRoute';

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
  componentDidMount() {
    onRoute();
  }
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
        <div className="container-fluid">
          <div className="messageCont row">
            <div className="col-xl-6 m-auto">
              <h1 className="formTitle">Send me a message</h1>
              <form className="myForm" onSubmit={this.handleSubmit}>
                {this.renderInput("name", "Name")}
                {this.renderInput("email", "Email")}
                {this.renderText("message", "Message")}
                {this.renderButton('SEND')}
              </form>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  };
};
export default Message;