import React from 'react';
import { Logo } from './Logo';

interface Props {
   name: string;
}

export const SkillItem: React.FC<Props> = () => {
   return (
      <li className="grid grid-cols-[max-content_1fr] items-center bg-gray-200 shadow-md ">
         <span className="flex items-center justify-center bg-white h-9 w-9">
            <Logo />
         </span>
         <span className="text-lg font-bold font-body text-center">Next JS</span>
      </li>
   );
};
