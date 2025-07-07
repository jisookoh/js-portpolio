"use client";

import styled from "@emotion/styled";
import { useEffect, useRef } from "react";

type Bubble = {
  x: number;
  y: number;
  radius: number;
  speed: number;
  color: string;
};

type Particle = {
  x: number;
  y: number;
  radius: number;
  vx: number;
  vy: number;
  alpha: number;
  color: string;
};

const COLORS = [
  "#A5D8FF", // 파스텔 블루
  "#FFC9DE", // 파스텔 핑크
  "#D8F5A2", // 파스텔 라임
  "#FFE066", // 파스텔 옐로우
  "#B5EAD7", // 파스텔 민트
  "#D0BFFF", // 파스텔 퍼플
  "#FFD6A5", // 파스텔 오렌지
];
export const BubblesCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const bubblesRef = useRef<Bubble[]>([]);
  const particlesRef = useRef<Particle[]>([]);
  const animationRef = useRef<number>(0);
  const sizeRef = useRef({ width: 0, height: 0 });
  const mouseRef = useRef({ x: -9999, y: -9999 });

  const createBubble = (width: number, height: number): Bubble => {
    const radius = Math.random() * 40 + 4;
    return {
      x: Math.random() * width,
      y: height + radius,
      radius,
      speed: Math.random() * 1.5 + 0.5,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
    };
  };

  const createParticles = (x: number, y: number, color: string) => {
    const count = 3 + Math.floor(Math.random() * 3);
    const newParticles: Particle[] = [];

    for (let i = 0; i < count; i++) {
      const angle = Math.random() * 2 * Math.PI;
      const speed = Math.random() * 1 + 0.3;
      newParticles.push({
        x,
        y,
        radius: Math.random() * 3 + 1,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        alpha: 1,
        color,
      });
    }
    particlesRef.current.push(...newParticles);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const setCanvasSize = () => {
      const { innerWidth: width, innerHeight: height } = window;
      canvas.width = width;
      canvas.height = height;
      sizeRef.current = { width, height };
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    setCanvasSize();
    window.addEventListener("resize", setCanvasSize);
    window.addEventListener("mousemove", handleMouseMove);

    const draw = () => {
      const { width, height } = sizeRef.current;
      ctx.clearRect(0, 0, width, height);

      if (Math.random() < 0.01) {
        bubblesRef.current.push(createBubble(width, height));
      }

      const bubbles = bubblesRef.current;
      const particles = particlesRef.current;
      const { x: mx, y: my } = mouseRef.current;

      for (let i = bubbles.length - 1; i >= 0; i--) {
        const bubble = bubbles[i];
        const dx = bubble.x - mx;
        const dy = bubble.y - my;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < bubble.radius) {
          createParticles(bubble.x, bubble.y, bubble.color);
          bubbles.splice(i, 1);
          continue;
        }

        bubble.y -= bubble.speed;

        ctx.beginPath();
        ctx.arc(bubble.x, bubble.y, bubble.radius, 0, Math.PI * 2);
        ctx.shadowColor = bubble.color;
        ctx.shadowBlur = 12;
        ctx.shadowOffsetX = 0;
        ctx.shadowOffsetY = 0;
        ctx.strokeStyle = bubble.color;
        ctx.lineWidth = 1.5;
        ctx.globalAlpha = 0.6;
        ctx.stroke();
      }

      bubblesRef.current = bubbles.filter(
        (bubble) => bubble.y + bubble.radius > 0
      );

      for (let i = particles.length - 1; i >= 0; i--) {
        const particle = particles[i];
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.alpha -= 0.02;

        if (particle.alpha <= 0) {
          particles.splice(i, 1);
          continue;
        }

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.globalAlpha = particle.alpha;
        ctx.fill();
        ctx.globalAlpha = 1;
      }

      animationRef.current = requestAnimationFrame(draw);
    };

    animationRef.current = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener("resize", setCanvasSize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return <S.Canvas ref={canvasRef} aria-hidden="true" />;
};

export namespace S {
  export const Canvas = styled.canvas`
    position: fixed;
    inset: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 1;
  `;
}
