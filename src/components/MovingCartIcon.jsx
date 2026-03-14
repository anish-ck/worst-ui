import React, { useState, useEffect } from 'react';
import { ShoppingCart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const MovingCartIcon = () => {
  const [position, setPosition] = useState({});
  const navigate = useNavigate();

  const handleRandomCartNav = () => {
    // 20% chance to just refresh the page instead of going to cart
    if (Math.random() > 0.8) {
        window.location.reload();
    } else {
        navigate('/cart');
    }
  }

  useEffect(() => {
    const moveCart = () => {
      const positions = [
        { top: '10px', left: '10px' },
        { top: '10px', right: '10px' },
        { bottom: '10px', right: '10px' },
        { top: '50%', left: '50%', transform: 'translate(-50%, -50%)' },
        { bottom: '10px', left: '10px' },
      ];
      setPosition(positions[Math.floor(Math.random() * positions.length)]);
    };

    // Move immediately and then every random interval
    moveCart();
    const interval = setInterval(moveCart, Math.random() * 5000 + 2000); // 2-7s
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="fixed z-[100] cursor-not-allowed transition-all duration-1000 ease-in-out"
      style={{ ...position }}
      title="View Cart (maybe)"
      onClick={handleRandomCartNav}
      onMouseEnter={(e) => {
         // Evade mouse 50% of the time, to be annoying but not impossible
         if (Math.random() > 0.5) {
             e.target.style.top = `${Math.floor(Math.random() * 90)}%`;
             e.target.style.left = `${Math.floor(Math.random() * 90)}%`;
         }
      }}
    >
      <div className="relative animate-bounce-fast">
        <ShoppingCart size={48} className="text-terrible-red bg-terrible-yellow p-2 rounded-full border-4 border-black" />
        <span className="absolute -top-2 -right-2 bg-black text-white text-xs font-bold px-2 py-1 rounded-full pointer-events-none">
          {Math.floor(Math.random() * 99)} {/* Fake item count */}
        </span>
      </div>
    </div>
  );
};

export default MovingCartIcon;
