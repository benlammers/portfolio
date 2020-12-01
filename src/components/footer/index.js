import React from 'react'
import { useInView } from "react-intersection-observer"

import { socialData } from '../../data'

import Social from '../social'

import styles from './footer.module.scss'

const Footer = () => {
   const [ref, inView] = useInView({ threshold: 0.4, triggerOnce: true })

   return (
      <footer className={`${styles.footer} ${inView ? styles.footerVisible : null}`} ref={ref} >
         <ul className={styles.socials}>
            {socialData.map((social, index) => (
               <Social
                  classNames={[social.className]}
                  icon={social.icon}
                  aValues={social.aValues}
                  key={index}
               />
            ))}
         </ul>
      </footer>
   )
}

export default Footer
