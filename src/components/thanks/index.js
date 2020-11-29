import React from "react"

import styles from "./thanks.module.scss"

const Thanks = () => {
  return (
    <section className={styles.thanks}>
      <p className="text-secondary">
        {"Thanks to "}
        <a
          className="text-secondary"
          href="https://ericlammers.dev/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Eric Lammers
        </a>
        {" for introducing me to my passion"}
      </p>
      <p className="text-secondary">
        And to Madison Scheerhoorn for supporting it
      </p>
    </section>
  )
}

export default Thanks
