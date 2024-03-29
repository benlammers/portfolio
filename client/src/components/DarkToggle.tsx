import React from 'react';
import { ThemeToggler } from 'gatsby-plugin-dark-mode';

export const DarkToggle: React.FC = () => {
   return (
      <ThemeToggler>
         {({ theme, toggleTheme }) => (
            <label
               aria-label="Toggle dark mode"
               className="flex p-2 rounded-full dark:bg-gray-100 bg-dark-gray cursor-pointer -rotate-12 hover:rotate-[24deg] transition-transform"
            >
               <input
                  className="visually-hidden"
                  type="checkbox"
                  onChange={(e) => toggleTheme(e.target.checked ? 'dark' : 'light')}
                  checked={theme === 'dark'}
                  aria-label="Toggle dark mode"
               />
               <svg className="hidden dark:block h-6 w-6" viewBox="0 0 24 24">
                  <g clipPath="url(#clip0_544_220)">
                     <path
                        d="M12 7.5C9.52031 7.5 7.5 9.52031 7.5 12C7.5 14.4797 9.52031 16.5 12 16.5C14.4797 16.5 16.5 14.4797 16.5 12C16.5 9.52031 14.4797 7.5 12 7.5ZM23.55 11.2734L19.1109 9.05625L20.6813 4.35C20.8922 3.7125 20.2875 3.10781 19.6547 3.32344L14.9484 4.89375L12.7266 0.45C12.4266 -0.15 11.5734 -0.15 11.2734 0.45L9.05625 4.88906L4.34531 3.31875C3.70781 3.10781 3.10313 3.7125 3.31875 4.34531L4.88906 9.05156L0.45 11.2734C-0.15 11.5734 -0.15 12.4266 0.45 12.7266L4.88906 14.9437L3.31875 19.6547C3.10781 20.2922 3.7125 20.8969 4.34531 20.6813L9.05156 19.1109L11.2688 23.55C11.5688 24.15 12.4219 24.15 12.7219 23.55L14.9391 19.1109L19.6453 20.6813C20.2828 20.8922 20.8875 20.2875 20.6719 19.6547L19.1016 14.9484L23.5406 12.7313C24.15 12.4266 24.15 11.5734 23.55 11.2734V11.2734ZM16.2422 16.2422C13.9031 18.5813 10.0969 18.5813 7.75781 16.2422C5.41875 13.9031 5.41875 10.0969 7.75781 7.75781C10.0969 5.41875 13.9031 5.41875 16.2422 7.75781C18.5813 10.0969 18.5813 13.9031 16.2422 16.2422Z"
                        className="fill-yellow-500"
                     />
                  </g>
                  <defs>
                     <clipPath id="clip0_544_220">
                        <rect width="24" height="24" fill="white" />
                     </clipPath>
                  </defs>
               </svg>
               <svg className="dark:hidden h-6 w-6" viewBox="0 0 24 24" fill="none">
                  <path
                     d="M12.1168 11.8836C10.5922 10.3583 9.55388 8.41539 9.13311 6.30023C8.71233 4.18507 8.92796 1.99265 9.75274 0C7.40113 0.462949 5.24106 1.61685 3.54879 3.31413C-1.18293 8.046 -1.18293 15.7188 3.54879 20.4506C8.28172 25.1837 15.953 25.1825 20.686 20.4506C22.3828 18.7585 23.5366 16.5989 24 14.2477C22.0074 15.0724 19.8151 15.2879 17.7 14.8671C15.585 14.4463 13.6421 13.4081 12.1168 11.8836V11.8836Z"
                     className="fill-yellow-400"
                  />
               </svg>
            </label>
         )}
      </ThemeToggler>
   );
};
