import React from "react"
import { useInView } from "react-intersection-observer"

import { skillsData } from "../../data"

import SkillItem from "../skill-item"

import styles from "./skills.module.scss"

const SkillSet = ({ data }) => {
  const [ref, inView] = useInView({ threshold: 0.6, triggerOnce: true })
  return (
    <li className={`${styles.skillSet} ${inView ? styles.skillSetVisible : null}`} ref={ref}>
      <span className="text--md font--heading">{data.phrase}</span>
      <ul className={styles.skillList}>
        {data.items.map((skill, index) => (
          <SkillItem skill={skill} key={index} />
        ))}
      </ul>
    </li>
  )
}

const Skills = () => {
  return (
    <section className="section section--primary" id="skills">
      <div className="heading">
        <h2 className="text--xl font--heading font--bold">Skill Set</h2>
        <p className="text--md font--heading">
          A variety of frameworks, libraries and languages that I have 
          had the oppurtunity to work with.
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
