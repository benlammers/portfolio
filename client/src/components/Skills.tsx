import React from 'react';
import { SkillItem } from './SkillItem';

export const Skills: React.FC = () => {
   return (
      <div className="flex flex-col gap-8 w-full items-center py-24 bg-amber-400">
         <div className="flex flex-col gap-4 w-3/5 items-center">
            <span className="text-xl font-display">I am experienced in</span>
            <ul className="grid grid-cols-3 gap-4 w-full">
               <SkillItem name="Next JS" />
               <SkillItem name="Gatsby" />
               <SkillItem name="Svelte" />
               <SkillItem name="Next JS" />
               <SkillItem name="Gatsby" />
               <SkillItem name="Svelte" />
            </ul>
         </div>
         <div className="flex flex-col gap-4 w-3/5 items-center">
            <span className="text-xl font-display">familiar with</span>
            <ul className="grid grid-cols-3 gap-4 w-full">
               <SkillItem name="Next JS" />
               <SkillItem name="Gatsby" />
               <SkillItem name="Svelte" />
               <SkillItem name="Next JS" />
               <SkillItem name="Gatsby" />
               <SkillItem name="Svelte" />
            </ul>
         </div>
         <div className="flex flex-col gap-4 w-3/5 items-center">
            <span className="text-xl font-display">and exploring</span>
            <ul className="grid grid-cols-3 gap-4 w-full">
               <SkillItem name="Next JS" />
               <SkillItem name="Gatsby" />
               <SkillItem name="Svelte" />
               <SkillItem name="Next JS" />
               <SkillItem name="Gatsby" />
               <SkillItem name="Svelte" />
            </ul>
         </div>
      </div>
   );
};
