import React from "react"

import styles from "./project-heading.module.scss"

const ProjectHeading = ({ project }) => {
  return (
    <div className={styles.projectHeading}>
      <h2 className={`${styles.title} heading-secondary`}>{project.title}</h2>
      <h3 className="heading-tertiary">{project.role}</h3>
      <h3 className={`${styles.type} heading-tertiary-thin`}>{project.type}</h3>
    </div>
  )
}

export default ProjectHeading
