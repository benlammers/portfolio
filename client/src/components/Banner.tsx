import React from 'react';
import { GithubLink } from './links/GithubLink';
import { LinkedInLink } from './links/LinkedInLink';
import { TwitterLink } from './links/TwitterLink';

export const Banner: React.FC = () => {
   return (
      <div className="flex flex-col justify-center gap-12 h-screen pl-24 max-h-[64rem]">
         <div className="flex flex-col gap-4">
            <span className="text-lg font-body uppercase font-normal">Hi, my name is</span>
            <h1 className="text-7xl uppercase font-bold font-display">Ben Lammers</h1>
            <span className="text-lg font-body uppercase font-normal">Front End Developer</span>
         </div>
         <div className="flex flex-row gap-4">
            <TwitterLink />
            <GithubLink />
            <LinkedInLink />
         </div>
      </div>
   );
};
