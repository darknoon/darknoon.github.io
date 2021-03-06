import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import React from 'react'
import Layout from '../components/layout'

const imsz = 300
const imrt = 0.6

const BoxOverImage = ({ image }) => (
  <div style={{ position: 'relative' }}>
    <Img fixed={image.fixed} style={{ width: imsz }} />
  </div>
)

const IndexPage = ({ data }) => (
  <Layout>
    <BoxOverImage image={data.image.childImageSharp} />
    <p>
      I am working on machine learning and realtime graphics for creative
      applications.
    </p>
    <p>
      <Link to="/projects/">Recent projects</Link>
    </p>
    <p>
      Old <Link to="/cv/">iOS and Mac projects</Link> and{' '}
      <Link to="/old">blog</Link>.
    </p>
    <p>
      <a href="http://twitter.com/andpoul">twitter</a>{' '}
      <a href="https://github.com/darknoon/">github</a>
    </p>
  </Layout>
)

export const query = graphql`
  query {
    image: file(relativePath: { eq: "resources/wubba-lubba-dub-dub.jpg" }) {
      childImageSharp {
        fixed(width: 300) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

export default IndexPage
