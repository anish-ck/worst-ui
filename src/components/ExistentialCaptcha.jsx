import React, { useState } from 'react';

const ExistentialCaptcha = ({ onVerify }) => {
  const [attempts, setAttempts] = useState(0);
  const [selected, setSelected] = useState([]);
  
  const images = [
    { id: 1, type: "dread", color: "bg-gray-800" },
    { id: 2, type: "void", color: "bg-black" },
    { id: 3, type: "abyss", color: "bg-gray-900" },
    { id: 4, type: "despair", color: "bg-terrible-blue" },
    { id: 5, type: "ennui", color: "bg-gray-700" },
    { id: 6, type: "nothingness", color: "bg-stone-900" },
    { id: 7, type: "meaninglessness", color: "bg-zinc-800" },
    { id: 8, type: "hollow", color: "bg-slate-900" },
    { id: 9, type: "futility", color: "bg-neutral-800" }
  ];

  const handleSelect = (id) => {
    setSelected(prev => 
      prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
    );
  };

  const handleVerify = () => {
    if (attempts < +3) {
      alert("Verification failed. Are you sure you understand the weight of your own existence?");
      setSelected([]);
      setAttempts(prev => prev + 1);
    } else {
      alert("Close enough. We all fade eventually anyway.");
      onVerify();
    }
  };

  return (
    <div className="bg-white p-4 border-2 border-gray-400 w-full max-w-sm font-sans text-black">
      <div className="bg-terrible-blue text-white p-4 mb-4">
        <h3 className="text-lg font-bold">Select all squares with</h3>
        <h2 className="text-2xl font-black mb-1 text-terrible-yellow drop-shadow-md pb-2 underline uppercase">crippling existential dread</h2>
        <p className="text-xs">If there are none, click skip (there is no skip button).</p>
      </div>

      <div className="grid grid-cols-3 gap-1 mb-4">
        {images.map((img) => (
          <div 
            key={img.id}
            onClick={() => handleSelect(img.id)}
            className={`aspect-square cursor-pointer transition-all ${img.color} ${selected.includes(img.id) ? 'scale-90 border-4 border-terrible-green opacity-50' : 'hover:opacity-80'}`}
          />
        ))}
      </div>

      <div className="flex justify-between items-center border-t pt-4">
        <div className="flex gap-2 text-xl opacity-50">
          <span className="cursor-not-allowed">↻</span>
          <span className="cursor-not-allowed">🎧</span>
          <span className="cursor-not-allowed">ℹ️</span>
        </div>
        <button 
          type="button"
          onClick={handleVerify}
          className="bg-terrible-blue text-white font-bold py-2 px-6 uppercase text-sm hover:bg-black"
        >
          Verify
        </button>
      </div>
    </div>
  );
};

export default ExistentialCaptcha;
