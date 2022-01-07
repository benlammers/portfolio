import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';

interface Props {
   image: {
      __typename?: 'SanityImage';
      asset: {
         __typename?: 'SanityImageAsset';
         gatsbyImageData: any;
      };
      hotspot: {
         __typename?: 'SanityImageHotspot';
         x: number;
         y: number;
      };
   };
   alt: string;
}

export const HotspotImage: React.FC<Props> = ({ image, alt }) => {
   const objectPosition = `${image.hotspot.x * 100}% ${image.hotspot.y * 100}%`;

   return <GatsbyImage className="w-full h-full" imgStyle={{ objectPosition }} image={image.asset.gatsbyImageData} alt={alt} />;
};
