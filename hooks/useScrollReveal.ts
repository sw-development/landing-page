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
      (async () => {
        if (props.sectionRef.current) {
          const sr = (await import('scrollreveal')).default;
          sr().reveal(props.sectionRef.current, {
            duration: 2000,
            delay: 400,
            ...props.customOptions,
          });
        }
      })();
    }
  }, []);
};

export default useScrollReveal;
