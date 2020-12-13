import React from 'react'

import styles from './line.module.scss'

const Line = ({ timelineData }) => {
   return (
      <div className={styles.lineWrapper}>
         {timelineData.map(() => 
            <div className={styles.line}>
               <div className={styles.circle} />
            </div>
         )}
      </div>
   )
}

export default Line