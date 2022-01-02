import React from 'react';
import { Logo } from './Logo';

interface Props {
   alignEnd?: boolean;
}

export const HighlightedProject: React.FC<Props> = ({ alignEnd }) => {
   return (
      <div className={`w-full grid relative ${alignEnd ? 'justify-items-end' : 'justify-items-start'}`}>
         <div className={`w-1/2 bg-amber-200 h-full shadow-lg absolute top-0 ${alignEnd ? 'left-0' : 'right-0'}`}></div>
         <div className="grid grid-rows-[max-content_1fr_max-content] shadow-lg gap-4 w-2/3 my-10 bg-white h-[420px] z-10 p-9 pr-16">
            <div className="flex flex-col">
               <h3 className="font-body text-lg font-bold uppercase text-amber-400">Showdown</h3>
               <span className="text-3xl font-bold font-display capitalize tracking-tighter">What I'm currently working on</span>
               <span className="flex items-center gap-2 font-body text-lg uppercase">
                  Designer <span className="h-[4px] w-[4px] rounded-full bg-black"></span> Front End Developer
               </span>
            </div>
            <div className="flex flex-col gap-2">
               <p className="text-lg font-normal font-body">
                  I was introduced to web development by my brother and have been taking in everything I can since. Exploring the web has been intriguing.
               </p>
               <p className="text-lg font-normal font-body">
                  I am an <span className="text-amber-500 underline decoration-double underline-offset-2">avid podcast listener</span> where I stay up to date
                  with new and upcoming technologies. I am delighted when trying out tools such as GraphQL Codegen.
               </p>
            </div>
            <div className="flex justify-between">
               <button>View Project</button>
               <div className="flex gap-4">
                  <Logo />
                  <Logo />
                  <Logo />
                  <Logo />
               </div>
            </div>
         </div>
      </div>
   );
};
