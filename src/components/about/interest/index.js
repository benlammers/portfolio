import React from "react"
import sprites from "../../../img/sprites.svg"
import { useInView } from "react-intersection-observer"

import styles from "./interest.module.scss"

const Interest = ({ data }) => {
  let { icon, title, link, action } = data
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true })

  return (
    <li className={`${styles.interest} ${inView ? styles.interestVisible : null}`} ref={ref}>
      <p className={styles.action}>{action}</p>
      <a
        className={styles.item}
        href={link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <p className={styles.label}>{title}</p>
        <svg className={styles.logo}>
          <use href={sprites + icon} />
        </svg>
      </a>
    </li>
  )
}

export default Interest
