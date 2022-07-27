import React from "react"
import { Disqus, CommentCount } from "gatsby-plugin-disqus"
/**
 * 
 * @param url:  
 * @returns 
 */
const DisqusTemplate = ({ url, title, identifier }) => {
  var disqusConfig = {
    url: `http://localhost:8000/news${url}`,
    identifier: identifier,
    title: title,
  }

  return (
    <>
      <CommentCount config={disqusConfig}></CommentCount>
      <Disqus config={disqusConfig} />
    </>
  )
}

export default DisqusTemplate
