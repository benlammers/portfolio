import React from 'react'

import { socialData } from '../../data'

import Social from '../social'

import styles from './footer.module.scss'

const Footer = () => {
   return (
      <footer
         className={styles.footer} >
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
