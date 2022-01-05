import React from 'react';
import dayjs from 'dayjs';
import { GatsbyImage } from 'gatsby-plugin-image';
import { TimelineQuery } from '../../generated/types';
import { Paragraph } from '../Paragraph';

interface Props {
   item: TimelineQuery['allSanityTimelineItem']['nodes'][number];
}

export const TimelineItem: React.FC<Props> = ({ item }) => {
   const date = dayjs(item.date);

   return (
      <div className="group grid xs:grid-cols-[1fr_max-content_max-content] md:grid-cols-[1fr_max-content_1fr] gap-2 md:gap-4 items-center z-10">
         <div className="flex flex-col gap-2 bg-gray-100 shadow-md p-4 pr-8 my-2 md:my-0 mr-1 md:mr-2 col-start-1 md:group-odd:col-start-3 row-start-1">
            <div className="grid grid-cols-[1fr_max-content]">
               <span className="text-lg xs:text-xl font-bold font-display">{item.title}</span>
               <span className="sm:hidden font-bold font-body text-base">{date.format('MMM YYYY')}</span>
            </div>
            <Paragraph body={item.body} />
            <a className="w-max self-end mt-2 text-base underline font-bold font-body" href={item.link.url} target="_blank" rel="noopener">
               {item.link.title}
            </a>
         </div>
         <div className="hidden xs:flex flex-col justify-center relative h-full">
            <div className=" bg-gray-300 absolute top-0 right-1/2 translate-x-1/2 h-full w-[2px] -z-10" />
            <div className="flex items-center justify-center bg-gray-100 rounded-full p-2 shadow-md h-[42px] w-[42px] md:h-[48px] md:w-[48px] col-start-2 row-start-1">
               <GatsbyImage image={item.image.asset.gatsbyImageData} alt={item.alt} />
            </div>
         </div>
         <div className="hidden sm:flex flex-col items-center w-min col-start-3 justify-self-start md:group-odd:col-start-1 md:group-odd:justify-self-end row-start-1">
            <span className="font-body text-sm">{date.format('MMM')}</span>
            <span className="font-body text-base md:text-xl">{date.format('YYYY')}</span>
         </div>
      </div>
   );
};
