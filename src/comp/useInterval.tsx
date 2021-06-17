import { useEffect, useRef } from 'react';

export interface IntervalCallback {
  (): void;
}

// https://overreacted.io/making-setinterval-declarative-with-react-hooks/
export function useInterval(callback: IntervalCallback, delay: number) {
  const savedCallback = useRef(undefined as IntervalCallback | undefined);

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current && savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}
