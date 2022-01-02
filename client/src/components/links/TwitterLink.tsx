import React from 'react';

interface Props {
   inFooter?: boolean;
}

export const TwitterLink: React.FC<Props> = ({ inFooter }) => {
   return (
      <a className="cursor-pointer" href="https://twitter.com/benlammers_" target="_blank" rel="noopener">
         <svg
            className={`h-9 w-9 transition-colors ${inFooter ? 'fill-twitter hover:fill-red-500' : 'fill-amber-400 hover:fill-amber-500'}`}
            width="36"
            height="36"
            viewBox="0 0 36 36"
         >
            <path d="M35.4645 7.40549C34.212 7.96049 32.8665 8.33549 31.452 8.50499C32.9115 7.63168 34.0034 6.25719 34.524 4.63799C33.1528 5.45248 31.652 6.02579 30.087 6.33299C29.0346 5.20929 27.6406 4.46448 26.1215 4.2142C24.6024 3.96393 23.0431 4.22218 21.6858 4.94887C20.3286 5.67556 19.2492 6.83004 18.6152 8.23305C17.9813 9.63606 17.8283 11.2091 18.18 12.708C15.4015 12.5685 12.6834 11.8463 10.2021 10.5884C7.72082 9.33038 5.53175 7.56474 3.77699 5.40599C3.17699 6.44099 2.83199 7.64099 2.83199 8.91899C2.83132 10.0695 3.11464 11.2024 3.6568 12.2171C4.19897 13.2318 4.98323 14.0971 5.93999 14.736C4.8304 14.7007 3.7453 14.4009 2.77499 13.8615V13.9515C2.77488 15.5651 3.33304 17.1291 4.35476 18.378C5.37649 19.6269 6.79884 20.4839 8.38049 20.8035C7.35116 21.0821 6.27199 21.1231 5.22449 20.9235C5.67073 22.3119 6.53998 23.526 7.71054 24.3959C8.8811 25.2657 10.2944 25.7478 11.7525 25.7745C9.27724 27.7176 6.22032 28.7716 3.07349 28.767C2.51606 28.7671 1.9591 28.7346 1.40549 28.6695C4.5997 30.7233 8.318 31.8132 12.1155 31.809C24.9705 31.809 31.998 21.162 31.998 11.928C31.998 11.628 31.9905 11.325 31.977 11.025C33.3439 10.0365 34.5239 8.81234 35.4615 7.40999L35.4645 7.40549V7.40549Z" />
         </svg>
      </a>
   );
};
