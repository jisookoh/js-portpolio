import { useEffect, useState, useRef } from "react";

export const useParallaxScroll = (count: number) => {
  const speedsRef = useRef<number[]>([]);
  const [translateYValues, setTranslateYValues] = useState<number[]>([]);

  /**
   * 스크롤에 따른 속도 지정
   * 짝수속도: 0.3
   * 홀수속도: 0.2
   */
  useEffect(() => {
    speedsRef.current = Array(count)
      .fill(0)
      .map((_, i) => {
        const speed = i % 2 === 0 ? 0.3 : 0.2;
        return Math.round(speed * 100) / 100;
      });
    setTranslateYValues(Array(count).fill(0));
  }, [count]);

  useEffect(() => {
    if (count === 0) return;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const newValues = speedsRef.current.map(
        (speed) => Math.round(scrollY * speed * 100) / 100
      );
      setTranslateYValues(newValues);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [count]);

  return translateYValues;
};
