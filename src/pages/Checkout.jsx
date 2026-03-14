import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import ExistentialCaptcha from '../components/ExistentialCaptcha';
import DrunkInput from '../components/DrunkInput';

const Checkout = () => {
    const navigate = useNavigate();
    const [popupCount, setPopupCount] = useState(0);
    const requiredPopups = 10;
    const [captchaVerified, setCaptchaVerified] = useState(false);
    
    const [error, setError] = useState('');

    const handlePopupClose = () => {
        setPopupCount(prev => prev + 1);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (!captchaVerified) {
            setError("You must prove your existence first.");
            return;
        }

        // Always throw a confusing error no matter what
        const errors = [
            "Something went wrong.",
            "Invalid something.",
            "Try again later.",
            "Computer says no.",
            "Did you even read the terms of service?",
            "Your pet's name doesn't sound right."
        ];
        
        setError(errors[Math.floor(Math.random() * errors.length)]);
    };

    return (
        <div className="min-h-screen pt-24 pb-32 bg-terrible-blue text-white font-serif flex justify-center items-center">
            
            {/* The 10 Popups before checkout */}
            <AnimatePresence>
                {popupCount < requiredPopups && (
                    <motion.div 
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0 }}
                        className="fixed inset-0 z-50 bg-black/80 flex justify-center items-center backdrop-blur-md"
                    >
                        <div className="bg-terrible-yellow text-black p-12 border-[16px] border-terrible-red rounded-[50px] shadow-2xl max-w-lg text-center font-comic">
                            <h2 className="text-4xl font-black mb-8 underline decoration-wavy">
                                Checkout Gate {popupCount + 1}/{requiredPopups}
                            </h2>
                            <p className="text-xl mb-8">
                                Are you absolutely sure you want to proceed? We just want to make sure you're sure.
                            </p>
                            <button 
                                onClick={handlePopupClose}
                                className="bg-terrible-green text-terrible-blue px-8 py-4 text-2xl font-black rounded-full hover:bg-black hover:text-white"
                            >
                                CONTINUE (maybe)
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="w-full max-w-3xl bg-black p-8 border-4 border-dashed border-terrible-green shadow-[0_0_50px_#0f0] m-4">
                <h1 className="text-6xl font-comic text-terrible-yellow mb-8 tracking-tighter text-center">
                    FINAL STEP
                </h1>

                {error && (
                    <div className="bg-terrible-red text-white p-4 font-black font-comic text-2xl text-center mb-8 animate-pulse-fast border-4 border-white border-dotted">
                        ERROR: {error}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="flex flex-col">
                            <label className="text-terrible-green flex justify-between">
                                Favorite Color: <span className="text-red-500">*</span>
                            </label>
                            <input type="color" required className="w-full h-12 bg-gray-800" />
                        </div>
                        
                        {/* Replaced with DrunkInput components */}
                        <DrunkInput 
                            label="Pet Name:" 
                            required={true} 
                            placeholder="e.g. Sir Fluffington III" 
                            className="bg-gray-800 border-b-2 border-white p-2 outline-none focus:border-terrible-red"
                        />

                        <DrunkInput 
                            label="First School:" 
                            required={true} 
                            className="bg-gray-800 border-b-2 border-white p-2 outline-none focus:bg-terrible-yellow focus:text-black"
                        />

                        <DrunkInput 
                            label="Childhood BFF:" 
                            required={true} 
                            className="bg-gray-800 border-b-2 border-white p-2 outline-none transform rotate-1"
                        />

                        {/* Intentionally awful payment mapping */}
                        <div className="flex flex-col col-span-full">
                            <label className="text-terrible-green">Social Security Number / Credit Card (same thing really):</label>
                            <input type="number" required className="bg-gray-800 border-b-2 border-white p-2 text-2xl tracking-[1em]" />
                        </div>
                    </div>
                    
                    <div className="flex justify-center my-8">
                        {captchaVerified ? (
                            <div className="bg-terrible-green text-black font-black p-4 border-4 border-black text-2xl">
                                EXISTENTIAL DREAD VERIFIED ✅
                            </div>
                        ) : (
                            <ExistentialCaptcha onVerify={() => setCaptchaVerified(true)} />
                        )}
                    </div>

                    <div className="mt-8 flex justify-between items-center bg-terrible-red p-4 border border-terrible-yellow">
                         <div className="flex items-center gap-2">
                             <input type="checkbox" required className="w-6 h-6 cursor-not-allowed" />
                             <label className="text-xs">I agree to give up all worldly possessions.</label>
                         </div>
                         
                         <button type="submit" className="bg-black text-white px-8 py-4 font-black uppercase border-2 border-white hover:bg-white hover:text-black">
                             Pay
                         </button>
                    </div>
                </form>

                <button 
                  onClick={() => navigate('/')}
                  className="mt-8 text-xs underline text-gray-500 w-full text-center hover:text-terrible-red"
                >
                  I give up, take me home
                </button>
            </div>
        </div>
    );
};

export default Checkout;
