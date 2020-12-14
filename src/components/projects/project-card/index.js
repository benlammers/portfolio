import React, { useState } from "react"
import { useInView } from "react-intersection-observer"
import { isMobile } from "react-device-detect";
import sprites from "../../../img/sprites.svg"

import SkillItem from "../../skill-item"

import styles from "./project-card.module.scss"

const ProjectCard = ({ project }) => {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true })

  const [flip, setFlip] = useState(false)

  return (
    <li className={styles.cardWrapper}>
      <button className={`${styles.card} ${inView ? styles.cardVisible : null} ${flip ? styles.cardFlip : null}`} ref={ref}
      onMouseEnter={!isMobile ? () => setFlip(true) : null} onMouseLeave={!isMobile ? () => setFlip(false) : null} onClick={() => setFlip(!flip)} >
        <div className={[styles.cardSide, styles.cardFront].join(" ")}>
          <img src={project.image} alt={project.title}/>
          <div className={styles.details}>
            <h2 className="text--lg font--bold">{project.title}</h2>
            <p className="text--md">{project.description}</p>
          </div>
          <span className="text--sm">{isMobile ? "Tap" : "Hover"} Card for Details</span>
        </div>
        <div className={[styles.cardSide, styles.cardBack].join(" ")}>
          <div className={styles.heading}>
            <h2 className="text--lg font--bold">{project.role}</h2>
            <h3 className="text--lg">{project.type}</h3>
          </div>
          <h2 className="text--lg space--lg">Tech Stack</h2>
          <ul className={styles.stack}>
            {project.stack.map((skill, index) => (
              <SkillItem skill={skill} key={index} />
            ))}
          </ul>
          {project.buttons && 
            <div className={styles.buttons}>
              {project.buttons.map((button, index) => 
                <a className="button" href={button.link} target="_blank" rel="noopener noreferrer" key={index}>
                  <span className="text--sm">{button.text}</span>
                  <svg>
                    <use href={sprites + button.icon} />
                  </svg>
                </a>
              )}
            </div>
          }
        </div>
      </button>
    </li>
  )
}

export default ProjectCard
