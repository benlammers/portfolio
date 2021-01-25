import React from "react"
import { showdown, portfolio, unite } from "../img/projects"

import { ExternalIcon, GithubIcon } from "../img/icons"
import {
  apollo,
  django,
  gatsby,
  graphql,
  html,
  nextjs,
  postgres,
  prisma,
  react,
  redux,
  sass,
  tailwind,
  typescript,
} from "../img/logos"

export const projectsData = [
  {
    title: "Showdown",
    description: `An application currently in development with the goal of enabling tournament coveneers 
      with the ability to easily manage and display tournament details in real time.`,
    image: showdown,
    role: "Full Stack Developer",
    type: "Family Venture",
    stack: [
      typescript,
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
    description: `My personal portfolio used to showcase my experience and achievements as a 
      web developer. Created with a focus on mobile first design and leveraging modern CSS.`,
    image: portfolio,
    role: "Front End Developer",
    type: "Personal Project",
    stack: [gatsby, react, sass, html],
    buttons: [
      {
        text: "View Git Project",
        link: "https://github.com/benlammers/portfolio",
        icon: <GithubIcon />,
      },
    ],
  },
  {
    title: "Unite",
    description: `An application that provides the ability to RSVP and view details for our wedding. 
      Developed with a focus on completing my first full stack application and practicing semantic HTML.`,
    image: unite,
    role: "Full Stack Developer",
    type: "Personal Project",
    stack: [react, redux, sass, django, postgres],
    buttons: [
      {
        text: "View Frontend Repo",
        link: "https://github.com/benlammers/unite-frontend",
        icon: <GithubIcon />,
      },
      {
        text: "View API Repo",
        link: "https://github.com/benlammers/unite-api",
        icon: <GithubIcon />,
      },
      {
        text: "View Site",
        link: "https://benandmadison.ca",
        icon: <ExternalIcon />,
      },
    ],
  },
]
