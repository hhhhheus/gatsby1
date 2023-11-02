import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/seo'

// Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>Helping you grow your skills. I hope to share quality training resources in regards to certification tracks as well as ad hoc guides on various topics. This will likely be through blog posts.</p>
      <p>Though that is the goal, this website is an experiment to better understand Gatsby while leveraging GitHub and Azure for delivery.</p>
      <StaticImage
        alt="picture of seedling phases"
        src="../images/growth.jpg"
      />
    </Layout>
  )
}

export const Head = () => <Seo title="Home Page" />

// Step 3: Export your component
export default IndexPage