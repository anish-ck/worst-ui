import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const OffsetCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateMousePosition);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  return (
    <motion.div
      className="fixed pointer-events-none z-[9999] w-8 h-8 rounded-full border-4 border-terrible-red bg-terrible-yellow mix-blend-difference"
      animate={{
        x: mousePosition.x + 45, // intentional offset
        y: mousePosition.y - 30, // intentional offset
      }}
      transition={{
        type: 'spring',
        stiffness: 400,
        damping: 25,
        mass: 0.5
      }}
      style={{
        left: 0,
        top: 0
      }}
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-1 bg-black rounded-full" />
    </motion.div>
  );
};

export default OffsetCursor;
