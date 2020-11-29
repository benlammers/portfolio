// FrontEnd
import { html, javascript } from '../img/logos/languages'

// FrontEnd
import { apollo, react, sass } from '../img/logos/frontend'

// BackEnd
import { django, dotnet, graphql, postgres } from '../img/logos/backend'

// Deployment
import { docker } from '../img/logos/deployment'

// Images
import { showdown, portfolio, unite } from '../img/projects'

const lorem =
   'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ornare ligula ac pretium pharetra. Praesent vitae consectetur magna. Nam eu efficitur nibh, id molestie neque. Aliquam erat volutpat. Donec nec felis ipsum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris placerat risus vitae porttitor tincidunt.'

export const projectsData = [
   {
      title: 'Showdown',
      role: 'Full Stack Developer',
      type: 'Family Venture',
      description:
         'A tournament management application catered to small-scale sport tournaments',
      image: showdown,
      stack: [
         {
            title: 'React',
            logo: react,
         },
         {
            title: 'Apollo',
            logo: apollo,
         },
         {
            title: 'GraphQL',
            logo: graphql,
         },
         {
            title: 'DotNet',
            logo: dotnet,
         },
         {
            title: 'PostGres',
            logo: postgres,
         },
         {
            title: 'Docker',
            logo: docker,
         },
      ],
      overview: lorem,
      focus: lorem,
      features: lorem,
   },
   {
      title: 'Portfolio v2',
      role: 'Front End Developer',
      type: 'Personal Project',
      description:
         'A single page application created to showcase my projects and experience',
      image: portfolio,
      stack: [
         {
            title: 'React',
            logo: react,
         },
         {
            title: 'SASS',
            logo: sass,
         },
         {
            title: 'HTML',
            logo: html,
         },
         {
            title: 'Javascript',
            logo: javascript,
         },
      ],
      overview: lorem,
      focus: lorem,
      features: lorem,
      githubLink: 'https://github.com/benlammers/portfolio-v2',
   },
   {
      title: 'Unite',
      role: 'Full Stack Developer',
      type: 'Personal Project',
      description:
         'A web application used for guests to RSVP and see details for our wedding',
      image: unite,
      stack: [
         {
            title: 'React',
            logo: react,
         },
         {
            title: 'SASS',
            logo: sass,
         },
         {
            title: 'Django',
            logo: django,
         },
         {
            title: 'PostGres',
            logo: postgres,
         },
      ],
      overview: lorem,
      focus: lorem,
      features: lorem,
      githubLink: 'https://github.com/benlammers/portfolio-v2',
   },
]
