import React from "react"
import { useInView } from "react-intersection-observer"

import { skillsData } from "../../data"

import SkillItem from "../skill-item"

import styles from "./skills.module.scss"

const SkillSet = ({ data }) => {
  const [ref, inView] = useInView({ threshold: 0.4, triggerOnce: true })
  return (
    <li className={`${styles.skillSet} ${inView ? styles.skillSetVisible : null}`} ref={ref}>
      <h2 className="text--md font--heading">{data.phrase}</h2>
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
        <h1 className="text--xl font--heading font--bold">Skill Set</h1>
        <p className="text--md font--heading">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam volutpat, libero quis sodales feugiat, 
          lectus turpis tristique ex, vitae tristique.
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
