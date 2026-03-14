import React, { useState } from 'react';

const DrunkInput = ({ label, required, placeholder, className }) => {
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    let input = e.target.value;
    
    // 30% chance to mess up the input when typing
    if (input.length > value.length && Math.random() < 0.3) {
      const lastChar = input.slice(-1);
      
      // Randomly inject a typo (adjacent keys usually)
      const typos = {
        'a': 's', 's': 'd', 'd': 'f', 'e': 'r', 'r': 't',
        'o': 'p', 'i': 'o', 'l': 'k', 'm': 'n'
      };
      
      const lowerChar = lastChar.toLowerCase();
      
      if (typos[lowerChar]) {
        // Swap character
        input = input.slice(0, -1) + typos[lowerChar];
      } else if (Math.random() < 0.5) {
        // Double character
        input = input.slice(0, -1) + lastChar + lastChar;
      }
    }
    
    // 20% chance to randomly change capitalization
    if (Math.random() < 0.2 && input.length > 0) {
       const charArray = input.split('');
       const randIndex = Math.floor(Math.random() * charArray.length);
       if (charArray[randIndex] === charArray[randIndex].toUpperCase()) {
         charArray[randIndex] = charArray[randIndex].toLowerCase();
       } else {
         charArray[randIndex] = charArray[randIndex].toUpperCase();
       }
       input = charArray.join('');
    }

    setValue(input);
  };

  return (
    <div className="flex flex-col">
      <label className="text-terrible-green flex justify-between">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input 
        type="text" 
        required={required}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        className={className || "bg-gray-800 border-b-2 border-white p-2 outline-none focus:border-terrible-red"} 
      />
    </div>
  );
};

export default DrunkInput;
