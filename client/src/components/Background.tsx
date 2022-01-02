import React from 'react';

export const Background: React.FC = () => {
   return (
      <div className="absolute top-0 right-1/2 translate-x-1/2 w-full max-w-[64rem] aspect-square -z-10 overflow-hidden">
         {/*<div
            className="animate-fly-from-below absolute -bottom-[10%] -right-12 h-full w-[110px] translate-x-[-220px] translate-y-full -rotate-[28deg] bg-gray-200 shadow-lg"
            style={{ clipPath: 'polygon(0 0, 0 100%, 100% 100%, 100% 80px)' }}
         />
         <div
            className="animate-fly-from-above absolute -top-[10%] right-96 h-2/3 w-[100px] -translate-x-[-220px] -translate-y-full -rotate-[28deg] bg-gray-50 shadow-lg"
            style={{ clipPath: 'polygon(0 0, 0 100%, 100% calc(100% - 80px), 100% 0)' }}
         /> */}
         <div
            className="animate-fly-from-above-2 absolute -top-[10%] right-[32rem] h-full w-[10%] -translate-y-full bg-gray-200 shadow-lg"
            style={{ clipPath: 'polygon(0 0, 0 100%, 100% calc(100% - 10%), 100% 0)' }}
         />
         <div
            className="animate-fly-from-below-1 absolute -bottom-[10%] right-24 h-3/4 w-[12%] translate-y-full bg-amber-50 shadow-lg"
            style={{ clipPath: 'polygon(0 0, 0 100%, 100% 100%, 100% 80px)' }}
         />
         <div
            className="animate-fly-from-above-1 absolute -top-[10%] right-56 h-1/2 w-[14%] -translate-y-full bg-amber-400 shadow-lg"
            style={{ clipPath: 'polygon(0 0, 0 calc(100% - 14%), 100% 100%, 100% 0)' }}
         />
      </div>
   );
};
