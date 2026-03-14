import React, { useState, useEffect } from 'react';

const FocusMode = () => {
  const [isFocusMode, setIsFocusMode] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e) => {
      if (isFocusMode) {
        setMousePosition({ x: e.clientX, y: e.clientY });
      }
    };

    if (isFocusMode) {
      window.addEventListener('mousemove', updateMousePosition);
    }

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, [isFocusMode]);

  return (
    <>
      <button
        onClick={() => setIsFocusMode(!isFocusMode)}
        className="fixed bottom-4 left-4 z-[9998] bg-terrible-blue text-white px-2 py-1 text-xs border border-white opacity-50 hover:opacity-100"
        style={{ cursor: 'crosshair' }}
      >
        {isFocusMode ? "Disable Focus Mode" : "Enable Focus Mode"}
      </button>

      {isFocusMode && (
        <div 
          className="fixed inset-0 z-[9997] pointer-events-none backdrop-blur-xl"
          style={{
            maskImage: `radial-gradient(circle 80px at ${mousePosition.x}px ${mousePosition.y}px, transparent 0%, black 100%)`,
            WebkitMaskImage: `radial-gradient(circle 80px at ${mousePosition.x}px ${mousePosition.y}px, transparent 0%, black 100%)`
          }}
        />
      )}
    </>
  );
};

export default FocusMode;
