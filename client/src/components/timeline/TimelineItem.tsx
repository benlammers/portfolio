import React from 'react';
import dayjs from 'dayjs';
import { GatsbyImage } from 'gatsby-plugin-image';
import { TimelineQuery } from '../../generated/types';
import { Paragraph } from '../Paragraph';
import { useInView } from 'react-intersection-observer';

interface Props {
   item: TimelineQuery['allSanityTimelineItem']['nodes'][number];
}

export const TimelineItem: React.FC<Props> = ({ item }) => {
   const [ref, inView] = useInView({ threshold: 1, triggerOnce: true });
   const date = dayjs(item.date);

   return (
      <div
         className={`group grid sm:grid-cols-[1fr_max-content_max-content] md:grid-cols-[32rem_max-content_max-content] lg:grid-cols-[1fr_max-content_1fr] gap-4 justify-center items-center z-10 fade-up-init ${
            inView ? 'animate-fade-up' : ''
         } [animation-delay:800ms]`}
         ref={ref}
      >
         <div className="grid grid-cols-[1fr_max-content] gap-y-1 bg-gray-100 shadow-md p-4 sm:pr-8 my-2 md:my-4 lg:my-0 max-w-[32rem] col-start-1 lg:group-even:col-start-3 row-start-1 dark:text-dark-gray">
            <div className="sm:hidden h-7 w-7">
               <GatsbyImage image={item.image.asset.gatsbyImageData} alt={item.alt} />
            </div>
            <span className="sm:hidden font-bold text-right font-body text-base">{date.format('MMM YYYY')}</span>
            <span className="text-lg xs:text-xl font-bold font-display col-span-2">{item.title}</span>
            <div className="col-span-2">
               <Paragraph body={item.body} />
            </div>
            <a className="w-max col-start-2 mt-1 sm:text-lg underline underline-offset-4 font-body" href={item.link.url} target="_blank" rel="noopener">
               {item.link.title}
            </a>
         </div>

         <div className="hidden sm:flex flex-col justify-center relative h-full">
            <div className="bg-gray-300 lg:hidden absolute top-0 right-1/2 translate-x-1/2 h-full w-[2px] -z-10 group-first:scale-[115%] group-last:scale-[115%]" />
            <div className="flex items-center justify-center bg-gray-100 rounded-full p-2 shadow-md h-10 w-10 md:h-12 md:w-12 col-start-2 row-start-1">
               <GatsbyImage image={item.image.asset.gatsbyImageData} alt={item.alt} />
            </div>
         </div>
         <div className="hidden sm:flex flex-col items-center w-min col-start-3 justify-self-start lg:group-even:col-start-1 lg:group-even:justify-self-end row-start-1">
            <span className="font-body text-sm">{date.format('MMM')}</span>
            <span className="font-body text-xl">{date.format('YYYY')}</span>
         </div>
      </div>
   );
};
