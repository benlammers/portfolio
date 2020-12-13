import React from "react"

import styles from "./about.module.scss"

const About = () => {
  return (
    <section className={styles.about} id="about">
      <h1 className="text--lg font--heading font--bold">Hi, I'm Ben</h1>
      <p className="text--sm font--heading">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at consequat urna. 
        Proin aliquam nunc magna, a euismod justo porta et. Vivamus commodo dolor sit amet eros 
        pellentesque, sagittis eleifend nunc auctor. Proin in magna sollicitudin, rhoncus dolor 
        sit amet, posuere magna.
      </p>
    </section>
  )
}

export default About
