import React from "react"
import PageContainer from "../components/page-container"
import { graphql } from "gatsby"
import "./style.scss"
import GatsbyLink from "gatsby-link"
import DisqusTemplate from "../components/disqus/index"
import { Container, Row, Col } from "react-bootstrap"
import Tab from "../components/tab"
import { GatsbyImage, getImage } from "gatsby-plugin-image"


export default function BlogPost({ data }) {
  const image = getImage(data.markdownRemark.frontmatter.featureImage &&
    data.markdownRemark.frontmatter.featureImage)
  return (
    <PageContainer>
      <Tab title={data.markdownRemark.frontmatter.title} abstract={`mlab news - ${data.markdownRemark.excerpt}`} />
      <div className="blog-container text-dark">
       {data.markdownRemark.frontmatter.featureImage ? <span
          className="header"
        >
            <GatsbyImage
          role="img" aria-label={data.markdownRemark.frontmatter.featureImage.name}
            style={{ width: "100%", backgroundColor: "orange" }} image={image} alt={data.markdownRemark.frontmatter.featureImage.name} />
          <div className="inner" style={{ backgroundColor: "rgba(0,0,0,0.7)" }}>
            <div className="back-button">
              <button
                type="button"
                className="button"
                onClick={() => window.history.back()}
              >
                Back
              </button>
            </div>
            <div className="title-container">
              <h1 className="title text-wrap">
                {(data.markdownRemark.frontmatter.title).replace('-', ' ')}
              </h1>
            </div>
          </div>
        </span>: <span
          className="header"
          role="img" aria-label={`[placeholder.jpg]`}
          style={{
            backgroundImage: `url(
              ../[placeholder.jpg
            )`,
          }}
        >
          <div className="inner" style={{ backgroundColor: "rgba(0,0,0,0.7)" }}>
            <div className="back-button">
              <button
                type="button"
                className="button"
                onClick={() => window.history.back()}
              >
                Back
              </button>
            </div>
            <div className="title-container">
              <h1 className="title text-wrap">
                {data.markdownRemark.frontmatter.title}
              </h1>
            </div>
          </div>
        </span>}
        <div className="post bg-light">
          <div className=" d-flex flex-row flex-wrap justify-content-center ml-4 mb-4 mb-2">
            {data.markdownRemark.frontmatter.tags.map((tag, index) => (
              <GatsbyLink
                style={{ backgroundColor: "#90dc08", textTransform: 'lowercase' }}
                className="px-4 badge-pill m-1 text-white"
                key={tag + "-" + index}
                to={`/news/tag/${tag.replace(" ", "_")}`}
              >
                {tag}
              </GatsbyLink>
            ))}
          </div>
          <div style={{ padding: 12 }} className="row ml-4 mr-4 font-weight-bolder">
            <h5 className="col-sm-12 col-md-6 pl-0 row">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={18}
                height={18}
                fill="currentColor"
                className="bi bi-calendar3"
                viewBox="0 0 16 16"
              >
                <path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z" />
                <path d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
              </svg>

              {` : ${data.markdownRemark.frontmatter.date}`}
            </h5>
            <div className="col-sm-12 col-md-6 pl-0 row">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={18}
                height={18}
                fill="currentColor"
                className="bi bi-person-fill"
                viewBox="0 0 16 16"
              >
                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
              </svg>
              <h5>:</h5>
              <h5 style={{padding:0}} className="font-weight-bolder ml-1 btn pt-0 pb-0">
                <GatsbyLink
                  to={`/author/${data.markdownRemark.frontmatter.author.replace(
                    " ",
                    "_"
                  )}`}
                >{data.markdownRemark.frontmatter.author}
                </GatsbyLink>
              </h5>
            </div>
          </div>
          <div
            style={{ padding: 16 }}
            dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
          >

          </div>
        </div>
      </div>
      <br />
      <Container>
        <Row>
          <Col>
            <DisqusTemplate url={data.markdownRemark.frontmatter.path} title={data.markdownRemark.frontmatter.title} identifier={data.markdownRemark.frontmatter.path}></DisqusTemplate>
          </Col>
        </Row>
      </Container>
    </PageContainer>
  )
}
const fun = () => {
  // export
  const query = graphql
  `
  query BlogPostByPath($article: String!) {
    markdownRemark(frontmatter: { path: { eq: $article } }) {
      frontmatter {
        path
        title
        author
        date
        tags
        featureImage {
          id
          name
          childImageSharp{
            gatsbyImageData( formats: [AUTO, WEBP]
              width: 550
              height:550
              placeholder: BLURRED
            )
          }
        }
      }
      html
    }
  }
`

}
