import React from 'react';
import { useInView } from 'react-intersection-observer';
import { SkillsQuery } from '../../generated/types';
import { SkillItem } from './SkillItem';

interface Props {
   title: string;
   skills: SkillsQuery['proficient' | 'familiar' | 'exploring']['nodes'];
}

export const SkillsSection: React.FC<Props> = ({ title, skills }) => {
   const [ref, inView] = useInView({ threshold: 0.4, triggerOnce: true });

   return (
      <div className="flex flex-col gap-4 items-center" ref={ref}>
         <span className={`text-xl font-body fade-in-init ${inView ? 'animate-fade-in' : ''}`}>{title}</span>
         <ul className="flex flex-wrap justify-center xs:grid xs:grid-cols-3 gap-4 w-full">
            {skills.map((skill, index) => (
               <SkillItem key={skill.id} skill={skill} delay={index * 200} inView={inView} />
            ))}
         </ul>
      </div>
   );
};
