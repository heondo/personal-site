import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Image from "./image"

import aboutMeStyles from "./about-me.module.css"

const AboutMe = ({}) => (
  <div>
    <div>
      <h1>ABOUT</h1>
      <div className={aboutMeStyles.profileImageContainer}>
        <Image />
      </div>
      <div>
        My name is Heondo Kim, I am an aspiring applications developer located
        in Irvine, CA. I hope to use my Data Analyst experience to create
        software applications and solve complex data problems.
      </div>
      <div>
        I graduated from UCSB with a degree Financial Mathematics and Statistics
        and came out with a new interest, programming. I think it's very
        straightforward why I liked programming: the rules and end result are
        clearly defined, you can approach the problem however you like, and TEST
        things along the way. If only I could test my essays the same way...soon
        enough with AI. With the added bonus of being automated.
      </div>
      <br />

      <div>
        I made my initial website in a weekend and it's has served me all right,
        but I want to share some of the random coding bits that I learn and felt
        a new website would be ideal.
      </div>
      <br />
      <div>
        Currently: Creating a React Native application using Firebase for its
        database, authentication, and storage.
      </div>
    </div>
  </div>
)

AboutMe.propTypes = {}

AboutMe.defaultProps = {}

export default AboutMe
