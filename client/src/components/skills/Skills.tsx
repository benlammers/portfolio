import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { SkillsQuery } from '../../generated/types';
import { SkillsSection } from './SkillsSection';
import { Section } from '../Section';

export const Skills: React.FC = () => {
   const data = useStaticQuery<SkillsQuery>(query);

   return (
      <Section
         id="skills"
         parentClass="bg-amber-400 dark:bg-dark-gray"
         contentClass="py-12 sm:py-16 lg:pt-24 grid gap-8 max-w-[42rem] text-dark-gray dark:text-gray-100"
      >
         <SkillsSection title="I am proficient in" skills={data.proficient.nodes} />
         <SkillsSection title="comfortable with" skills={data.familiar.nodes} />
         <SkillsSection title="and exploring" skills={data.exploring.nodes} />
      </Section>
   );
};

const query = graphql`
   fragment SkillItemFragment on SanitySkill {
      id
      name
      level
      alt
      image {
         asset {
            gatsbyImageData(placeholder: BLURRED, fit: FILL)
         }
      }
   }

   query Skills {
      proficient: allSanitySkill(sort: { fields: name }, filter: { level: { eq: "proficient" } }) {
         nodes {
            ...SkillItemFragment
         }
      }
      familiar: allSanitySkill(sort: { fields: name }, filter: { level: { eq: "familiar" } }) {
         nodes {
            ...SkillItemFragment
         }
      }
      exploring: allSanitySkill(sort: { fields: name }, filter: { level: { eq: "exploring" } }) {
         nodes {
            ...SkillItemFragment
         }
      }
   }
`;
