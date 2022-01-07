import React from 'react';

interface Props {
   inFooter?: boolean;
}

export const GithubLink: React.FC<Props> = ({ inFooter }) => {
   return (
      <a className="cursor-pointer" href="https://github.com/benlammers" target="_blank" rel="noopener" aria-label="Open Ben's Github profile">
         <svg
            className={`h-9 w-9 ${inFooter ? 'h-14 w-14 sm:h-7 sm:w-7 md:h-9 md:w-9' : ''} transition-colors ${
               inFooter ? 'fill-github hover:fill-github-hover dark:fill-white dark:hover:fill-gray-300' : 'fill-amber-400 hover:fill-amber-500'
            }`}
            viewBox="0 0 36 36"
         >
            <path d="M18 0C8.055 0 0 8.25874 0 18.4553C0 26.6218 5.1525 33.5194 12.3075 35.9647C13.2075 36.1262 13.545 35.5726 13.545 35.0881C13.545 34.6498 13.5225 33.1965 13.5225 31.6508C9 32.5044 7.83 30.5204 7.47 29.4823C7.2675 28.9517 6.39 27.3138 5.625 26.8755C4.995 26.5295 4.095 25.6759 5.6025 25.6529C7.02 25.6298 8.0325 26.9909 8.37 27.5445C9.99 30.3359 12.5775 29.5515 13.6125 29.0671C13.77 27.8675 14.2425 27.0601 14.76 26.5987C10.755 26.1373 6.57 24.5455 6.57 17.4864C6.57 15.4794 7.2675 13.8184 8.415 12.5265C8.235 12.0651 7.605 10.1735 8.595 7.63588C8.595 7.63588 10.1025 7.15142 13.545 9.52754C14.985 9.1123 16.515 8.90468 18.045 8.90468C19.575 8.90468 21.105 9.1123 22.545 9.52754C25.9875 7.12836 27.495 7.63588 27.495 7.63588C28.485 10.1735 27.855 12.0651 27.675 12.5265C28.8225 13.8184 29.52 15.4563 29.52 17.4864C29.52 24.5686 25.3125 26.1373 21.3075 26.5987C21.96 27.1754 22.5225 28.2827 22.5225 30.0129C22.5225 32.4813 22.5 34.4653 22.5 35.0881C22.5 35.5726 22.8375 36.1493 23.7375 35.9647C27.3108 34.7278 30.4158 32.3732 32.6155 29.2322C34.8152 26.0912 35.9989 22.3221 36 18.4553C36 8.25874 27.945 0 18 0Z" />
         </svg>
      </a>
   );
};
