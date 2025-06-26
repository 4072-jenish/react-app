import React, { useEffect, useState } from 'react';
import './cursor.css';

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    const move = (e) => setPosition({ x: e.clientX, y: e.clientY });

    const click = () => {
      setClicked(true);
      setTimeout(() => setClicked(false), 600); // Match animation time
    };

    window.addEventListener('mousemove', move);
    window.addEventListener('mousedown', click);

    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mousedown', click);
    };
  }, []);

  return (
    <div
      className="custom-cursor"
      style={{ left: `${position.x}px`, top: `${position.y}px` }}
    >
      <div className={`cursor-shape ${clicked ? 'clicked' : ''}`} />
    </div>
  );
};

export default Cursor;
