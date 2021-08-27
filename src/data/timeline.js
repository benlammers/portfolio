const timelineTypes = {
  BOOK: "Book",
  CONFERENCE: "Conference",
  COURSE: "Course",
  EMPLOYMENT: "Employment",
}

export const timelineData = [
   {
    type: timelineTypes.COURSE,
    date: "Feb 18, 2021",
    title: "NodeJS - The Complete Guide",
    description:
      "Completed Maximilian Schwarzmüller's course on REST API, GraphQL, Authentication, MongoDB and more in NodeJS.",
    link: "https://www.udemy.com/course/nodejs-the-complete-guide",
    linkText: "View Course",
    linkAriaLabel: "View Maximilian Schwarzmüller's Udemy course on NodeJS"
  },
  {
    type: timelineTypes.COURSE,
    date: "Jan 7, 2021",
    title: "Understanding Typescript",
    description:
      "Completed Maximilian Schwarzmüller's course on the basics, features and workflows of Typescript.",
    link: "https://www.udemy.com/course/understanding-typescript/",
    linkText: "View Course",
    linkAriaLabel: "View Maximilian Schwarzmüller's Udemy course on Typescript"
  },
  {
    type: timelineTypes.CONFERENCE,
    date: "Dec 7-9, 2020",
    title: "Reactathon",
    description:
      "Attended workshops and topic tables to interact with industry leaders and learn about complex concepts in React.",
    link: "https://www.reactathon.com/",
    linkText: "View Event",
    linkAriaLabel: "View Reactathon's home page"
  },
  {
    type: timelineTypes.EMPLOYMENT,
    date: "May 1, 2020",
    title: "Centre for Advanced Computing",
    description:
      "Started a 16 month software development internship leveraging modern AI solutions in web applications.",
    link: "https://cac.queensu.ca/",
    linkText: "View Company",
    linkAriaLabel: "View more on the Centre for Advanced Computing"
  },
  {
    type: timelineTypes.COURSE,
    date: "March 4, 2020",
    title: "Advanced CSS and Sass",
    description:
      "Completed Jonas Schmedtmann's course on advanced and modern CSS including CSS Grid, flexbox and responsive design.",
    link: "https://www.udemy.com/course/advanced-css-and-sass/",
    linkText: "View Course",
    linkAriaLabel: "View Jonas Schmedtmann's Udemy course on advanced and modern CSS"
  },
]
