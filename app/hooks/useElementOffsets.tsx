import { useState, useEffect, RefObject, useRef } from "react";

type RefEntry<T> = [string, RefObject<T | null>];

const isEqualEntries = <T,>(a: RefEntry<T>[], b: RefEntry<T>[]): boolean =>
  a.length === b.length &&
  a.every(([keyA, refA], i) => {
    const [keyB, refB] = b[i];
    return keyA === keyB && refA.current === refB.current;
  });

export const useElementOffsets = <T extends HTMLElement>(
  refs: RefEntry<T>[]
): number[] => {
  const [offsets, setOffsets] = useState<number[]>([]);
  const prevRefs = useRef<RefEntry<T>[]>([]);

  useEffect(() => {
    if (isEqualEntries(refs, prevRefs.current)) return;

    prevRefs.current = refs;

    const updateOffsets = () => {
      const newOffsets = refs.map(([_, ref]) => ref.current?.offsetTop ?? 0);
      setOffsets(newOffsets);
    };

    updateOffsets();

    window.addEventListener("resize", updateOffsets);
    return () => {
      window.removeEventListener("resize", updateOffsets);
    };
  }, [refs]);

  return offsets;
};
