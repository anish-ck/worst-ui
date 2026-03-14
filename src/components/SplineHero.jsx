import React from 'react';
import { motion } from 'framer-motion';

const SplineHero = () => {
  return (
    <div className="w-full h-[600px] relative pointer-events-none border-b-8 border-terrible-blue overflow-hidden bg-black flex items-center justify-center">
       {/* Awful z-indexing and huge text */}
       <h1 className="absolute z-10 text-9xl font-black text-terrible-red opacity-50 mix-blend-color-burn select-none rotate-12">
           BUY STUFF
       </h1>

      {/* Chaotic animated background replacing heavy Spline 3D */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full mix-blend-screen"
            style={{
              width: Math.random() * 300 + 50,
              height: Math.random() * 300 + 50,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff'][i % 6],
              opacity: 0.4,
            }}
            animate={{
              x: [0, Math.random() * 200 - 100, 0],
              y: [0, Math.random() * 200 - 100, 0],
              scale: [1, Math.random() + 0.5, 1],
              rotate: [0, 360],
            }}
            transition={{
              duration: Math.random() * 5 + 3,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Giant spinning text */}
      <motion.div
        className="absolute z-20 text-[200px] font-black text-terrible-yellow select-none opacity-30"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        💀
      </motion.div>

      {/* Obstructs the view */}
      <div className="absolute top-0 right-0 w-1/4 h-full bg-terrible-yellow mix-blend-multiply opacity-50"></div>
    </div>
  );
}

export default SplineHero;
