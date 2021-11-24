import React, {useState} from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"
import '../styles/global.css'
import TopicSelection from "../components/topicSelection"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  const uniquePostTopics = retrieveAllUniquePostTopics(posts);

  const [topics, setTopics] = useState([]);

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <Seo title="All posts" />
        <Bio />
        <p>
          No blog posts found. Add markdown posts to "content/blog" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).
        </p>
      </Layout>
    )
  }

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="All posts" />
      <Bio />
      <TopicSelection topicList={uniquePostTopics} selectedTopics={topics} setSelectedTopics={setTopics} />
      <ol style={{ listStyle: `none` }}>
        {posts.map(post => {
          const title = post.frontmatter.title || post.fields.slug
          if(topics.length === 0 || topics.map(elem => {return post.frontmatter.topic.includes(elem)}).includes(true))
            return (
              <li key={post.fields.slug}>
                <article
                  className="post-list-item"
                  itemScope
                  itemType="http://schema.org/Article"
                >
                  <header>
                    <h2>
                      <Link to={post.fields.slug} itemProp="url">
                        <span itemProp="headline">{title}</span>
                      </Link>
                    </h2>
                    <small>{post.frontmatter.date} topics: {post.frontmatter.topic || 'nothing I guess :('}</small>
                  </header>
                  <section>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: post.frontmatter.description || post.excerpt,
                      }}
                      itemProp="description"
                    />
                  </section>
                </article>
              </li>
            )
        })}
      </ol>
    </Layout>
  )

  function retrieveAllUniquePostTopics(posts)
  {
    let allTopics = [];
    posts.forEach(post => {
      if(typeof(post.frontmatter.topic) !== typeof(null))
      {
        const multipleTopicArray = post.frontmatter.topic.split(',').map(elem => elem.trim());
        const filteredTopicArray = multipleTopicArray.filter(elem => {return !allTopics.includes(elem)});
        return allTopics.push(...filteredTopicArray);
      }
    });

    return allTopics;
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC },
      filter: {frontmatter: {visible: {eq: true }}}
      ) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
          topic
        }
      }
    }
  }
`
