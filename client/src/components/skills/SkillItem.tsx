import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { SkillsQuery } from '../../generated/types';

interface Props {
   skill: SkillsQuery['proficient' | 'familiar' | 'exploring']['nodes'][number];
}

export const SkillItem: React.FC<Props> = ({ skill }) => {
   return (
      <li className="grid grid-cols-[max-content_1fr] bg-white shadow-md">
         <GatsbyImage className="h-5 w-5 sm:h-7 sm:w-7 m-1" image={skill.image.asset.gatsbyImageData} alt={skill.alt} />
         <span className="px-2 bg-gray-200 text-base sm:text-lg font-bold font-body flex items-center justify-center">{skill.name}</span>
      </li>
   );
};
