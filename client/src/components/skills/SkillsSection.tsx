import React from 'react';
import { SkillsQuery } from '../../generated/types';
import { SkillItem } from './SkillItem';

interface Props {
   title: string;
   skills: SkillsQuery['proficient' | 'familiar' | 'exploring']['nodes'];
}

export const SkillsSection: React.FC<Props> = ({ title, skills }) => {
   return (
      <div className="flex flex-col gap-4 items-center">
         <span className="text-xl font-body">{title}</span>
         <ul className="flex flex-wrap justify-center xs:grid xs:grid-cols-3 gap-4 w-full">
            {skills.map((skill) => (
               <SkillItem key={skill.id} skill={skill} />
            ))}
         </ul>
      </div>
   );
};
