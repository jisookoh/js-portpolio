import { useRef, useCallback, createRef, RefObject } from "react";

export const useDynamicRefs = <T extends HTMLElement>() => {
  const refs = useRef<Record<string, RefObject<T | null>>>({});

  const getRef = useCallback((key: string) => {
    if (!refs.current[key]) {
      refs.current[key] = createRef<T>();
    }
    return refs.current[key];
  }, []);

  const getAllRefs = useCallback(() => Object.entries(refs.current), []);

  return { getRef, getAllRefs };
};
