import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { products } from '../data/products';
import RandomLoader from '../components/RandomLoader';
import { fakeDelay } from '../utils/fakeDelay';
import ReverseScrollingReviews from '../components/ReverseScrollingReviews';
import EvasiveSizeSelector from '../components/EvasiveSizeSelector';

const ProductDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const load = async () => {
            await fakeDelay(1000, 3000); // Wait randomly
            const foundProduct = products.find(p => p.id === parseInt(id));
            if (foundProduct) {
                setProduct(foundProduct);
            } else {
                // Return to random page to disorient user
                navigate('/products');
            }
            setLoading(false);
        };
        load();
    }, [id, navigate]);

    if (loading) return <RandomLoader isLoading={true} fullScreen={true} message="Extracting pixels..." />;
    if (!product) return null;

    const brokenBuy = (e) => {
        e.preventDefault();
        alert('Payment processor decided you do not need this item right now.');
    };

    const realBuy = (e) => {
        e.preventDefault();
        // Adds to "cart" by navigating there
        navigate('/cart');
    }

    return (
        <div className="pt-24 min-h-screen bg-white flex flex-col items-center pb-[50vh]">
            
            {/* GIANT image taking up the entire screen */}
            <div className="w-[150vw] h-[150vh] overflow-hidden flex items-center justify-center cursor-crosshair">
                <img 
                    src={product.image} 
                    alt="Massive" 
                    className="w-full h-full object-cover blur-sm hover:blur-none transition-all duration-[3000ms]" 
                />
            </div>
            
            <div className="absolute top-[80vh] left-1/2 transform -translate-x-1/2 bg-black/80 text-white p-12 w-11/12 max-w-2xl border-[16px] border-terrible-red rounded-3xl shadow-[0_0_100px_#f00] z-20">
                
                 <h1 className="text-4xl font-comic text-terrible-yellow tracking-widest uppercase text-center mb-4">
                     {product.name}
                 </h1>
                 
                 {/* Intentional horrible text styling */}
                 <p className="text-center italic font-serif text-sm opacity-50 mb-8 transform -skew-x-12">
                     "{product.description}"
                 </p>
                 
                 <EvasiveSizeSelector />

                 <div className="flex flex-col gap-4 w-full mt-4">
                     <button className="bg-terrible-blue text-white py-4 font-bold uppercase transition hover:opacity-0" onClick={brokenBuy}>
                         Buy Later
                     </button>
                     <button className="bg-black text-black py-4 font-bold uppercase hover:bg-white border text-center transition-colors" onClick={brokenBuy}>
                         <div className="opacity-0 hover:opacity-100 mix-blend-difference text-white">Buy Maybe</div>
                     </button>
                     <button className="bg-terrible-red text-terrible-yellow py-4 font-bold uppercase animate-wiggle" onClick={brokenBuy}>
                         Buy Eventually
                     </button>
                     <button className="bg-transparent border-t border-gray-900 border-dashed text-gray-500 py-1 text-xs opacity-30 hover:opacity-100" onClick={realBuy}>
                         proceed to cart with item
                     </button>
                 </div>
                 
                 <div className="absolute -top-10 -right-10 bg-terrible-yellow text-black font-black p-4 rounded-full rotate-45 border-4 border-black text-xs">
                     Stock: {product.stock}
                 </div>
            </div>
            
            <div className="w-full relative z-10 mt-[-20vh] bg-terrible-green/80 flex justify-center py-20 border-t-[20px] border-dashed border-terrible-yellow">
                <ReverseScrollingReviews />
            </div>
        </div>
    );
};

export default ProductDetail;
