import React from 'react';
import { useCounter } from '../../hooks/useCounter';
import './Counter.css';

export const CounterWithCustomHooks = () => {
  const { state, increment, decrement, reset } = useCounter();

  return (
    <>
      <h1>Counter with hook {state} </h1>
      <button onClick={() => increment(2)} className="btn">
        +1
      </button>
      <button onClick={() => reset(0)} className="btn">
        Reset
      </button>
      <button onClick={() => decrement(2)} className="btn">
        -1
      </button>
    </>
  );
};
