import React from 'react';
import { motion } from 'framer-motion';

const ChaosBanner = () => {
  const banners = [
    { text: "MEGA SALE NOW!", color: "bg-terrible-red text-terrible-yellow" },
    { text: "SUPER SALE TODAY!", color: "bg-terrible-yellow text-terrible-blue" },
    { text: "FLASH SALE ENDING SOON!", color: "bg-terrible-green text-terrible-red" },
    { text: "ULTRA SALE DONT MISS OUT!", color: "bg-terrible-blue text-white" },
  ];

  return (
    <div className="flex flex-col w-full overflow-hidden mt-20 relative z-10">
      {banners.map((banner, index) => (
        <motion.div
          key={index}
          className={`w-full py-4 text-center font-black text-4xl uppercase tracking-[0.5em] ${banner.color} border-y-8 border-dotted border-black`}
          animate={{
            x: [0, index % 2 === 0 ? 1000 : -1000, 0], // Move horizontally extremely fast
          }}
          transition={{
            repeat: Infinity,
            duration: Math.random() * 2 + 1, // 1-3 seconds
            ease: "linear"
          }}
        >
          {banner.text}
        </motion.div>
      ))}
    </div>
  );
};

export default ChaosBanner;
