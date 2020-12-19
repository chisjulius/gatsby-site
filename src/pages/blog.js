import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import {Link} from 'gatsby'
import Layout from '../components/Layout'

const BlogPage =() =>{
  const data = useStaticQuery(graphql`
  query {
    allMarkdownRemark{
        edges{
          node{
            frontmatter{
              title
              date
              author
            }
            }
          }
        }
      }
  `)
    return (
        <Layout>
          <div>
            <h4>Latest posts</h4>
            { data.allMarkdownRemark.edges.map(edge =>(
                <div>
                    <h5>{edge.node.frontmatter.title}</h5>
                    <small>posted by {edge.node.frontmatter.author} on {edge.node.frontmatter.date}</small>
                    <br/>
                    <br/>
                    <hr/>
                </div>
            )) }
        </div>
        </Layout>

    )
}


export default BlogPage