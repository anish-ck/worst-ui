import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import OffsetCursor from './components/OffsetCursor';
import FocusMode from './components/FocusMode';

function App() {
  return (
    <Router>
      <div className="font-comic selection:bg-terrible-red selection:text-terrible-yellow w-full min-h-screen">
        <OffsetCursor />
        <FocusMode />
        <Navbar />
        
        {/* Intentionally misaligned main content container */}
        <main className="pl-2 pt-[1px] overflow-hidden relative">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/product/:id" element={<ProductDetail />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/checkout" element={<Checkout />} />
                {/* Fallback to something confusing */}
                <Route path="*" element={<Home />} />
            </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
