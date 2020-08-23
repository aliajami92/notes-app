import { useEffect, useRef } from 'react';

// Custom hook: run func() after component mount, does not run on initial mount.
const useDidMountEffect = (func, deps) => {
  const didMount = useRef(false);

  useEffect(() => {
    if (didMount.current) func();
    else didMount.current = true;
    // eslint-disable-next-line
  }, deps);
};

export default useDidMountEffect;
