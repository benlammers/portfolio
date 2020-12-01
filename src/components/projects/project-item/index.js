import React from "react"
import { useInView } from "react-intersection-observer"

import ProjectHeading from "./project-heading"
import ProjectStack from "./project-stack"

import styles from "./project-item.module.scss"

const ProjectItem = ({ project }) => {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true })

  return (
    <li
      className={`${styles.projectItem} ${inView ? styles.projectItemVisible : null}`}
      style={{ backgroundImage: `url(${project.image})` }}
      ref={ref}
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
