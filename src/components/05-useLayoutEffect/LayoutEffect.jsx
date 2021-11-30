import React, { useLayoutEffect, useRef, useState } from 'react';
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';

import '../02-useEffect/Effects.css';
import './Layout.css';

export const LayoutEffect = () => {
  const { counter, increment } = useCounter(1);
  const [boxSizes, setBoxSizes] = useState({});

  const { data } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );

  const { quote } = !!data && data[0];

  const pTag = useRef();

  useLayoutEffect(() => {
    setBoxSizes(pTag.current.getBoundingClientRect());
  }, [quote]);

  return (
    <div>
      <h1>LayoutEffect</h1>
      <hr />

      <blockquote className="blockquote text-end">
        <p ref={pTag} className="mb-0">
          {quote}
        </p>
      </blockquote>

      <pre>{JSON.stringify(boxSizes)}</pre>

      <button onClick={increment} className="btn btn-primary">
        siguiente qupte
      </button>
    </div>
  );
};
