import React from 'react';
import { Link } from 'gatsby';
import { DarkToggle } from './DarkToggle';

export const Header: React.FC = () => {
   return (
      <header className="w-full py-6 lg:py-8 px-6 sm:px-16 dark:bg-dark-gray-2 transition-colors duration-300">
         <div className="flex justify-between items-center max-w-[64rem] mx-auto">
            <Link to="/" className="font-display text-2xl font-bold text-dark-gray dark:text-gray-100 uppercase transition-colors hover:text-gray-700">
               Ben Lammers
            </Link>
            <DarkToggle />
         </div>
      </header>
   );
};
