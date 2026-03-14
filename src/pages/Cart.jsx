import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { products } from '../data/products';
import MovingCartIcon from '../components/MovingCartIcon';
import MovingButton from '../components/MovingButton';

const Cart = () => {
    // Start with some random items in cart just to be annoying
    const [cartItems, setCartItems] = useState([
        { ...products[0], quantity: 1 },
        { ...products[3], quantity: 5 }
    ]);
    const [inflation, setInflation] = useState(0);
    const navigate = useNavigate();

    // Inflation timer: adds $0.01 every second
    useEffect(() => {
        const timer = setInterval(() => {
            setInflation(prev => prev + 0.01);
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    const changeQuantity = (index, amount) => {
        const newCart = [...cartItems];
        // Intentional bug: buttons are reversed. Plus decreases, Minus increases
        newCart[index].quantity -= amount; 
        
        if (newCart[index].quantity < 0) newCart[index].quantity = 0;
        setCartItems(newCart);
    };

    const handleDelete = (index) => {
        // "Save Item" actually deletes it
        const newCart = cartItems.filter((_, i) => i !== index);
        setCartItems(newCart);
    };

    const handleClearCart = () => {
        setCartItems([]);
    };

    const baseTotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const inflatedTotal = baseTotal + inflation;

    return (
        <div className="min-h-screen pt-24 bg-terrible-green font-comic text-terrible-blue px-4 pb-32">
            <MovingCartIcon />
            
            <div className="max-w-4xl mx-auto bg-white p-8 border-8 border-terrible-red border-dashed">
                <h1 className="text-5xl font-black text-center mb-12 uppercase tracking-[1rem]">Your "Cart"</h1>
                
                {cartItems.length === 0 ? (
                    <div className="text-center text-3xl font-bold animate-bounce-fast">
                        Wow, you deleted everything. Navigate away to get it back.
                    </div>
                ) : (
                    <div className="flex flex-col gap-8">
                        {cartItems.map((item, index) => (
                            <div key={index} className="flex flex-col md:flex-row items-center border-[12px] border-terrible-yellow p-4 gap-6 hover:bg-black hover:text-white transition-colors duration-1000">
                                <img src={item.image} alt={item.name} className="w-32 h-32 object-cover rounded-full" />
                                
                                <div className="flex-1 text-center md:text-left">
                                    <h3 className="text-2xl font-bold">{item.name}</h3>
                                    <p className="text-xl">${item.price}</p>
                                </div>
                                
                                <div className="flex items-center gap-4 bg-terrible-blue p-2">
                                    {/* Reversed functionality */}
                                    <button 
                                        className="w-12 h-12 bg-white text-black font-black text-2xl hover:bg-terrible-red"
                                        onClick={() => changeQuantity(index, 1)}
                                    >
                                        +
                                    </button>
                                    <span className="text-3xl text-white font-bold min-w-[3ch] text-center">
                                        {item.quantity}
                                    </span>
                                    <button 
                                        className="w-12 h-12 bg-white text-black font-black text-2xl hover:bg-terrible-red"
                                        onClick={() => changeQuantity(index, -1)}
                                    >
                                        -
                                    </button>
                                </div>

                                <button 
                                    className="bg-terrible-red text-white px-6 py-4 border-4 border-black font-bold uppercase hover:opacity-10"
                                    onClick={() => handleDelete(index)}
                                >
                                    Save Item
                                </button>
                            </div>
                        ))}
                    </div>
                )}

                {cartItems.length > 0 && (
                    <div className="mt-16 p-8 bg-black text-terrible-yellow text-right border-l-[32px] border-terrible-blue relative">
                        <div className="absolute top-2 left-2 text-[10px] text-terrible-red blink uppercase font-mono">
                            Live Inflation Adjustment Active
                        </div>
                        <h2 className="text-4xl font-black mb-12">
                            Total: ${inflatedTotal.toFixed(2)} + $9,999 Shipping
                        </h2>
                        
                        <div className="flex flex-col items-center gap-6">
                            {/* Inverted Priorities: Clear Cart looks like Checkout */}
                            <button 
                                onClick={handleClearCart}
                                className="w-full bg-terrible-green text-black px-12 py-8 text-5xl font-black rounded-[50px] shadow-[0_0_50px_#0f0] animate-pulse uppercase border-[12px] border-black hover:bg-white"
                            >
                                PROCEED WITH PAYMENT
                            </button>
                            
                            {/* Actual Checkout is hidden/tiny */}
                            <button 
                                onClick={() => navigate('/checkout')}
                                className="text-[10px] text-gray-700 underline opacity-30 hover:opacity-100 hover:text-white border-none p-0 cursor-help"
                                style={{ background: 'transparent' }}
                            >
                                empty entire cart and start over (jk this is checkout)
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Cart;
