import React, { useState } from 'react';
import MovingButton from './MovingButton';

const ImpossibleCookieBanner = () => {
  const [isFormatting, setIsFormatting] = useState(false);
  const [formatProgress, setFormatProgress] = useState(0);

  const handleDecline = () => {
    setIsFormatting(true);
    let progress = 0;
    const interval = setInterval(() => {
      progress += Math.random() * 15;
      if (progress >= 100) {
        progress = 100;
        clearInterval(interval);
      }
      setFormatProgress(progress);
    }, 200);
  };

  if (isFormatting) {
    return (
      <div className="fixed bottom-0 left-0 w-full bg-red-900 border-t-8 border-red-500 p-8 z-[99999] text-white font-mono">
        <h3 className="text-3xl font-bold mb-4 blink">CRITICAL ERROR: FORMATTING C: DRIVE</h3>
        <p className="text-xl mb-4 text-gray-300">You declined our mandatory cookies. Purging system files in retaliation...</p>
        
        <div className="w-full bg-black h-12 border-4 border-red-500 relative overflow-hidden">
          <div 
            className="h-full bg-red-500 transition-all duration-200"
            style={{ width: `${formatProgress}%` }}
          />
          <div className="absolute inset-0 flex items-center justify-center font-bold text-2xl mix-blend-difference">
            {Math.floor(formatProgress)}%
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed bottom-0 left-0 w-full bg-yellow-200 border-t-8 border-dashed border-red-500 p-6 z-[99999] flex flex-col md:flex-row items-center justify-between gap-6 shadow-[0_-10px_20px_rgba(0,0,0,0.5)]">
      <div className="text-black font-bold text-xl md:w-2/3">
        <h3 className="text-3xl mb-2 text-red-600 uppercase underline">We value your privacy (not really)</h3>
        <p>
          By continuing to use ShopChaos, you agree to let us sell your browsing history, DNA sequence, and future firstborn child to the highest bidder. Do you accept these extremely unreasonable terms?
        </p>
      </div>

      <div className="flex gap-4 w-full md:w-1/3 relative h-24 items-center justify-center">
        {/* Accept button runs away */}
        <div className="relative w-48 h-16">
          <div className="absolute inset-0 z-10">
            <MovingButton 
              evasionLevel={0.99} // nearly impossible to click
              onClick={() => alert('Impossible!')}
              baseStyles="bg-green-500 text-white w-full h-full font-black text-2xl uppercase border-4 border-black"
            >
              ACCEPT ALL
            </MovingButton>
          </div>
        </div>

        {/* Decline triggers fake formatting */}
        <button 
          onClick={handleDecline}
          className="bg-gray-400 text-gray-800 px-6 py-4 font-bold text-lg hover:bg-black hover:text-red-500 transition-all cursor-pointer whitespace-nowrap"
        >
          Decline
        </button>
      </div>
    </div>
  );
};

export default ImpossibleCookieBanner;
