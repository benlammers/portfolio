import React from 'react';
import { TimelineIcon } from './TimelineIcon';

interface Props {
   alignEnd?: boolean;
}

export const TimelineItem: React.FC<Props> = ({ alignEnd }) => {
   return (
      <div className="grid grid-cols-[1fr_max-content_1fr] gap-4 items-center z-10">
         <div className={`flex flex-col bg-gray-100 shadow-md p-4 pr-8 mr-2 ${alignEnd ? 'col-start-3' : 'col-start-1'} row-start-1`}>
            <span className="text-xl font-bold font-display">Software Design, BComp</span>
            <p className="text-base font-normal font-body">
               I am an <span className="text-amber-500 underline decoration-double underline-offset-2">avid podcast listener</span> where I stay up to date with
               new and upcoming technologies.
            </p>
            <button className="w-max self-end mt-2 text-base underline font-bold font-body">View Degree</button>
         </div>
         <div className="flex items-center justify-center bg-gray-100 rounded-full shadow-md h-[48px] w-[48px] col-start-2 row-start-1">
            <TimelineIcon />
         </div>
         <div className={`flex flex-col items-center w-min ${alignEnd ? 'col-start-1 justify-self-end' : 'col-start-3 justify-self-start'} row-start-1`}>
            <span className="font-body text-sm">June</span>
            <span className="font-body text-xl">2020</span>
         </div>
      </div>
   );
};
