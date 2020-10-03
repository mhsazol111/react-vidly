import React from 'react';
import Form from './common/form';
import Joi from 'joi';

class Register extends Form {
  state = {
    formData: { name: '', email: '', username: '', password: '', password_confirmation: '' },
    errors: {},
  };

  schema = {
    name: Joi.string().required().label('Name'),
    email: Joi.string().email({ tlds: false }).required().label('Email'),
    username: Joi.string().min(5).required().label('Username'),
    password: Joi.string().min(8).required().label('Password'),
    password_confirmation: Joi.any().valid(Joi.ref('password')).required(),
  };

  doSubmit = () => {
    console.log('submitted');
  };

  render() {
    return (
      <div>
        <h1 className="text-center">Register</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput('text', 'name', 'Your Name', 'Enter your name')}
          {this.renderInput('email', 'email', 'Your Email', 'Enter your email')}
          {this.renderInput('text', 'username', 'Your Username', 'Enter your username')}
          {this.renderInput('password', 'password', 'Your Password', 'Enter your password')}
          {this.renderInput('password', 'password_confirmation', 'Confirm Password', 'Confirm password')}
          {this.renderButton('submit', 'register-submit', 'btn-primary', 'Register')}
        </form>
      </div>
    );
  }
}

export default Register;
