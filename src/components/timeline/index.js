import React from 'react'
import { useInView } from "react-intersection-observer"

import { timelineData } from "../../data"

import Line from './line'

import styles from './timeline.module.scss'

const TimelineItem = ({ item, index }) => {
   const [ref, inView] = useInView({ threshold: 0.6, triggerOnce: true })

   let rows =  `${(index * 2) + 1} / span 3`
   let isOdd = index % 2 === 1
   
   return (
      <article className={`${styles.item} ${isOdd ? styles.itemOdd : ""} ${inView ? styles.itemVisible : ""}`} key={index}
      style={{ gridRow: rows }} ref={ref} >
         <span className={`text--md color--secondary ${styles.type} ${styles[`type${item.type}`]}`}>{item.type}</span>
         <span className={`text--sm ${styles.date}`}>{item.date}</span>
         <div className={styles.details}>
            <h3 className="text--md font--bold space--sm">{item.title}</h3>
            <span className="text--sm">{item.description}</span>
         </div>
         <a className={`text--sm ${styles.link}`} href={item.link} aria-label={item.linkAriaLabel} target="_blank" rel="noopener noreferrer">{item.linkText}</a>
      </article>
   )
}

const Timeline = () => (
   <section className="section section--primary" id="timeline">
      <div className="heading">
         <h2 className="text--xl font--heading font--bold">My Timeline</h2>
         <p className="text--md font--heading">
            Notable achievements and events on my road to explore and master concepts
            in modern web development.
         </p>
      </div>
      <div className={styles.timeline}>
         <Line timelineData={timelineData} />
         {timelineData.map((item, index) => <TimelineItem item={item} index={index} key={index} /> )}
      </div>
   </section>
)

export default Timeline