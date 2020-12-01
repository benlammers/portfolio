import React from "react"
import scrollTo from "gatsby-plugin-smoothscroll"
import { useInView } from "react-intersection-observer"

import styles from "./navigation.module.scss"

const Navigation = () => {
  const [ref, inView] = useInView({ threshold: 0.8, triggerOnce: true })

  return (
    <nav className={styles.navigation}>
      <ul className={`${styles.links} ${inView ? styles.linksVisible : null}`} ref={ref}>
        <li className={styles.link}>
          <button className="heading-secondary--accent" onClick={() => scrollTo("#about")}>About</button>
        </li>
        <li className={styles.link}>
          <button className="heading-secondary--accent" onClick={() => scrollTo("#skills")}>Skill Set</button>
        </li>
        <li className={styles.link}>
          <button className="heading-secondary--accent" onClick={() => scrollTo("#projects")}>Projects</button>
        </li>
        <li className={styles.link}>
          <button className="heading-secondary--accent" onClick={() => scrollTo("#contact")}>Contact</button>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
