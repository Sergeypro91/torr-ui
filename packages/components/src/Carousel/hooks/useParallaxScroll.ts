import { useEffect, useRef, useState } from 'react';

export const useParallaxScroll = (parallaxScroll: boolean) => {
  const [parallaxOffset, setParallaxOffset] = useState(0);
  const refBody = useRef<HTMLBodyElement>(null);

  const handleScroll = (e: Event) => {
    const target = e.target as HTMLElement;
    setParallaxOffset(Math.round(target.scrollTop / 2));
  };

  useEffect(() => {
    refBody.current = document.querySelector('body');

    if (!parallaxScroll || !refBody.current) return;

    refBody.current?.addEventListener('scroll', handleScroll);

    return () => {
      refBody.current?.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return { parallaxOffset };
};
