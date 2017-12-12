import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

const Template = ({data, location, pathContext}) => {
  console.log(pathContext);
  const {markdownRemark: post} = data;
  const {frontmatter, html} = post;
  const {title, date} = frontmatter;
  const {prev, next} = pathContext;

  return (
    <div>
      <Helmet title={`${title} - My Blog`} />

      <div>
        <h1>{title}</h1>
        <span>{date}</span>

        <div dangerouslySetInnerHTML={{__html: html}} />

        <p>
          {prev && (
            <div style={{float: 'left'}}>
              <Link to={prev.frontmatter.path}>
                Previous: {prev.frontmatter.title}
              </Link>
            </div>
          )}

          {next && (
            <div style={{float: 'right'}}>
              <Link to={next.frontmatter.path}>
                Next: {next.frontmatter.title}
              </Link>
            </div>
          )}
          <br/>
        </p>
      </div>
    </div>
  )
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: {path: {eq: $path}}) {
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        path
        tags
        excerpt
      }
    }
  }
`


export default Template;