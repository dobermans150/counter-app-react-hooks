import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import './Effects.css';
import { Message } from './Message';

const SimpleForm = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
  });

  const { name, email } = formState;

  useEffect(() => {}, []);

  useEffect(() => {}, [formState]);

  const handleInputChange = ({ target }) => {
    setFormState({
      ...formState,
      [target.name]: target.value,
    });
  };

  return (
    <>
      <h1>useEffect</h1>
      <hr />

      <div className="form-group">
        <input
          type="text"
          name="name"
          className="form-control"
          placeholder="Tu nombre"
          autoComplete="off"
          value={name}
          onChange={handleInputChange}
        />
      </div>

      <div className="form-group">
        <input
          type="email"
          name="email"
          className="form-control"
          placeholder="email@gmail.com"
          autoComplete="off"
          value={email}
          onChange={handleInputChange}
        />
      </div>

      {name === '123' && <Message />}
    </>
  );
};

SimpleForm.propTypes = {};

export default SimpleForm;
