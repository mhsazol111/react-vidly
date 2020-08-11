import { Component } from 'react';
import Joi from 'joi';

class Form extends Component {
  state = {
    formData: {},
    error: {},
  };

  //TODO: Validate the whole form with Joi
  validateForm = () => {
    const options = {
      abortEarly: false,
    };

    const result = Joi.object(this.schema).validate(
      this.state.formData,
      options
    );

    if (!result.error) return null;

    const errors = {};
    result.error.details.map((item) => {
      return (errors[item.path[0]] = item.message);
    });

    return errors;
  };

  //TODO: Validate Single Input
  validateProperty = ({ name, value }) => {
    const schema = { [name]: this.schema[name] };
    const obj = { [name]: value };
    const { error } = Joi.object(schema).validate(obj);

    return error ? error.details[0].message : null;
  };

  //TODO: Handle onChange Event
  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);
    if (errorMessage) {
      errors[input.name] = errorMessage;
    } else {
      delete errors[input.name];
    }

    const formData = { ...this.state.formData };
    formData[input.name] = input.value;
    this.setState({ formData, errors });
  };

  //TODO: Handle Form Submit
  handleSubmit = (e) => {
    e.preventDefault();

    const errors = this.validateForm();
    this.setState({ errors: errors || {} });

    if (errors) return;

    //TODO: submit the form
    this.doSubmit();
  };
}

export default Form;
