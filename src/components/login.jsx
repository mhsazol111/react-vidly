import React from 'react';
import Joi from 'joi';
import Form from './common/form';

class Login extends Form {
  state = {
    formData: { email: '', password: '' },
    errors: {},
  };

  schema = {
    email: Joi.string().email({ tlds: false }).required().label('Email'),
    password: Joi.string().required().label('Password'),
  };

  doSubmit = () => {
    console.log('submitted');
  };

  render() {
    return (
      <div>
        <h1 className="text-center">Login</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput('text', 'email', 'Your Email', 'Enter your email')}
          {this.renderInput('password', 'password', 'Your Password', 'Enter your password')}
          <button type="submit" className="btn btn-primary" disabled={this.validateForm()}>
            Login
          </button>
        </form>
      </div>
    );
  }
}

export default Login;
