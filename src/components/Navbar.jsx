import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  // Sabotage navigation randomly
  const handleRandomNav = (e, intendedPath) => {
    e.preventDefault();
    const paths = ['/', '/products', '/cart', '/checkout'];
    const randomPath = paths[Math.floor(Math.random() * paths.length)];
    // 30% chance to go to the wrong page
    if (Math.random() > 0.7) {
      navigate(randomPath);
    } else {
      navigate(intendedPath);
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-terrible-blue text-terrible-yellow p-4 z-50 flex justify-between items-center border-b-8 border-terrible-red">
      <div className="font-comic font-black text-2xl animate-wiggle cursor-wait" onClick={(e) => handleRandomNav(e, '/')}>
        ShopChaos
      </div>
      
      {/* Mobile menu toggle that is impossible to click reliably */}
      <button 
        className="md:hidden animate-bounce-fast" 
        onClick={() => setMenuOpen(!menuOpen)}
      >
        Menu???
      </button>

      <ul className={`md:flex gap-6 font-comic font-bold ${menuOpen ? 'block' : 'hidden'} md:block absolute md:relative top-full left-0 w-full md:w-auto bg-terrible-blue p-4 md:p-0`}>
        <li><Link to="/" onClick={(e) => handleRandomNav(e, '/')}>Home</Link></li>
        <li><Link to="/products" onClick={(e) => handleRandomNav(e, '/products')}>Products</Link></li>
        <li><Link to="/products" onClick={(e) => handleRandomNav(e, '/products')}>Products Again</Link></li>
        <li><a href="#" className="line-through cursor-not-allowed text-gray-500">Deals</a></li>
        <li><Link to="/products" className="animate-pulse-fast">Real Deals</Link></li>
        <li><Link to="/cart" onClick={(e) => handleRandomNav(e, '/cart')}>Secret Deals</Link></li>
        <li><Link to="/support">Support?</Link></li>
        <li><a href="mailto:nobody@nowhere.com">Support??</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
