import React, { useRef } from 'react';
import '../02-useEffect/Effects.css';

export const FocusScreen = () => {
  const inputRef = useRef();

  const handleClick = () => {
    inputRef.current.select();
  };

  return (
    <div>
      <h1>asdhaISdu</h1>
      <hr />

      <input
        ref={inputRef}
        type="text"
        className="form-control"
        placeholder="su nombre"
      />
      <button onClick={handleClick} className="btn btn-outline-primary mt-5">
        Focus
      </button>
    </div>
  );
};
