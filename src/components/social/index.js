import React from "react"
import sprites from "../../img/sprites.svg"

import styles from "./social.module.scss"

const Social = ({ icon, aValues, classNames = [] }) => {
  classNames = [
    styles.social,
    ...classNames.map(className => styles[className]),
  ].join(" ")

  return (
    <li className={classNames}>
      <a {...aValues}>
        <svg>
          <use href={sprites + icon} />
        </svg>
      </a>
    </li>
  )
}

export default Social
