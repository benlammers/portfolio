import React, { useEffect, useState } from "react"

import { quotesData, socialData } from "../../data"

import { ExternalIcon } from "../../img/icons"


import Name from "./name"
import Social from "../social"

import styles from "./banner.module.scss"

const randomIntInRange = max => {
  return Math.floor(Math.random() * Math.floor(max))
}

const Banner = () => {
  const [quote, setQuote] = useState({})

  useEffect(() => {
    setQuote(quotesData[randomIntInRange(quotesData.length)])
  }, [])

  return (
    <header className={styles.banner}>
      <a 
        className={styles.syntax} 
        href="https://ben-lammers-syntax.netlify.app/"                   
        target="_blank"
        rel="noopener noreferrer"
      >
        View Version Reviewed <br />by Syntax Podcast<ExternalIcon />     
      </a>

      <ul className={styles.socials}>
        {socialData.map((social, index) => (
          <Social
            classNames={[social.className, "socialAccent"]}
            icon={social.icon}
            aValues={social.aValues}
            key={index}
          />
        ))}
      </ul>
      <div className={styles.text}>
        <h1>
          <span className="visually-hidden">Ben Lammers</span>
          <Name />
        </h1>
        <div className={styles.line} />
        <h2 className={styles.title}>
          Full Stack Developer
        </h2>
      </div>
      <div className={styles.quote}>
        <q className="text--md">{quote.quote}</q>
        <p className="text--md">- {quote.author}</p>
      </div>
    </header>
  )
}

export default Banner
