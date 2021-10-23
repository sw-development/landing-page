import React, { useEffect } from 'react';

interface HookProps {
  sectionRef: React.MutableRefObject<HTMLDivElement>;
  customOptions?: Record<string, unknown>;
}

const useScrollReveal = (props: HookProps) => {
  useEffect(() => {
    if (typeof window !== undefined) {
      const scrollReveal = require('scrollreveal').default;
      if (props.sectionRef.current) {
        scrollReveal().reveal(props.sectionRef.current, {
          reset: true,
          duration: 2000,
          delay: 400,
          ...props.customOptions,
        });
      }
    }
  }, [props]);
};

export default useScrollReveal;
