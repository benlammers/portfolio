import React from "react"

import { interestsData } from "../../data"

import Interest from "./interest"

import styles from "./about.module.scss"

const About = () => {
  return (
    <section className={styles.about} id="about">
      <div className={styles.heading}>
        <h1 className={`${styles.title} heading-primary`}>Hi, I'm Ben</h1>
        <p className={`${styles.text} text-secondary`}>
          Ever since I was introduced to writing code I have strived to find the
          simplest and most effective solutions. I have grown a passion for web
          development and
        </p>
      </div>
      <ul className={styles.interests}>
        {interestsData.map((interest, index) => (
          <Interest data={interest} key={index} />
        ))}
      </ul>
    </section>
  )
}

export default About
