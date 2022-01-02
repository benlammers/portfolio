import React from 'react';
import { Logo } from './Logo';

interface Props {
   alignEnd?: boolean;
}

export const SideProject: React.FC<Props> = ({ alignEnd }) => {
   return (
      <div className={`w-full grid relative ${alignEnd ? 'justify-items-end' : 'justify-items-start'}`}>
         <div className={`w-1/3 bg-amber-200 h-full shadow-lg absolute top-0 ${alignEnd ? 'left-0' : 'right-0'}`}></div>
         <div className="grid grid-cols-[1fr_max-content] shadow-lg gap-8 w-[70%] my-6 bg-white h-[260px] z-10 p-9">
            <div className="grid grid-rows-[max-content_1fr_max-content] gap-4">
               <div className="flex flex-col">
                  <h3 className="font-body text-lg font-bold uppercase">TS Engine</h3>
                  <span className="text-3xl font-bold font-display capitalize tracking-tighter">2D Game Engine</span>
               </div>
               <div className="flex flex-col gap-2">
                  <p className="text-lg font-normal font-body">
                     I was introduced to web development by my brother and have been taking in everything I can since. Exploring the web has been intriguing.
                  </p>
               </div>
               <div className="flex justify-between">
                  <button>View Project</button>
               </div>
            </div>
            <div className="flex flex-col gap-4">
               <Logo />
               <Logo />
               <Logo />
               <Logo />
            </div>
         </div>
      </div>
   );
};
