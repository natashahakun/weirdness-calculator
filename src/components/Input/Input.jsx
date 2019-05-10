import React from 'react';

export const Input = ({ label, id, name, ...inputProps }) =>
  <div>
    <label htmlFor={id}>{ label }</label>
    <input id={id} name={name || id} {...inputProps} />
  </div>