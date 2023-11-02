// Step 1: Import React
import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import Layout from '../components/layout'
import Seo from '../components/seo'

// Step 2: Define your component
const AboutPage = () => {
  return (
    <Layout pageTitle="About Me">
      <p>I work in Information Security and I hold the following certifications:</p>
      <StaticImage
        alt="BTL1 certified"
        src="../images/btl1certified.png"
        width="175"
      />
       <StaticImage
        alt="CISSP certified"
        src="../images/cisspcertified.png"
        width="175"
      />
    </Layout>
  )
}
export const Head = () => <Seo title="About Me" />
// Step 3: Export your component
export default AboutPage