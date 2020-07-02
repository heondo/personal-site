import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import AboutMe from "../components/about-me"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <AboutMe />
  </Layout>
)

export default IndexPage
