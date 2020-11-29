import React from "react"
import { Helmet } from "react-helmet"

import About from "../components/about"
import Banner from "../components/banner"
import Contact from "../components/contact"
import Footer from "../components/footer"
import Navigation from "../components/navigation"
import Projects from "../components/projects"
import Skills from "../components/skills"
import Thanks from "../components/thanks"

const Home = () => {
  return (
    <div className="orange-theme orange-transition" style={{backgroundColor: "rgb(244, 161, 39)"}}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Ben Lammers</title>
      </Helmet>
      
      <Banner />
      <Navigation />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Thanks />
      <Footer />
    </div>
  )
}

export default Home
