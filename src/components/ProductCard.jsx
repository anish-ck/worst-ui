import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const [showPrice, setShowPrice] = useState(false);
  const [hoverCount, setHoverCount] = useState(0);
  const navigate = useNavigate();

  const handleMouseEnter = () => {
    setHoverCount(prev => prev + 1);
    // Price only shows on the FIRST hover. On subsequent hovers, it hides again to confuse them.
    if (hoverCount === 0) {
      setShowPrice(true);
    } else {
      setShowPrice(false);
    }
  };

  const handleImageClick = () => {
      // 50% chance clicking image goes to a random product instead
      if (Math.random() > 0.5) {
          navigate(`/product/${Math.floor(Math.random() * 6) + 1}`);
      } else {
          navigate(`/product/${product.id}`);
      }
  }

  return (
    <div 
      className="border-8 border-terrible-blue p-2 m-4 bg-terrible-yellow text-terrible-red flex flex-col items-center max-w-[400px] hover:rotate-2 transition-transform cursor-help"
      onMouseEnter={handleMouseEnter}
    >
      <div 
        className="w-full h-96 bg-gray-200 overflow-hidden cursor-pointer"
        onClick={handleImageClick}
      >
        <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-full object-cover hover:scale-150 transition-transform duration-1000" 
        />
      </div>
      
      <div className="p-4 w-full">
        <h2 className="text-2xl font-black font-comic mb-2 underline decoration-wavy decoration-terrible-green">{product.name}</h2>
        
        {/* Intentionally terrible spacing and alignment */}
        <div className="mt-8 mb-12 flex justify-between items-end">
            <span className="text-xs">Rating: {product.rating} stars</span>
            
            <div className="h-10 flex items-center">
                {showPrice ? (
                    <span className="text-4xl font-bold bg-black text-white p-1 animate-pulse-fast tracking-tighter">
                        ${product.price}
                    </span>
                ) : (
                    <span className="text-sm italic text-terrible-blue">Hover to reveal price</span>
                )}
            </div>
        </div>

        <p className="text-sm leading-tight text-justify line-clamp-2 hover:line-clamp-none">
            {product.description}
        </p>
        
        {/* Misleading buttons */}
        <div className="mt-4 flex flex-col gap-2">
            <button 
                className="bg-transparent border-2 border-terrible-green text-terrible-green hover:bg-terrible-red hover:text-white"
                onClick={() => navigate(`/product/${product.id}`)}
            >
                Add To Cartesian Coordinate System
            </button>
            <button 
                className="bg-black text-black hover:text-white"
                onClick={() => alert("Just kidding, this button doesn't work.")}
            >
                Real Buy Button
            </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
