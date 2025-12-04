import { useCallback } from 'react';

export const useScrollTo = () => {
  const scrollTo = useCallback((e: React.MouseEvent<HTMLElement> | null, href: string) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }

    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);

    if (element) {
      const headerOffset = 85;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }, []);

  return scrollTo;
};