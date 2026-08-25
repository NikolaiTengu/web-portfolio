'use client';

import { useEffect, useRef } from 'react';

type ParticlesProps = {
  count?: number;
  color?: string;
  maxSpeed?: number;
};

type Particle = {
  x: number;
  y: number;
  radius: number;
  vx: number;
  vy: number;
  alpha: number;
};

export default function Particles({ count = 18, color = '239, 68, 68', maxSpeed = 0.2 }: ParticlesProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const frameRef = useRef<number | null>(null);
  const particlesRef = useRef<Particle[]>([]);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return undefined;
    }

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      return undefined;
    }

    const safeCount = Math.min(Math.max(Math.round(count), 8), 30);
    const canvas = canvasRef.current;
    if (!canvas) {
      return undefined;
    }

    const ctx = canvas.getContext('2d');
    if (!ctx) {
      return undefined;
    }

    const setup = () => {
      const { innerWidth, innerHeight } = window;
      const ratio = Math.min(window.devicePixelRatio || 1, 1.5);
      canvas.width = innerWidth * ratio;
      canvas.height = innerHeight * ratio;
      canvas.style.width = `${innerWidth}px`;
      canvas.style.height = `${innerHeight}px`;
      ctx.setTransform(ratio, 0, 0, ratio, 0, 0);

      particlesRef.current = Array.from({ length: safeCount }, () => {
        const radius = Math.random() * 1.8 + 0.6;
        return {
          x: Math.random() * innerWidth,
          y: Math.random() * innerHeight,
          radius,
          vx: (Math.random() - 0.5) * maxSpeed,
          vy: (Math.random() - 0.5) * maxSpeed,
          alpha: Math.random() * 0.4 + 0.2,
        };
      });
    };

    const draw = () => {
      const { innerWidth, innerHeight } = window;
      ctx.clearRect(0, 0, innerWidth, innerHeight);

      particlesRef.current.forEach((particle) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0) particle.x = innerWidth;
        if (particle.x > innerWidth) particle.x = 0;
        if (particle.y < 0) particle.y = innerHeight;
        if (particle.y > innerHeight) particle.y = 0;

        ctx.beginPath();
        ctx.fillStyle = `rgba(${color}, ${particle.alpha})`;
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      frameRef.current = requestAnimationFrame(draw);
    };

    setup();
    frameRef.current = requestAnimationFrame(draw);

    const handleResize = () => {
      setup();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, [count, color, maxSpeed]);

  return <canvas ref={canvasRef} className="particles-canvas" aria-hidden="true" />;
}
