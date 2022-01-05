import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { TimelineQuery } from '../../generated/types';
import { TimelineItem } from './TimelineItem';
import { Section } from '../Section';

export const Timeline: React.FC = () => {
   const data = useStaticQuery<TimelineQuery>(query);

   return (
      <Section id="timeline" bg="bg-amber-400 md:bg-white" className="flex flex-col gap-8 md:gap-12 items-center">
         <div className="flex flex-col items-center">
            <h2 className="heading-label font-bold">Timeline</h2>
            <span className="heading-secondary">What I've Been Up To</span>
         </div>
         <div className="grid grid-flow-row w-full sm:w-[105%] sm:translate-x-[2.5%] md:translate-x-0 md:w-full relative">
            {data.allSanityTimelineItem.nodes.map((item) => (
               <TimelineItem key={item.id} item={item} />
            ))}
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
