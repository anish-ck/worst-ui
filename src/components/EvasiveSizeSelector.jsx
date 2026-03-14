import React, { useState } from 'react';
import MovingButton from './MovingButton';

const EvasiveSizeSelector = () => {
  const [selectedSize, setSelectedSize] = useState(null);
  const sizes = ["XS", "S", "M", "L", "XL", "XXL", "WTF"];

  return (
    <div className="w-full my-8 p-6 bg-terrible-red border-8 border-dashed border-terrible-yellow text-white text-center shadow-[15px_15px_0px_#000]">
      <h3 className="text-2xl font-black uppercase mb-6 flex justify-center gap-2">
        <span className="animate-bounce">S</span>
        <span className="animate-bounce delay-75">I</span>
        <span className="animate-bounce delay-150">Z</span>
        <span className="animate-bounce delay-200">E</span>
      </h3>
      
      <div className="flex flex-wrap justify-center gap-4 relative min-h-[100px] items-center">
        {sizes.map((size) => (
          <MovingButton
            key={size}
            evasionLevel={0.8} // Very evasive
            onClick={() => setSelectedSize(size)}
            baseStyles={`w-16 h-16 rounded-full font-black text-xl border-4 transition-colors ${
              selectedSize === size 
                ? 'bg-terrible-green text-black border-black scale-125' 
                : 'bg-black text-terrible-yellow border-white hover:bg-white hover:text-black'
            }`}
          >
            {size}
          </MovingButton>
        ))}
      </div>
      
      <p className="mt-6 font-bold">
        Selected: {selectedSize ? <span className="text-3xl bg-black px-2">{selectedSize}</span> : "Pick one if you can"}
      </p>
    </div>
  );
};

export default EvasiveSizeSelector;
