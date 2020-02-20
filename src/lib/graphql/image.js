import { graphql } from 'gatsby'

export const FluidTracedSVG = graphql`
  fragment FluidTracedSVG on File {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
`

export const FluidUncompressed = graphql`
  fragment FluidUncompressed on File {
    childImageSharp {
      fluid(maxWidth: 2400, quality: 100) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`
