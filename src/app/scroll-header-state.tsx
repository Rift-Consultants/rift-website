'use client';

import { useEffect } from 'react';

export default function ScrollHeaderState() {
  useEffect(() => {
    const body = document.body;
    const heroSection = document.querySelector<HTMLElement>('.fold');
    const header = document.querySelector<HTMLElement>('.topbar');

    const updateHeaderState = () => {
      const heroBottom = heroSection ? heroSection.offsetTop + heroSection.offsetHeight : 0;
      const fixedPoint = Math.max(0, heroBottom - (header?.offsetHeight ?? 0));
      body.classList.toggle('has-fixed-topbar', window.scrollY >= fixedPoint);
    };

    updateHeaderState();
    window.addEventListener('scroll', updateHeaderState, { passive: true });
    window.addEventListener('resize', updateHeaderState);

    return () => {
      body.classList.remove('has-fixed-topbar');
      window.removeEventListener('scroll', updateHeaderState);
      window.removeEventListener('resize', updateHeaderState);
    };
  }, []);

  return null;
}
