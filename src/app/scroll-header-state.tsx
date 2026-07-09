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
    const menuToggle = document.querySelector<HTMLInputElement>('.menu-toggle');
    const menuLinks = document.querySelectorAll<HTMLAnchorElement>('.main-nav a');

    const updateMenuState = () => {
      body.classList.toggle('mobile-menu-open', Boolean(menuToggle?.checked));
    };

    const closeMenu = () => {
      if (!menuToggle) return;
      menuToggle.checked = false;
      updateMenuState();
    };

    const closeMenuOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closeMenu();
    };

    updateMenuState();
    window.addEventListener('scroll', updateHeaderState, { passive: true });
    window.addEventListener('resize', updateHeaderState);
    menuToggle?.addEventListener('change', updateMenuState);
    menuLinks.forEach((link) => link.addEventListener('click', closeMenu));
    window.addEventListener('keydown', closeMenuOnEscape);

    return () => {
      body.classList.remove('has-fixed-topbar', 'mobile-menu-open');
      window.removeEventListener('scroll', updateHeaderState);
      window.removeEventListener('resize', updateHeaderState);
      menuToggle?.removeEventListener('change', updateMenuState);
      menuLinks.forEach((link) => link.removeEventListener('click', closeMenu));
      window.removeEventListener('keydown', closeMenuOnEscape);
    };
  }, []);

  return null;
}
