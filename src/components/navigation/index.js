import React from "react"
import scrollTo from "gatsby-plugin-smoothscroll"

import styles from "./navigation.module.scss"

const Navigation = () => {
  return (
    <nav className={styles.navigation}>
      <ul className={styles.links}>
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
