import React, { useEffect } from 'react';

const Background = () => {
  const stars = [];

  // Number of stars
  const numberOfStars = 100;

  // Initialize star properties
  for (let i = 0; i < numberOfStars; i++) {
    stars.push({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      radius: Math.random() * 2,
      dx: (Math.random() - 0.5) * 0.5, // Horizontal movement
      dy: (Math.random() - 0.5) * 0.5  // Vertical movement
    });
  }

  useEffect(() => {
    const canvas = document.getElementById('backgroundCanvas');
    const ctx = canvas.getContext('2d');
    
    // Resize the canvas to fill the screen
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw stars
      stars.forEach(star => {
        ctx.fillStyle = 'rgba(255, 255, 255, 1)';
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2, false);
        ctx.fill();

        // Update star position
        star.x += star.dx;
        star.y += star.dy;

        // Wrap stars around the canvas
        if (star.x > canvas.width) star.x = 0;
        if (star.x < 0) star.x = canvas.width;
        if (star.y > canvas.height) star.y = 0;
        if (star.y < 0) star.y = canvas.height;
      });

      requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas id="backgroundCanvas" style={{
      position: 'fixed',
      top: 0,
      left: 0,
      zIndex: -1,
      pointerEvents: 'none',
    }} />
  );
};

export default Background;
