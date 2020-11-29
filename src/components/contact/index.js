import React from "react"
import sprites from "../../img/sprites.svg"

import styles from "./contact.module.scss"

const Contact = () => {
  return (
    <section className={styles.contact} id="contact">
      <h1 className="heading-primary--accent">Send Me a Message</h1>
      <p className={`${styles.text} text-primary--accent`}>
        Whether it be a business proposition or an interest in sharing web
        development knowledge I would love to hear from you
      </p>
      <a
        className={`${styles.contactButton} button--accent`}
        href="mailto:21benlammers@gmail.com"
      >
        <svg className="button__icon">
          <use href={sprites + "#icon-email"} />
        </svg>
        <p className="text-primary">Email Me</p>
      </a>
    </section>
  )
}

export default Contact
