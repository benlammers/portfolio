import React from "react"

import SkillSet from "./skill-set"

import { skillsData } from "../../data"

import styles from "./skills.module.scss"

const Skills = () => {
  return (
    <section className={styles.skills} id="skills">
      <div className={styles.heading}>
        <h1 className="heading-primary">Skill Set</h1>
        <p className="text-secondary">
          Familiar with a wide range of technologies ranging from strong
          expertise in some to beginning to learn others
        </p>
      </div>
      <ul className={styles.list}>
        {skillsData.map((skillSet, index) => (
          <SkillSet data={skillSet} key={index} />
        ))}
      </ul>
    </section>
  )
}

export default Skills
