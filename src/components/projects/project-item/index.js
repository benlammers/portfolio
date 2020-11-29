import React from "react"

import ProjectHeading from "./project-heading"
import ProjectStack from "./project-stack"

import styles from "./project-item.module.scss"

const ProjectItem = ({ project }) => {
  return (
    <li
      className={styles.projectItem}
      style={{ backgroundImage: `url(${project.image})` }}
    >
      <div className={styles.details}>
        <ProjectHeading project={project} />
        <p className={`${styles.description} text-secondary`}>
          {project.description}
        </p>
        <ProjectStack stack={project.stack} />
      </div>
    </li>
  )
}

export default ProjectItem
