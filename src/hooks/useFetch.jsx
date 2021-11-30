import { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';

export const useFetch = (url) => {
  const [state, setState] = useState({
    data: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    setState({ data: null, loading: true, error: null });

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setState({ loading: false, data });
      });
  }, [url]);

  return state;
};
