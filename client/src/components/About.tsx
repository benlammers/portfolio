import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { useInView } from 'react-intersection-observer';
import { AboutQuery } from '../generated/types';
import { Paragraph } from './Paragraph';
import { Section } from './Section';

export const About: React.FC = () => {
   const data = useStaticQuery<AboutQuery>(query);
   const [ref, inView] = useInView({ threshold: 0.4, triggerOnce: true });

   return (
      <Section id="about" bg="bg-gray-100 dark:bg-dark-gray-2" className={`fade-in-init ${inView ? 'animate-fade-in' : ''}`}>
         <div className="flex flex-col gap-4 md:w-4/5 lg:w-3/5 text-dark-gray dark:text-gray-100" ref={ref}>
            <div className="flex flex-col">
               <h2 className="heading-label font-bold">About</h2>
               <span className="heading-secondary">{data.sanityAbout.title}</span>
            </div>
            <Paragraph body={data.sanityAbout.body} />
         </div>
      </Section>
   );
};

const query = graphql`
   query About {
      sanityAbout {
         title
         body {
            children {
               marks
               text
            }
         }
      }
   }
`;
