import React from 'react';
import { GithubLink } from './links/GithubLink';
import { LinkedInLink } from './links/LinkedInLink';
import { TwitterLink } from './links/TwitterLink';

export const Banner: React.FC = () => {
   return (
      <header
         id="banner"
         className="w-full dark:bg-dark-gray px-8 sm:px-16 py-24 h-screen max-h-[64rem] text-dark-gray dark:text-gray-100 transition-colors duration-300"
      >
         <div className="h-full max-w-[64rem] mx-auto flex flex-col justify-center gap-12 ">
            <div className="flex flex-col gap-4">
               <span className="text-lg font-body uppercase font-normal">Hi, my name is</span>
               <h1 className="text-[2.75rem] leading-[3rem] sm:text-6xl md:text-7xl uppercase font-bold font-display">Ben Lammers</h1>
               <h2 className="text-lg font-body uppercase font-normal">Front End Developer</h2>
            </div>
            <div className="flex flex-row gap-4">
               <TwitterLink />
               <GithubLink />
               <LinkedInLink />
            </div>
         </div>
      </header>
   );
};
