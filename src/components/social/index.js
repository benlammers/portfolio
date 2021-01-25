import React from "react"

import styles from "./social.module.scss"

const Social = ({ icon, aValues, classNames = [] }) => {
  classNames = [
    styles.social,
    ...classNames.map(className => styles[className]),
  ].join(" ")

  return (
    <li className={classNames}>
      <a {...aValues}>{icon}</a>
    </li>
  )
}

export default Social
