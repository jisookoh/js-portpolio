import { useRef, RefObject, useEffect } from "react";

type ObserverOptions = {
  root?: RefObject<Element | null> | null;
  rootMargin?: string;
  threshold?: number | number[];
};

type UseIntersectionObserverParams = {
  targetRef: RefObject<Element | null>;
  onIntersect: (entry: IntersectionObserverEntry) => void;
  options?: ObserverOptions;
  once?: boolean;
};

export function useIntersectionObserver({
  targetRef,
  onIntersect,
  options,
  once = true,
}: UseIntersectionObserverParams) {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (!targetRef.current) return;

    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          onIntersect(entry);

          if (once) observerRef.current?.unobserve(entry.target);
        }
      },
      {
        ...options,
        root: options?.root?.current ?? null,
      }
    );

    observerRef.current.observe(targetRef.current);

    return () => {
      observerRef.current?.disconnect();
    };
  }, [
    targetRef,
    onIntersect,
    options?.root,
    options?.rootMargin,
    options?.threshold,
    once,
  ]);
}
