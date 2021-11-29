import { useState } from 'react';

export const useCounter = (initialState = 10) => {
  const [state, setState] = useState(initialState);

  const increment = (factor = 1) => setState(state + factor);
  const decrement = (factor = 1) => setState(state - factor);
  const reset = (factorReset = 0) => setState(factorReset);

  return {
    state,
    increment,
    decrement,
    reset,
  };
};
