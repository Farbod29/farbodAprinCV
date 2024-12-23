import { useTheme } from 'next-themes';

import React, { useEffect, useRef } from 'react';

function GalaxyBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    const stars = Array.from({ length: 200 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 2,
      speed: Math.random() * 0.5 + 0.1,
      angle: Math.random() * Math.PI * 2,
    }));

    function animate() {
      //   ctx.fillStyle = theme === 'dark' ? 'white' : 'rgba(248,250,252,0.2)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      stars.forEach((star) => {
        const dx = canvas.width / 2 - star.x;
        const dy = canvas.height / 2 - star.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 1) {
          star.x = Math.random() * canvas.width;
          star.y = Math.random() * canvas.height;
          star.angle = Math.atan2(
            canvas.height / 2 - star.y,
            canvas.width / 2 - star.x
          );
        }

        star.x += Math.cos(star.angle) * star.speed;
        star.y += Math.sin(star.angle) * star.speed;

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fillStyle =
          theme === 'dark' ? 'rgba(255,255,255,0.8)' : 'rgba(0,0,0,0.2)';
        ctx.fill();
      });

      requestAnimationFrame(animate);
    }

    animate();

    return () => window.removeEventListener('resize', setCanvasSize);
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none opacity-40"
      style={{ zIndex: -1 }}
    />
  );
}

export default GalaxyBackground;
