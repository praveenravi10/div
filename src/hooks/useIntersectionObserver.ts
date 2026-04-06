import { RefObject, useEffect, useState } from 'react';

interface Options extends IntersectionObserverInit {
  freezeOnceVisible?: boolean;
}

/**
 * Observes whether a DOM element is visible in the viewport.
 * Used to trigger scroll-reveal animations.
 *
 * @param ref               - React ref for the target element
 * @param options.threshold - Ratio of element that must be visible (default: 0.1)
 * @param options.freezeOnceVisible - Stop observing once visible (default: true)
 */
export function useIntersectionObserver(
  ref: RefObject<Element>,
  { threshold = 0.1, root = null, rootMargin = '0px', freezeOnceVisible = true }: Options = {}
): boolean {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (freezeOnceVisible) observer.unobserve(el);
        } else if (!freezeOnceVisible) {
          setIsVisible(false);
        }
      },
      { threshold, root, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [ref, threshold, root, rootMargin, freezeOnceVisible]);

  return isVisible;
}
