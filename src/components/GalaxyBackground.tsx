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
      size: Math.random() * 1,
      speed: Math.random() * 0.5 + 0.3,
      angle: Math.random() * Math.PI * 2,
    }));

    function animate() {
      if (!ctx || !canvas) return;

      // Set the background color based on the current theme
      ctx.fillStyle = theme === 'dark' ? 'black' : 'white';
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

        // Check for edge collision and wrap around
        if (star.x < 0) {
          star.x = canvas.width;
        } else if (star.x > canvas.width) {
          star.x = 0;
        }
        if (star.y < 0) {
          star.y = canvas.height;
        } else if (star.y > canvas.height) {
          star.y = 0;
        }

        // Draw a trail behind the star
        // ctx.fillStyle = theme === 'dark' ? 'black)' : '#FFFFFF';
        // ctx.beginPath();
        // ctx.arc(
        //   star.x - Math.cos(star.angle) * 5,
        //   star.y - Math.sin(star.angle) * 5,
        //   star.size * 2,
        //   0,
        //   Math.PI * 2
        // );
        ctx.fill();

        star.x += Math.cos(star.angle) * star.speed;
        star.y += Math.sin(star.angle) * star.speed;

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size * 1.5, 0, Math.PI * 2); // Make the star brighter
        ctx.fillStyle = theme === 'dark' ? '#FFFFFF' : 'black';
        ctx.fill();
      });

      requestAnimationFrame(animate);
    }

    animate();

    return () => {
      window.removeEventListener('resize', setCanvasSize);
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none opacity-40"
      style={{ zIndex: -4 }}
    />
  );
}

export default GalaxyBackground;
