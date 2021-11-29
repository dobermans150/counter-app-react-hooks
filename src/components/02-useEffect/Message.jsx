import React, { useEffect, useState } from 'react';

export const Message = () => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const { x, y } = coords;

  useEffect(() => {
    const mousemove = ({ x, y }) => {
      const coors = { x, y };

      setCoords(coors);
    };
    window.addEventListener('mousemove', mousemove);
    return () => {
      window.removeEventListener('mousemove', mousemove);
    };
  }, [coords]);

  return (
    <>
      <h3>Eres Genial</h3>
      <p>
        x:{x} y: {y}
      </p>
    </>
  );
};
