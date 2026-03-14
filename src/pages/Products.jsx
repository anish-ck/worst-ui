import React, { useState, useEffect } from 'react';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import RandomLoader from '../components/RandomLoader';

const Products = () => {
    const [displayProducts, setDisplayProducts] = useState(products);
    const [isLoading, setIsLoading] = useState(true);
    const [sortValue, setSortValue] = useState('random');

    useEffect(() => {
        // Obnoxious initial load
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 5000);
        return () => clearTimeout(timer);
    }, []);

    const handleSort = (e) => {
        setSortValue(e.target.value);
        setIsLoading(true);
        
        // Fake delay just for sorting
        setTimeout(() => {
            let sorted = [...products];
            // Intentional bug: sorting is wrong or randomized
            if (e.target.value === 'best' || e.target.value === 'worst' || e.target.value === 'better') {
               sorted = sorted.sort(() => Math.random() - 0.5);
            } else if (e.target.value === 'surprise') {
               // Hide products entirely
               sorted = [];
            }
            setDisplayProducts(sorted);
            setIsLoading(false);
        }, 3000);
    };

    // Filters reset on scroll - absolute chaos
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 200 && sortValue !== 'random' && !isLoading) {
                setSortValue('random');
                setDisplayProducts(products); // Reset secretly
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [sortValue, isLoading]);

    // Shuffling grid every 10 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            if (displayProducts.length > 1) {
                setDisplayProducts(prev => [...prev].sort(() => Math.random() - 0.5));
            }
        }, 10000);
        return () => clearInterval(interval);
    }, [displayProducts]);

    const handleReverseLoad = () => {
        if (displayProducts.length > 0) {
            // Remove one random product
            const newProducts = [...displayProducts];
            const randomIndex = Math.floor(Math.random() * newProducts.length);
            newProducts.splice(randomIndex, 1);
            setDisplayProducts(newProducts);
        }
    };

    if (isLoading) {
        return <RandomLoader isLoading={true} fullScreen={true} message="Sorting by the stars..." />;
    }

    return (
        <div className="pt-24 min-h-screen bg-gray-900 flex flex-col items-center">
            
            <div className="w-full bg-terrible-red p-4 flex justify-between items-center sticky top-24 z-40 border-8 border-terrible-yellow shadow-2xl">
                 <h1 className="text-4xl text-white font-black animate-pulse-fast ml-4">
                     OUR STUFF
                 </h1>
                 
                 <div className="flex bg-white text-black p-2 mr-4 border-2 border-dashed border-black">
                     <label className="mr-2 font-bold cursor-help">Sort by:</label>
                     <select 
                         value={sortValue} 
                         onChange={handleSort}
                         className="bg-transparent font-comic cursor-not-allowed outline-none"
                     >
                         <option value="random">Random</option>
                         <option value="best">Best</option>
                         <option value="better">Better</option>
                         <option value="worst">Worst</option>
                         <option value="surprise">Surprise</option>
                     </select>
                 </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 p-8 w-full">
                {displayProducts.length > 0 ? (
                    displayProducts.map(product => (
                       <ProductCard key={product.id} product={product} /> 
                    ))
                ) : (
                    <div className="col-span-full h-96 flex items-center justify-center text-5xl font-comic text-white">
                        SURPRISE! EVERYTHING IS GONE!
                    </div>
                )}
            </div>

            {displayProducts.length > 0 && (
                <button 
                    onClick={handleReverseLoad}
                    className="my-12 px-12 py-6 bg-terrible-blue text-terrible-yellow font-black text-3xl border-8 border-terrible-red hover:bg-black uppercase shadow-[10px_10px_0px_#f00]"
                >
                    Load More Items...
                </button>
            )}

            {/* Deliberate dark pattern footer */}
            <div className="w-full p-20 text-center text-[8px] text-gray-800 bg-black uppercase">
                By viewing this page you agree to surrender your soul to ShopChaos Inc.
            </div>
        </div>
    );
};

export default Products;
