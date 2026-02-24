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
            (entry.target as HTMLElement).setAttribute('data-revealed', 'true');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const children = el.querySelectorAll('.reveal');
    children.forEach((child) => {
      const revealed = (child as HTMLElement).getAttribute('data-revealed');
      if (revealed === 'true') return;
      observer.observe(child);
    });

    return () => observer.disconnect();
  }, []);

  return ref;
}
