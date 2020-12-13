import React from "react"
import scrollTo from "gatsby-plugin-smoothscroll"
import { useInView } from "react-intersection-observer"

import styles from "./navigation.module.scss"

const SECTIONS = [
  "about",
  "skills",
  "projects",
  "timeline"
]

const Navigation = () => {
  const [ref, inView] = useInView({ threshold: 1, triggerOnce: true })

  return (
    <nav className={styles.navigation}>
      <ul className={`${styles.links} ${inView ? styles.linksVisible : null}`} ref={ref}>
        {SECTIONS.map((section, index) => 
          <li className={styles.link} key={index}>
            <button className="text--lg color--primary" onClick={() => scrollTo(`#${section}`)}>{section}</button>
          </li>
        )}
      </ul>
    </nav>
  )
}

export default Navigation
