import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { SkillsQuery } from '../../generated/types';

interface Props {
   delay: number;
   skill: SkillsQuery['proficient' | 'familiar' | 'exploring']['nodes'][number];
   inView: boolean;
}

export const SkillItem: React.FC<Props> = ({ delay, skill, inView }) => {
   return (
      <li className={`grid grid-cols-[max-content_1fr] bg-white shadow-md fade-left-init ${inView ? 'animate-fade-left' : ''} [animation-delay:${delay}ms]`}>
         <GatsbyImage className="h-7 w-7 m-1" image={skill.image.asset.gatsbyImageData} alt={skill.alt} />
         <span className="px-3 md:px-2 dark:text-dark-gray bg-gray-200 dark:bg-gray-300 text-base sm:text-lg font-body flex items-center justify-center">
            {skill.name}
         </span>
      </li>
   );
};
