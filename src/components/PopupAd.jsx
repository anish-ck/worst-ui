import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const PopupAd = () => {
  const [popups, setPopups] = useState([]);
  
  const messages = [
    "Subscribe to Newsletter NOW!",
    "Limited Time Deal! 0.01% OFF!",
    "Are you sure you want to continue?",
    "Confirm confirmation of your existence.",
    "Your cart is feeling lonely.",
    "Winner! You are the 1,000,000th visitor!",
  ];

  useEffect(() => {
    // Randomly spawn popups
    const interval = setInterval(() => {
      if (Math.random() > 0.4 && popups.length < 5) { // 60% chance to spawn if under 5
        setPopups(prev => [
          ...prev, 
          {
            id: Date.now(),
            text: messages[Math.floor(Math.random() * messages.length)],
            top: `${Math.floor(Math.random() * 80) + 10}%`,
            left: `${Math.floor(Math.random() * 80) + 10}%`
          }
        ]);
      }
    }, 4000); // Check every 4 seconds

    return () => clearInterval(interval);
  }, [popups, messages]);

  const removePopup = (id, e) => {
    e.stopPropagation();
    // 20% chance the 'close' button actually spawns another popup
    if (Math.random() > 0.8) {
       setPopups(prev => [
          ...prev, 
          {
            id: Date.now() + 1,
            text: "Nice try! You can't close this.",
            top: `${Math.floor(Math.random() * 80) + 10}%`,
            left: `${Math.floor(Math.random() * 80) + 10}%`
          }
        ]);
    } else {
      setPopups(prev => prev.filter(p => p.id !== id));
    }
  };

  return (
    <AnimatePresence>
      {popups.map(popup => (
        <motion.div
          key={popup.id}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, rotation: 180, opacity: 0 }}
          style={{ top: popup.top, left: popup.left }}
          className="fixed z-[9999] bg-terrible-red text-white p-6 border-8 border-terrible-yellow shadow-2xl flex flex-col items-center justify-center font-comic"
        >
          {/* Fake close button that is actually just an image, and the real one is tiny */}
          <button 
            onClick={(e) => removePopup(popup.id, e)}
            className="absolute top-1 right-1 text-xs text-terrible-blue opacity-50 hover:opacity-100"
          >
            x
          </button>
          
          <h2 className="text-xl font-bold mb-4 animate-pulse-fast text-center">
            {popup.text}
          </h2>
          
          <div className="flex gap-4">
            <button className="bg-terrible-green text-black px-4 py-2 animate-wiggle">
              Yes!
            </button>
            <button className="bg-terrible-blue text-white px-4 py-2 cursor-wait">
              Double Yes!
            </button>
          </div>
          
          <div onClick={() => window.open('https://en.wikipedia.org/wiki/Dark_pattern', '_blank')} className="absolute -top-4 -left-4 bg-black rounded-full p-2 cursor-pointer text-white z-50">
             <X size={24} />
          </div>
        </motion.div>
      ))}
    </AnimatePresence>
  );
};

export default PopupAd;
