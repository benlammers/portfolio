import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { SkillsQuery } from '../../generated/types';
import { SkillItem } from './SkillItem';

export const Skills: React.FC = () => {
   const data = useStaticQuery<SkillsQuery>(query);

   return (
      <div className="flex flex-col gap-8 w-full items-center py-24 bg-amber-400">
         <div className="flex flex-col gap-4 w-3/5 items-center">
            <span className="text-xl font-display">I am proficient in</span>
            <ul className="grid grid-cols-3 gap-4 w-full">
               {data.allSanitySkill.nodes
                  .filter((skill) => skill.level === 'proficient')
                  .map((skill) => (
                     <SkillItem key={skill.id} skill={skill} />
                  ))}
            </ul>
         </div>
         <div className="flex flex-col gap-4 w-3/5 items-center">
            <span className="text-xl font-display">familiar with</span>
            <ul className="grid grid-cols-3 gap-4 w-full">
               {data.allSanitySkill.nodes
                  .filter((skill) => skill.level === 'familiar')
                  .map((skill) => (
                     <SkillItem key={skill.id} skill={skill} />
                  ))}
            </ul>
         </div>
         <div className="flex flex-col gap-4 w-3/5 items-center">
            <span className="text-xl font-display">and exploring</span>
            <ul className="grid grid-cols-3 gap-4 w-full">
               {data.allSanitySkill.nodes
                  .filter((skill) => skill.level === 'exploring')
                  .map((skill) => (
                     <SkillItem key={skill.id} skill={skill} />
                  ))}
            </ul>
         </div>
      </div>
   );
};

const query = graphql`
   query Skills {
      allSanitySkill(sort: { fields: name }, filter: { level: { ne: "hidden" } }) {
         nodes {
            id
            name
            level
            image {
               asset {
                  gatsbyImageData(placeholder: BLURRED, width: 36, height: 36)
               }
            }
            alt
         }
      }
   }
`;
