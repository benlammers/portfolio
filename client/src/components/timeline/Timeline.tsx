import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { useInView } from 'react-intersection-observer';
import { TimelineQuery } from '../../generated/types';
import { TimelineItem } from './TimelineItem';
import { Section } from '../Section';

export const Timeline: React.FC = () => {
   const data = useStaticQuery<TimelineQuery>(query);
   const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

   return (
      <Section id="timeline" bg="bg-amber-400 md:bg-white dark:bg-dark-gray md:dark:bg-dark-gray-2">
         <div className="flex flex-col gap-8 md:gap-12 items-center dark:text-gray-100" ref={ref}>
            <div className={`flex flex-col items-center fade-in-init ${inView ? 'animate-fade-in' : ''}`}>
               <h2 className="heading-label font-bold">Timeline</h2>
               <span className="heading-secondary">What I've Been Up To</span>
            </div>
            <div className="grid grid-flow-row w-full sm:w-[105%] sm:translate-x-[2.5%] md:translate-x-0 md:w-full relative">
               {data.allSanityTimelineItem.nodes.map((item, index) => (
                  <TimelineItem key={item.id} item={item} isOdd={index % 2 === 1} />
               ))}
               <div
                  className={`bg-gray-300 hidden lg:block absolute top-0 right-1/2 w-[2px] -z-10 timeline-line-height timeline-line-init ${
                     inView ? 'animate-timeline-line' : ''
                  }`}
               />
            </div>
         </div>
      </Section>
   );
};

const query = graphql`
   query Timeline {
      allSanityTimelineItem(sort: { fields: date, order: DESC }) {
         nodes {
            id
            title
            body {
               children {
                  text
                  marks
               }
            }
            date(locale: "en-CA")
            link {
               title
               url
            }
            image {
               asset {
                  gatsbyImageData(fit: FILL, placeholder: BLURRED)
               }
            }
            alt
         }
      }
   }
`;
