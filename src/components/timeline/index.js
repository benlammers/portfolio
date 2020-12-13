import React from 'react'

import Line from './line'

import { timelineData } from "../../data"

import styles from './timeline.module.scss'

const TimelineItem = ({ item, index }) => {
   let rows = `${(index * 2) + 1} / span 3`

   return (
      <div className={index % 2 === 0 ? styles.item : [styles.item, styles.itemOdd].join(" ")} key={index}
         style={{ gridRow: rows }}>
            <span className={["text--md color--secondary", styles.type, styles[`type${item.type}`]].join(" ")}>{item.type}</span>
            <span className={["text--sm", styles.date].join(" ")}>{item.date}</span>
            <div className={styles.details}>
               <h2 className="text--md font--bold space--sm">{item.title}</h2>
               <span>{item.description}</span>
            </div>
            <a className={["text--sm", styles.link].join(" ")} href={item.link} target="_blank" rel="noopener noreferrer">{item.linkText}</a>
      </div>
   )
}

const Timeline = () => {
   return (
      <section className="section section--primary" id="timeline">
         <div className="heading">
            <h1 className="text--lg font--heading font--bold">My Timeline</h1>
            <p className="text--sm font--heading">
               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam volutpat, libero quis sodales feugiat, 
               lectus turpis tristique ex, vitae tristique.
            </p>
         </div>
         <div className={styles.timeline}>
            <Line timelineData={timelineData} />
            {timelineData.map((item, index) => <TimelineItem item={item} index={index} key={index} /> )}
         </div>
      </section>
   )
}

export default Timeline