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
    message: Joi.string().min(10).label('Message'),
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
          <div className="messageCont container">
            <form className="myForm" onSubmit={this.handleSubmit}>
              <div className="row">
                <div className="col-lg-6">
                  {this.renderInput("name", "Name")}
                  {this.renderInput("email", "Email")}
                </div>
                <div className="col-lg-6">
                  {this.renderText("message", "Message")}
                </div>
              </div>
              <div className="row pt-3">
                <div className="col-lg-12 mt-4 pt-5">
                  {this.renderButton('CONTACT ME')}
                </div>
              </div>
            </form>
          </div>
      </React.Fragment>
    );
  };
};
export default Message;