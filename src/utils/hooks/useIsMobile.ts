import { useLayoutEffect, useState } from 'react';

const maxWidth = 768;

export default function useIsMobile() {
  const [isMobile, setIsMobile] = useState(
    typeof window !== 'undefined' ? window.innerWidth <= maxWidth : false,
  );

  useLayoutEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= maxWidth);
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return isMobile;
}
