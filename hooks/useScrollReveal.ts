import React, { useEffect } from 'react';

interface HookProps {
  sectionRef: React.MutableRefObject<HTMLElement>;
  customOptions?: {
    origin?: string;
    delay?: number;
    distance?: string;
    duration?: number;
  };
}

const useScrollReveal = (props: HookProps) => {
  useEffect(() => {
    if (typeof window !== undefined) {
      const scrollReveal = require('scrollreveal').default;
      if (props.sectionRef.current) {
        scrollReveal().reveal(props.sectionRef.current, {
          duration: 2000,
          delay: 400,
          ...props.customOptions,
        });
      }
    }
  }, [props]);
};

export default useScrollReveal;
