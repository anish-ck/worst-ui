import React, { useState } from 'react';
import { motion } from 'framer-motion';

const MovingButton = ({ 
  children, 
  onClick, 
  className = "", 
  evasionLevel = 0.5, // 0 to 1, how often it evades
  baseStyles = "bg-terrible-blue text-white px-8 py-4 font-bold text-xl uppercase tracking-widest border-4 border-dashed border-red-500"
}) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleHover = () => {
    if (Math.random() < evasionLevel) {
      const newX = (Math.random() * 200) - 100; // -100px to +100px jump
      const newY = (Math.random() * 200) - 100;
      setPosition({ x: newX, y: newY });
    }
  };

  const handleClick = (e) => {
    // 30% chance to do nothing on click even if you catch it
    if (Math.random() > 0.3 && onClick) {
      onClick(e);
    } else {
      e.preventDefault();
      alert("Oops! The button slipped from your click. Try again.");
    }
  };

  return (
    <motion.button
      animate={{ 
        x: position.x, 
        y: position.y,
        scale: [1, 1.1, 0.9, 1], // Pulsing effect
      }}
      transition={{ 
        type: 'spring', 
        stiffness: 300, 
        damping: 10,
        scale: { repeat: Infinity, duration: 0.5 } 
      }}
      onMouseEnter={handleHover}
      onClick={handleClick}
      className={`${baseStyles} ${className} cursor-crosshair`}
      whileTap={{ scale: 0.5, rotate: 180 }}
    >
      {children}
    </motion.button>
  );
};

export default MovingButton;
