import React from "react"

import { prioritiesData } from "../../data"

import styles from "./priorities.module.scss"

const Priorities = () => {
  return (
   <section className={styles.prioritiesBackground}>
      <div className={styles.prioritiesWrapper}>
         { prioritiesData.map((priority, index) => 
            <div className={styles.priority} key={index}>
               <img src={priority.icon} alt={priority.altText} />
               <h2 className="text--md font--bold font--heading">{priority.title}</h2>
               <p className="text--xs">{priority.text}</p>
            </div>
         )}
      </div>
   </section>
  )
}

export default Priorities
