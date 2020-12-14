import { showdown, portfolio, unite } from "../img/projects"

import { apollo, django, gatsby, graphql, html, nextjs, postgres, prisma, react, redux, sass, tailwind } from '../img/logos'

export const projectsData = [
   {
      title: "Showdown",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam volutpat, libero quis sodales feugiat, lectus turpis tristique ex, vitae tristique.",
      image: showdown,
      role: "Full Stack Developer",
      type: "Family Venture",
      stack: [
         nextjs,
         react,
         apollo,
         tailwind,
         graphql,
         prisma,
         postgres,
      ],
   },
   {
      title: "Portfolio",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam volutpat, libero quis sodales feugiat, lectus turpis tristique ex, vitae tristique.",
      image: portfolio,
      role: "Front End Developer",
      type: "Personal Project",
      stack: [
         gatsby,
         react,
         sass,
         html,
      ],
      buttons: [{
         text: "View Git Project",
         link: "https://github.com/benlammers/portfolio",
         icon: '#icon-github'
      }]
   },
   {
      title: "Unite",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam volutpat, libero quis sodales feugiat, lectus turpis tristique ex, vitae tristique.",
      image: unite,
      role: "Full Stack Developer",
      type: "Personal Project",
      stack: [
         react,
         redux,
         sass,
         django,
         postgres
      ],
      buttons: [{
         text: "View Frontend Git",
         link: "https://github.com/benlammers/unite-frontend",
         icon: '#icon-github'
      },
      {
         text: "View Backend Git",
         link: "https://github.com/benlammers/unite-backend",
         icon: '#icon-github'
      },
      {
         text: "View Site",
         link: "https://benandmadison.ca",
         icon: '#icon-external'
      }]
   }
]