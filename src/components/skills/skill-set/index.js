import React from "react"
import { useInView } from "react-intersection-observer"

import styles from "./skill-set.module.scss"

const SkillItem = ({ data }) => {
  let { logo, title, percent } = data
  
  return (
    <li className={styles.skillItem}>
      <img className={styles.logo} src={logo} alt={`${title} logo`} />
      <h3 className={`${styles.title} heading-tertiary`}>{title}</h3>
      <div className={styles.bar} style={{ width: percent }} />
    </li>
  )
}

const SkillSet = ({ data }) => {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true })

  return (
    <li className={`${styles.skillSet} ${inView ? styles.skillSetVisible : null}`} ref={ref}>
      <h2 className="heading-secondary">{data.title}</h2>
      <ul className={styles.list}>
        {data.skills.map((skill, index) => (
          <SkillItem data={skill} key={index} />
        ))}
      </ul>
    </li>
  )
}

export default SkillSet
