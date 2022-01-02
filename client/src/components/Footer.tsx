import React from 'react';
import { GithubLink } from './links/GithubLink';
import { LinkedInLink } from './links/LinkedInLink';
import { TwitterLink } from './links/TwitterLink';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
   return (
      <footer className="flex flex-col items-center gap-6 justify-center bg-gray-100 px-24 py-6">
         <div className="grid grid-cols-3 items-center w-full">
            <div className="self-start">
               <span className="font-body text-sm font-medium text-gray-500">Connect</span>
               <div className="flex gap-4">
                  <TwitterLink inFooter />
                  <GithubLink inFooter />
                  <LinkedInLink inFooter />
               </div>
            </div>
            <div className="flex flex-col items-center">
               <span className="font-display text-2xl font-bold">Ben Lammers</span>
               <div className="flex gap-4">
                  <span>About</span>
                  <span>Skills</span>
                  <span>Projects</span>
                  <span>Timeline</span>
               </div>
            </div>
            <div className="flex flex-col items-end self-start">
               <span className="font-body text-sm font-medium text-gray-500">Build With</span>
               <div className="flex gap-4">
                  <Logo />
                  <Logo />
                  <Logo />
                  <Logo />
               </div>
            </div>
         </div>
         <span className="font-body text-sm font-medium text-gray-500">&copy; {new Date().getFullYear()} Ben Lammers</span>
      </footer>
   );
};
