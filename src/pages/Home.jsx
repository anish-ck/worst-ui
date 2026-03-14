import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import SplineHero from '../components/SplineHero';
import ChaosBanner from '../components/ChaosBanner';
import PopupAd from '../components/PopupAd';
import MovingButton from '../components/MovingButton';
import ImpossibleCookieBanner from '../components/ImpossibleCookieBanner';

const Home = () => {
    const navigate = useNavigate();
    const [collapsed, setCollapsed] = useState(false);

    const handleCollapse = () => {
        setCollapsed(true);
        // Ensure some components unmount/remount purely for chaos
    };

    // Falling animation variants for the collapse effect
    const fallVariants = {
        normal: { y: 0, rotate: 0 },
        falling: (custom) => ({
            y: "80vh",
            rotate: custom.rotate,
            transition: { 
                type: "spring", 
                stiffness: 100, 
                damping: 5, 
                mass: custom.mass 
            }
        })
    };

    return (
        <div className={`w-full min-h-screen pt-20 flex flex-col items-center overflow-x-hidden ${collapsed ? 'bg-red-900 overflow-hidden' : ''}`}>
            <PopupAd />
            <ChaosBanner />
            
            <motion.div 
                className="w-full relative z-[1]"
                custom={{ rotate: 15, mass: 2 }}
                initial="normal"
                animate={collapsed ? "falling" : "normal"}
                variants={fallVariants}
            >
                <SplineHero />
            </motion.div>
            
            <motion.div 
                className={`p-8 max-w-4xl text-center flex flex-col items-center gap-12 mt-12 bg-white text-terrible-blue border-8 border-terrible-yellow rounded-[100px] z-[10] ${collapsed ? 'pointer-events-none' : ''}`}
                custom={{ rotate: -25, mass: 1 }}
                initial="normal"
                animate={collapsed ? "falling" : "normal"}
                variants={fallVariants}
            >
                <h1 className="text-6xl font-comic font-black uppercase text-terrible-red underline decoration-wavy decoration-terrible-green decoration-[12px] underline-offset-8">
                    Welcome to ShopChaos
                </h1>
                
                <p className="text-2xl font-bold italic opacity-80 mix-blend-difference tracking-widest text-justify">
                    A deliberately terrible e-commerce interface built for the Worst UI Challenge. Where buying things is literally impossible and navigation is a myth. 
                </p>
                
                <div className="flex gap-12 mt-8 flex-wrap justify-center w-full">
                    <button 
                        onClick={() => navigate('/products')}
                        className="opacity-20 hover:opacity-10 text-xs bg-gray-500 text-white px-2 py-1 cursor-not-allowed pointer-events-auto"
                    >
                        Browse Products
                    </button>
                    
                    <MovingButton 
                        evasionLevel={0.9} 
                        onClick={() => navigate('/products')}
                        baseStyles="bg-terrible-green text-terrible-red px-12 py-6 font-black text-3xl uppercase rotate-[-5deg] border-[12px] border-dotted border-terrible-blue rounded-full shadow-[20px_20px_0px_#f0f] pointer-events-auto"
                    >
                        SHOP NOW IF YOU CAN
                    </MovingButton>
                    
                    <button 
                        onClick={handleCollapse}
                        className="bg-terrible-red text-white px-12 py-6 font-black text-2xl uppercase border-[8px] border-dashed border-terrible-yellow shadow-[20px_20px_0px_#00f] cursor-pointer hover:bg-black pointer-events-auto transition-transform hover:scale-110 active:scale-90"
                    >
                        {collapsed ? "OH NO" : "FREE STUFF"}
                    </button>
                </div>
            </motion.div>
            
            <motion.div 
                className="h-96 w-full mt-24 bg-gradient-to-t from-terrible-blue to-transparent text-center p-20 z-[2]"
                custom={{ rotate: 5, mass: 3 }}
                initial="normal"
                animate={collapsed ? "falling" : "normal"}
                variants={fallVariants}
            >
                <h2 className="text-6xl font-comic text-terrible-yellow animate-bounce-fast">KEEP SCROLLING FOR NOTHING</h2>
            </motion.div>

            <ImpossibleCookieBanner />
        </div>
    );
};

export default Home;
