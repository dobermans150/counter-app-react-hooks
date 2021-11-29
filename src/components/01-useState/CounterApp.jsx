import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './Counter.css';
const CounterApp = () => {
  const [{ counter1, counter2 }, setCounter] = useState({
    counter1: 10,
    counter2: 20,
    counter3: 0,
    counter4: 230,
    counter5: 40,
  });

  return (
    <>
      <h1>counter {counter1}</h1>
      <h1>counter {counter2}</h1>
      <hr />

      <button
        onClick={() =>
          setCounter((state) => ({
            ...state,
            counter1: counter1 + 1,
          }))
        }
        className="btn btn-primary"
      >
        +1
      </button>
    </>
  );
};

CounterApp.propTypes = {};

export default CounterApp;
