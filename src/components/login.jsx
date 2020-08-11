import React from 'react';
import Joi from 'joi';
import Form from './common/form';
import Input from './common/input';

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
    const { formData, errors } = this.state;
    return (
      <div>
        <h1 className="text-center">Login</h1>
        <form onSubmit={this.handleSubmit}>
          <Input
            type="text"
            name="email"
            value={formData.email}
            label="Email address"
            placeholder="Enter email"
            onChange={this.handleChange}
            error={errors.email}
          />
          <Input
            type="password"
            name="password"
            value={formData.password}
            label="Password"
            placeholder="Enter password"
            onChange={this.handleChange}
            error={errors.password}
          />
          <button
            type="submit"
            className="btn btn-primary"
            disabled={this.validateForm()}
          >
            Login
          </button>
        </form>
      </div>
    );
  }
}

export default Login;
