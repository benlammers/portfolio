import React from "react"
import { useInView } from "react-intersection-observer"

import { prioritiesData } from "../../data"

import styles from "./priorities.module.scss"

const Priorities = () => {
   const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true })

  return (
   <section className={styles.prioritiesBackground}>
      <div className={`${styles.prioritiesWrapper} ${inView ? styles.priorityVisible : ""}`} ref={ref}>
         { prioritiesData.map((priority, index) => 
            <div className={styles.priority} key={index}>
               <img src={priority.icon} alt={priority.altText} />
               <h2 className="text--lg font--bold font--heading">{priority.title}</h2>
               <p className="text--md">{priority.text}</p>
            </div>
         )}
      </div>
   </section>
  )
}

export default Priorities
