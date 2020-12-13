import React from "react"

import ProjectCard from "./project-card"

import { projectsData } from "../../data"

import styles from "./projects.module.scss"

const Projects = () => {
  return (
    <section className="section" id="projects">
      <div className="heading">
        <h1 className="text--xl font--heading font--bold">Projects</h1>
        <p className="text--md font--heading">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam volutpat, libero quis sodales feugiat, 
          lectus turpis tristique ex, vitae tristique.
        </p>
      </div>
      <ul className={styles.list}>
        {projectsData.map((project, index) => (
          <ProjectCard project={project} key={index} />
        ))}
      </ul>
    </section>
  )
}

export default Projects
