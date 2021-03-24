import React from "react"
import { Helmet } from "react-helmet"

import About from "../components/about"
import Banner from "../components/banner"
import Footer from "../components/footer"
import Navigation from "../components/navigation"
import Projects from "../components/projects"
import Priorities from "../components/priorities"
import Skills from "../components/skills"
import Timeline from "../components/timeline"
import Thanks from "../components/thanks"

import styles from './index.module.scss'

const Home = () => {

  return (
    <div className={`${styles.app} theme--default`} >
      <Helmet
        htmlAttributes={{
          lang: "en"
        }}
      >
        <meta charSet="utf-8" />
        <title>Ben Lammers</title>
      </Helmet>

      <Banner />
      <Navigation />
      <main>
        <About />
        <Priorities />
        <Skills />
        <Projects />
        <Timeline />
        <Thanks />
      </main>
      <Footer />
    </div>
  )
}

export default Home
