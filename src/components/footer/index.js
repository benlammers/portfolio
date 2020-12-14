import React from 'react'
import { useInView } from "react-intersection-observer"

import { socialData } from '../../data'

import Social from '../social'

import styles from './footer.module.scss'

const Footer = () => {
   const [ref, inView] = useInView({ threshold: 0.6, triggerOnce: true })

   return (
      <footer className={styles.footerWrapper} >
         <div className={`${styles.footer} ${inView ? styles.footerVisible : null}`} ref={ref}> 
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
            <div className={styles.credit}>
               <span className="text--md font--bold space--sm">Design Inspired by</span> 
               <div className={`space--lg ${styles.people}`}>
                  <a className={`text--md animated-link ${styles.link}`} href="https://www.udemy.com/course/advanced-css-and-sass/" target="_blank" rel="noopener noreferrer">Jonas Schmedtmann</a>
                  <span className="text--md">and</span>
                  <a className={`text--md animated-link ${styles.link}`} href="https://mattfarley.ca/" target="_blank" rel="noopener noreferrer">Matt Farley</a>
               </div>
               <span className="text--sm">Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></span>
            </div>
         </div>
      </footer>
   )
}

export default Footer
