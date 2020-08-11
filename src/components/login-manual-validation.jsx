import React, { Component } from 'react';
import Input from './common/input';

class Login extends Component {
  state = {
    login: { email: '', password: '' },
    errors: {},
  };

  //   email = React.createRef();
  //   componentDidMount() {
  //     this.email.current.focus();
  //   }

  validateForm = () => {
    const { login } = this.state;
    const errors = {};

    if (login.email.trim() === '') {
      errors.email = 'Email is required!';
    }

    if (login.password.trim() === '') {
      errors.password = 'Password is required!';
    }

    return Object.keys(errors).length === 0 ? null : errors;
  };

  validateProperty = ({ name, value }) => {
    if (name === 'email') {
      if (value.trim() === '') return 'Email is required!';
    }
    if (name === 'password') {
      if (value.trim() === '') return 'Password is required!';
    }
  };

  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);

    if (errorMessage) {
      errors[input.name] = errorMessage;
    } else {
      delete errors[input.name];
    }

    const login = { ...this.state.login };
    login[input.name] = input.value;

    this.setState({ login, errors });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const errors = this.validateForm();
    this.setState({ errors: errors || {} });

    if (errors) return;

    //submit the form
    console.log('submit');
  };

  render() {
    const { login, errors } = this.state;
    return (
      <div>
        <h1 className="text-center">Login</h1>
        <form onSubmit={this.handleSubmit}>
          <Input
            type="text"
            name="email"
            value={login.email}
            label="Email address"
            placeholder="Enter email"
            onChange={this.handleChange}
            error={errors.email}
          />
          <Input
            type="password"
            name="password"
            value={login.password}
            label="Password"
            placeholder="Enter password"
            onChange={this.handleChange}
            error={errors.password}
          />
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </form>
      </div>
    );
  }
}

export default Login;
