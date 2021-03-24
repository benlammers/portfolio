import React from "react"
import { GithubIcon, GmailIcon, LinkedinIcon } from "./../img/icons"

export const socialData = [
  {
    icon: <GithubIcon />,
    aValues: {
      href: "https://github.com/benlammers",
      target: "_blank",
      rel: "noopener noreferrer",
      ariaLabel: "Open Github profile for Ben Lammers"
    },
    className: "socialGithub",
  },
  {
    icon: <GmailIcon />,
    aValues: {
      href: "mailto:21benlammers@gmail.com",
      ariaLabel: "Send mail to 21benlammers@gmail.com"
    },
    className: "socialGmail",
  },
  {
    icon: <LinkedinIcon />,
    aValues: {
      href: "https://www.linkedin.com/in/ben-lammers-3bb8bb168/",
      target: "_blank",
      rel: "noopener noreferrer",
      ariaLabel: "Open LinkedIn profile for Ben Lammers"
    },
    className: "socialLinkedin",
  },
]
