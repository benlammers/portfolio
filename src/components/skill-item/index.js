import React from "react"

import styles from "./skill-item.module.scss"

const SkillItem = ({ skill }) => {
   let { logo, title } = skill
   
   return (
     <li className={styles.skillItem}>
       <img className={styles.logo} src={logo} alt={`${title} logo`} />
       <h3 className="text--sm font--bold font--heading">{title}</h3>
     </li>
   )
}

export default SkillItem