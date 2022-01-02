import React from 'react';
import { TimelineItem } from './TimelineItem';

export const Timeline: React.FC = () => {
   return (
      <div className="flex flex-col gap-12 w-full items-center py-16 px-24">
         <div className="flex flex-col items-center">
            <h2 className="text-lg uppercase font-normal font-body">Timeline</h2>
            <span className="text-4xl font-bold font-display">What I've Been Up To</span>
         </div>
         <div className="grid grid-flow-row w-full relative">
            <div className="bg-gray-300 absolute top-0 right-1/2 translate-x-1/2 h-full w-[2px] scale-y-105" />
            <TimelineItem />
            <TimelineItem alignEnd />
            <TimelineItem />
            <TimelineItem alignEnd />
            <TimelineItem />
         </div>
         <button>View More</button>
      </div>
   );
};
