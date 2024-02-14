import { useEffect, useRef } from "react";


export default function useDebounce(callback, delay) {
  const timeoutIdRef = useRef(null); 

  useEffect(() => {
    return () => {
      if (timeoutIdRef.current) {
        clearTimeout(timeoutIdRef.current)
      }
    }
  }, []); 

  const debouncedCallback = (...args) => {
    if (timeoutIdRef.current) {
      clearTimeout(timeoutIdRef.current)
    }

    timeoutIdRef.current = setTimeout(() => {
      callback(...args); 
    }, delay);
  }


  return debouncedCallback; 
}

/* ... 
import { useEffect, useState } from 'react';

function useDebouncer(callback, delay) {
  const [debouncedCallback, setDebouncedCallback] = useState(callback);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedCallback(callback);
    }, delay);

    return () => {
      clearTimeout(timerId);
    };
  }, [callback, delay]);

  return debouncedCallback;
}


*/