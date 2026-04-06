import { useEffect, useState } from 'react';

const SECTIONS = ['hero', 'about', 'skills', 'projects', 'experience', 'contact'];

/**
 * Detects which section is currently in the viewport.
 * Drives the active state in the Navbar links.
 */
export function useActiveSection(): string {
  const [active, setActive] = useState('hero');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );

    SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return active;
}
