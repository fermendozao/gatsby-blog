import React from 'react'
import Link from 'gatsby-link'

const IndexPage = ({data}) => {
  console.log('here is da data', data);
  const { edges: posts } = data.allMarkdownRemark;
  return (
    <div>
      {posts.map(({node: post}) => {
        const { frontmatter } = post

        return (
          <div>
            <h2>
              <Link to={frontmatter.path}>
                {frontmatter.title}
              </Link>
            </h2>
            {frontmatter.date}
            {frontmatter.excerpt}
          </div>
        )
      })}
    </div>
  )
}

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            path
            tags
            excerpt
          }
        }
      }
    }
  }
`

export default IndexPage