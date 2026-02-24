import { useEffect, useRef } from 'react';

export function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const observe = () => {
      const children = el.querySelectorAll('.reveal:not(.visible)');
      children.forEach((child) => observer.observe(child));
    };

    observe();

    // Re-observe on DOM changes (React re-renders)
    const mutation = new MutationObserver(observe);
    mutation.observe(el, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutation.disconnect();
    };
  }, []);

  return ref;
}
