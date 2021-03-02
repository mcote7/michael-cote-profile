import React, { Component } from 'react';
import Joi from 'joi-browser';
import Input from './input';
import Text from './messageText';

class Form extends Component {
  state = {
    data: {},
    errors: {}
  };

  validate = () => {
    const options = {abortEarly: false};
    const {error} = Joi.validate(this.state.data, this.schema, options);
    // console.log("error", error)
    if(!error) return null;
    const errors = {};
    for(let item of error.details)
      errors[item.path[0]] = item.message;
    return errors;
  };

  validateProperty = ({name, value}) => {
    const obj = {[name]: value};
    const schema = {[name]: this.schema[name]};
    const {error} = Joi.validate(obj, schema);
    // console.log({error})
    if(error && error.details[0].path.includes('email'))
    error.details[0].message = '"Email" must be valid. ( person@example.com )';
    return error ? error.details[0].message : null;
  };

  // handleSubmit = e => {
  //   e.preventDefault();
  //   const errors = this.validate();
  //   console.log(errors);
  //   this.setState({errors: errors || {}})
  //   if(errors) return;
  //   this.doSubmit();
  // };

  //Check delete?
  handleChange = ({currentTarget: input}) => {
    const errors = {...this.state.errors};
    const errorMessage = this.validateProperty(input);
    if(errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];
    const data = {...this.state.data};
    data[input.name] = input.value;
    this.setState({data, errors});
  };

  renderButton(label, id) {
    return(
    <button
    disabled={this.validate()} type="submit" id={id}
    className="btn col-lg-12 formBtn">{label}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <span><i className="fa fa-envelope-o" aria-hidden="true"></i></span></button>);
  };

  renderText(name, label) {
    const { data, errors } = this.state;
    return (
      <Text 
      name={name}
      value={data[name]}label={label}
      onChange={this.handleChange}error={errors[name]}/>
    );
  };

  renderInput(name, label, type = 'text') {
    const {data, errors} = this.state;
    return(
      <Input error={errors[name]}
      name={name} value={data[name]} type={type}
      label={label} onChange={this.handleChange}/>
    );
  };

};
export default Form;