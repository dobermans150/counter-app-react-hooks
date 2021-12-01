import React, { useCallback, useState } from 'react';
import { ShowIncrement } from './ShowIncrement';

import '../02-useEffect/Effects.css';
export const CallBackHokk = () => {
  const [counter, setCounter] = useState(0);

  /*  const increment = () => {
    setCounter(counter + 1);
  }; */

  const increment = useCallback(
    (num = 1) => {
      setCounter((c) => c + num);
    },
    [setCounter]
  );
  return (
    <div>
      <h1>useCallback Hook: {counter}</h1>
      <hr />

      <ShowIncrement increment={increment} />
    </div>
  );
};
