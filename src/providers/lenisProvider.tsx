'use client'
import {ReactLenis} from 'lenis/react';
import {FC, useRef} from "react";

type LenisScrollProviderProps = {
  children: React.ReactNode;
};
const LenisScrollProvider: FC<LenisScrollProviderProps> = ({children}) => {
  const lenisRef = useRef(null);
  return <ReactLenis
      ref={lenisRef}
      root

      
      options={{
        lerp: 1,
        duration: 1,
        smoothWheel: true,
        // overscroll: true
        // infinite: true
      }}>
    {children}
  </ReactLenis>;
};

export default LenisScrollProvider;