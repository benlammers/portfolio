import React from 'react'

import styles from './line.module.scss'

const Line = ({ timelineData }) => {
   return (
      <div className={styles.lineWrapper}>
         {timelineData.map((_, index) => 
            <div className={styles.line} key={index}>
               <div className={styles.circle} />
            </div>
         )}
      </div>
   )
}

export default Line