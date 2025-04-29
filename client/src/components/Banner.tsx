import React from 'react';
import { DarkToggle } from './DarkToggle';
import { GithubLink } from './links/GithubLink';
import { LinkedInLink } from './links/LinkedInLink';
import { TwitterLink } from './links/TwitterLink';
import { Name } from './Name';

export const Banner: React.FC = () => {
   return (
      <header
         id="banner"
         className="w-full dark:bg-dark-gray px-8 sm:px-16 h-screen max-h-[64rem] text-dark-gray dark:text-gray-100 transition-colors duration-300"
      >
         <div className="h-full max-w-[64rem] mx-auto flex flex-col justify-center relative">
            <div className="absolute top-6 lg:top-8 right-0 fade-down [animation-delay:4800ms]">
               <DarkToggle />
            </div>
            <div className="flex flex-col justify-center gap-12">
               <div className="flex flex-col gap-4">
                  <span className="text-lg font-body uppercase font-normal fade-down [animation-delay:4800ms]">Hi, my name is</span>
                  <h1 className="w-full">
                     <span className="visually-hidden">Ben Lammers</span>
                     <Name className="min-w-full xs:min-w-[24rem] md:min-w-[32rem] lg:min-w-[40rem] fill-transparent animate-name [animation-delay:3800ms]" />
                  </h1>
                  <h2 className="text-lg font-body uppercase font-normal fade-up [animation-delay:4800ms]">Full Stack Developer</h2>
               </div>
               <div className="flex flex-row gap-4 fade-up [animation-delay:4800ms]">
                  <GithubLink />
                  <LinkedInLink />
               </div>
            </div>
         </div>
      </header>
   );
};
