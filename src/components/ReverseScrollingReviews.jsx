import React, { useState, useRef, useEffect } from 'react';

const ReverseScrollingReviews = () => {
  const containerRef = useRef(null);
  
  const reviews = [
    { id: 1, user: "AngryCustomer99", text: "I bought this and it immediately caught fire. 5 stars.", rating: 5 },
    { id: 2, user: "ConfusedShopper", text: "Where is the checkout button?? I've been here for 3 days.", rating: 1 },
    { id: 3, user: "Bot_Account_001", text: "VERY GOOD PRODUCT I ENJOY THE COLD IN MY HANDS", rating: 5 },
    { id: 4, user: "NormalPerson", text: "This site is a crime against humanity.", rating: 2 },
    { id: 5, user: "Designer", text: "The color palette makes me want to cry. Good job.", rating: 4 },
    { id: 6, user: "Lost", text: "How did I get here?", rating: 3 },
    { id: 7, user: "QA_Tester", text: "Found 47 bugs in the first 2 minutes. Excellent.", rating: 5 },
  ];

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    // The core chaos logic: listening to the wheel event and negating the scroll direction
    const handleWheel = (e) => {
      e.preventDefault();
      // Scroll the opposite direction of the mouse wheel by a large amount
      el.scrollTop -= (e.deltaY * 3); 
    };

    el.addEventListener('wheel', handleWheel, { passive: false });
    return () => el.removeEventListener('wheel', handleWheel);
  }, []);

  return (
    <div className="w-full max-w-2xl mx-auto my-12 bg-gray-100 border-[12px] border-terrible-blue p-6">
      <h3 className="text-3xl font-black text-center mb-6 text-terrible-red">HONEST REVIEWS</h3>
      <p className="text-center text-xs mb-4 text-gray-500">(Scroll down to go up, scroll up to go down)</p>
      
      {/* 
        This is the container with reverse scroll logic. 
        It has hidden scrollbars to make the reverse effect even more confusing.
      */}
      <div 
        ref={containerRef}
        className="h-[400px] overflow-y-scroll flex flex-col gap-4 p-4 bg-white border-4 border-black hide-scrollbar"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {reviews.map((review) => (
          <div key={review.id} className="bg-yellow-100 p-4 border border-yellow-400 transform -rotate-1">
            <div className="flex justify-between items-center mb-2">
              <span className="font-bold text-lg">{review.user}</span>
              <span className="text-terrible-red">
                {"★".repeat(review.rating)}{"☆".repeat(5 - review.rating)}
              </span>
            </div>
            <p className="font-serif italic text-lg text-gray-800">"{review.text}"</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReverseScrollingReviews;
