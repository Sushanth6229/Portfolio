// Cursor.js
import React, { useEffect, useState } from 'react';

const Cursor = () => {
  const [cursorStyle, setCursorStyle] = useState({});

  useEffect(() => {
    const updateCursor = (e) => {
      setCursorStyle({
        left: `${e.clientX}px`,
        top: `${e.clientY}px`,
      });
    };

    window.addEventListener('mousemove', updateCursor);
    return () => {
      window.removeEventListener('mousemove', updateCursor);
    };
  }, []);

  return (
    <div
      className="custom-cursor"
      style={{
        position: 'fixed',
        width: '20px',
        height: '20px',
        backgroundColor: '#FF6F61',
        borderRadius: '50%',
        pointerEvents: 'none',
        transform: 'translate(-50%, -50%)',
        transition: 'transform 0.1s',
        ...cursorStyle,
      }}
    />
  );
};

export default Cursor;
