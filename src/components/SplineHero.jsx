import React from 'react';
import Spline from '@splinetool/react-spline';

const SplineHero = () => {
  return (
    <div className="w-full h-[600px] relative pointer-events-none border-b-8 border-terrible-blue overflow-hidden bg-black flex items-center justify-center">
       {/* Some awful z-indexing and huge text OVER the spline */}
       <h1 className="absolute z-10 text-9xl font-black text-terrible-red opacity-50 mix-blend-color-burn select-none rotate-12">
           BUY STUFF
       </h1>

      {/* Actual spline scene - using a generic public spline string as fallback */}
      <Spline scene="https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode" />
      
      {/* Obstructs the view */}
      <div className="absolute top-0 right-0 w-1/4 h-full bg-terrible-yellow mix-blend-multiply opacity-50"></div>
    </div>
  );
}

export default SplineHero;
