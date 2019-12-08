import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import Seo from "../components/seo"
import styled from "styled-components"

import config from "../utils/config"

const ImageConatiner = styled.div`
  max-width: 300px;
  margin-bottom: 1.45rem;
`

const IndexPage = () => (
  <Layout>
    <Seo
      title="Home"
      description="Welcome to GatsbyJs"
      url={`${config.siteUrl}`}
    />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <ImageConatiner>
      <Image />
    </ImageConatiner>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
