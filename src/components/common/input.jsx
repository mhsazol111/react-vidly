import React from 'react';

const Input = ({ type, name, value, label, placeholder, onChange, error }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        className="form-control"
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {error && <div className="alert alert-danger mt-2">{error}</div>}
    </div>
  );
};

export default Input;
