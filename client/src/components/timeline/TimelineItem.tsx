import React from 'react';
import dayjs from 'dayjs';
import { GatsbyImage } from 'gatsby-plugin-image';
import { TimelineQuery } from '../../generated/types';
import { Paragraph } from '../Paragraph';

interface Props {
   item: TimelineQuery['allSanityTimelineItem']['nodes'][number];
   alignEnd?: boolean;
}

export const TimelineItem: React.FC<Props> = ({ item, alignEnd }) => {
   const date = dayjs(item.date);

   return (
      <div className="grid grid-cols-[1fr_max-content_1fr] gap-4 items-center z-10">
         <div className={`flex flex-col bg-gray-100 shadow-md p-4 pr-8 mr-2 ${alignEnd ? 'col-start-3' : 'col-start-1'} row-start-1`}>
            <span className="text-xl font-bold font-display">{item.title}</span>
            <Paragraph body={item.body} />
            <a className="w-max self-end mt-2 text-base underline font-bold font-body" href={item.link.url} target="_blank" rel="noopener">
               {item.link.title}
            </a>
         </div>
         <div className="flex items-center justify-center bg-gray-100 rounded-full p-2 shadow-md h-[48px] w-[48px] col-start-2 row-start-1">
            <GatsbyImage image={item.image.asset.gatsbyImageData} alt={item.alt} />
         </div>
         <div className={`flex flex-col items-center w-min ${alignEnd ? 'col-start-1 justify-self-end' : 'col-start-3 justify-self-start'} row-start-1`}>
            <span className="font-body text-sm">{date.format('MMM')}</span>
            <span className="font-body text-xl">{date.format('YYYY')}</span>
         </div>
      </div>
   );
};
