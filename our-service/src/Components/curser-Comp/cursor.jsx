import React, { useEffect, useRef } from 'react';
import './cursor.css';

const Cursor = () => {
  const innerCursorRef = useRef(null);
  const outerCursorRef = useRef(null);

  useEffect(() => {
    const innerCursor = innerCursorRef.current;
    const outerCursor = outerCursorRef.current;

    let mouseX = 0;
    let mouseY = 0;
    let currentX = 0;
    let currentY = 0;
    const speed = 0.15;

    const moveCursor = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (innerCursor) {
        innerCursor.style.left = `${mouseX}px`;
        innerCursor.style.top = `${mouseY}px`;
      }
    };

    const animate = () => {
      currentX += (mouseX - currentX) * speed;
      currentY += (mouseY - currentY) * speed;

      if (outerCursor) {
        outerCursor.style.left = `${currentX}px`;
        outerCursor.style.top = `${currentY}px`;
      }

      requestAnimationFrame(animate);
    };

    document.addEventListener('mousemove', moveCursor);
    animate();

    return () => {
      document.removeEventListener('mousemove', moveCursor);
    };
  }, []);

  return (
    <>
      <div ref={outerCursorRef} className="cursor-outer"></div>
      <div ref={innerCursorRef} className="cursor-inner"></div>
    </>
  );
};

export default Cursor;
