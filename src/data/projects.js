import React from "react"
import { showdown, portfolio, tastetest, tsengine, unite } from "../img/projects"

import { ExternalIcon, GithubIcon } from "../img/icons"
import {
  apollo,
  chakra,
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
  svelte,
  typescript,
} from "../img/logos"

export const projectsData = [
  {
    title: "Showdown",
    description: `An application currently in development with the goal of enabling tournament coveneers 
      with the ability to easily manage and display tournament details in real time.`,
    image: showdown,
    role: "Full Stack Developer",
    type: "Side Project",
    stack: [
      typescript,
      nextjs,
      react,
      chakra,
      apollo,
      graphql,
      prisma,
    ],
    buttons: [
      {
        text: "View On GitHub",
        link: "https://github.com/benlammers/showdown-frontend",
        linkAriaLabel: "View Github repository for the frontend of Showdown",
        icon: <GithubIcon />,
      },
    ],
  },
  {
    title: "Portfolio",
    description: `My personal portfolio used to showcase my experience and achievements as a 
      web developer. Created with a focus on mobile first design and leveraging modern CSS.`,
    image: portfolio,
    role: "Front End Developer",
    type: "Side Project",
    stack: [gatsby, react, sass, html],
    buttons: [
      {
        text: "View On GitHub",
        link: "https://github.com/benlammers/portfolio",
        linkAriaLabel: "View Github repository for portfolio",
        icon: <GithubIcon />,
      },
    ],
  },
  {
    title: "TS Engine",
    description: `Simple 2D Game Engine running in the browser on HTML Canvas. 
    Currently only supporting rectangle based games.`,
    image: tsengine,
    role: "Full Stack Developer",
    type: "Personal Project",
    stack: [svelte, typescript, sass],
    buttons: [
      {
        text: "View On GitHub",
        link: "https://github.com/benlammers/ts-engine",
        linkAriaLabel: "View Github repository for TS engine",
        icon: <GithubIcon />,
      },
      {
        text: "View Site",
        link: "https://ts-engine.vercel.app/",
        linkAriaLabel: "View the hosted version of TS Engine",
        icon: <ExternalIcon />,
      },
    ],
  },
  {
    title: "Taste Test",
    description: `A small application that helps calculate some simple rankings and statistics for family held
     taste tests. Created as project led approach to learning Svelte.`,
    image: tastetest,
    role: "Front End Developer",
    type: "Side Project",
    stack: [svelte, typescript, sass],
    buttons: [
      {
        text: "View On GitHub",
        link: "https://github.com/benlammers/taste-test",
        linkAriaLabel: "View Github repository for taste test",
        icon: <GithubIcon />,
      },
      {
        text: "View Site",
        link: "https://taste-test.vercel.app/",
        linkAriaLabel: "View the hosted version of Taste Test",
        icon: <ExternalIcon />,
      },
    ],
  },
  {
    title: "Unite",
    description: `An application that provides the ability to RSVP and view details for our wedding. 
      Developed with a focus on completing my first full stack application and practicing semantic HTML.`,
    image: unite,
    role: "Full Stack Developer",
    type: "Side Project",
    stack: [react, redux, sass, django, postgres],
    buttons: [
      {
        text: "View Frontend Repo",
        link: "https://github.com/benlammers/unite-frontend",
        linkAriaLabel: "View Github repository for the frontend of Unite",
        icon: <GithubIcon />,
      },
      {
        text: "View API Repo",
        link: "https://github.com/benlammers/unite-api",
        linkAriaLabel: "View Github repository for the API of Unite",
        icon: <GithubIcon />,
      },
      {
        text: "View Site",
        link: "https://unite-app.netlify.app",
        linkAriaLabel: "View the hosted version of Unite",
        icon: <ExternalIcon />,
      },
    ],
  },
]
