import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Loader2 } from 'lucide-react';

const RandomLoader = ({ isLoading, message = "Processing...", fullScreen = false }) => {
  const [flavorText, setFlavorText] = useState(message);

  const funnyMessages = [
    "Processing...",
    "Still processing...",
    "Almost done...",
    "Still waiting...",
    "Did you click it right?",
    "Re-calculating the universe...",
    "Loading loading screens...",
    "Please do not close your eyes.",
    "Almost there... maybe...",
  ];

  useEffect(() => {
    if (isLoading) {
      const interval = setInterval(() => {
        setFlavorText(funnyMessages[Math.floor(Math.random() * funnyMessages.length)]);
      }, 2000); // Change text every 2s

      return () => clearInterval(interval);
    }
  }, [isLoading]);

  if (!isLoading) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className={`${fullScreen ? 'fixed inset-0 z-[1000] bg-black/90' : 'w-full h-full p-8'} flex flex-col items-center justify-center font-comic`}
      >
        <motion.div
          animate={{ rotate: 360, scale: [1, 1.5, 0.8, 1] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
        >
          <Loader2 size={100} className="text-terrible-red" strokeWidth={1} />
        </motion.div>
        
        <motion.h3 
          className="text-terrible-yellow text-3xl mt-8 font-black tracking-widest text-center"
          animate={{ x: [-10, 10, -10] }}
          transition={{ repeat: Infinity, duration: 0.2 }} // Vibrating text
        >
          {flavorText}
        </motion.h3>
        
        {/* Fake progress bar that resets */}
        <div className="w-64 h-4 bg-gray-800 mt-8 rounded-full overflow-hidden border-2 border-terrible-blue">
          <motion.div 
            className="h-full bg-terrible-green"
            animate={{ width: ["0%", "90%", "10%", "99%", "0%"] }}
            transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default RandomLoader;
