import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { SkillsQuery } from '../../generated/types';

interface Props {
   skill: SkillsQuery['allSanitySkill']['nodes'][number];
}

export const SkillItem: React.FC<Props> = ({ skill }) => {
   return (
      <li className="grid grid-cols-[max-content_1fr] items-center bg-gray-200 shadow-md ">
         <span className="flex items-center justify-center bg-white h-9 w-9">
            <GatsbyImage image={skill.image.asset.gatsbyImageData} alt={skill.alt} />
         </span>
         <span className="text-lg font-bold font-body text-center">{skill.name}</span>
      </li>
   );
};
