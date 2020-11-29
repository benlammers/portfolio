import React from "react"

import ProjectItem from "./project-item"

import { projectsData } from "../../data"

import styles from "./projects.module.scss"

const Projects = () => {
  return (
    <section className={styles.projects} id="projects">
      <h1 className="heading-primary">Projects</h1>
      <ul className={styles.list}>
        {projectsData.map((project, index) => (
          <ProjectItem project={project} key={index} />
        ))}
      </ul>
    </section>
  )
}

export default Projects
