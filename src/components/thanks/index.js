import React from "react"

import styles from "./thanks.module.scss"

const Thanks = () => (
  <section className={styles.thanksBackground}>
    <div className={styles.thanks}>
      <p className="text--sm color--secondary">
        Thanks to&nbsp;
        <a
          className="text--sm color--secondary animated-link"
          href="https://ericlammers.dev/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Eric Lammers
        </a>
        &nbsp;for introducing me to my passion
      </p>
      <p className="text--sm color--secondary">
        And to Madison Scheerhoorn for supporting it
      </p>
    </div>
  </section>
)


export default Thanks