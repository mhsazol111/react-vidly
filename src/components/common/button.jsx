import React from 'react';

const Button = ({ className, label, ...rest }) => {
  const btnClass = 'btn ' + className;
  return (
    <button className={btnClass} {...rest}>
      {label}
    </button>
  );
};

export default Button;
