import React, { useState } from 'react';
import '../02-useEffect/Effects.css';
import { MultipleCustomHooks } from '../03-examples/MultipleCustomHooks';

export const RealExampleRef = () => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <h1>Real ejemplo</h1>
      <hr />
      {show && <MultipleCustomHooks />}

      <button onClick={() => setShow(!show)} className="btn btn-primary mt-1">
        Show/Hide
      </button>
    </div>
  );
};
