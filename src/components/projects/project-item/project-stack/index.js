import React from "react"

import styles from "./project-stack.module.scss"

const ProjectStack = ({ stack }) => {
  return (
    <div className={styles.projectStack}>
      <h3 className="heading-tertiary-thin">Tech Stack</h3>
      <ul className={styles.list}>
        {stack.map((tech, index) => (
          <li className={styles.stackItem} key={index}>
            <img
              className={styles.logo}
              src={tech.logo}
              alt={`${tech.title} logo`}
            />
            <span className={styles.title}>{tech.title}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ProjectStack
