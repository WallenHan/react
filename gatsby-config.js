/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * @emails react-core
<<<<<<< HEAD
*/
=======
 */
>>>>>>> upstream/master

'use strict';

module.exports = {
  siteMetadata: {
<<<<<<< HEAD
    title: 'React: A JavaScript library for building user interfaces',
    siteUrl: 'https://reactjs.org',
    rssFeedTitle: 'React',
    rssFeedDescription: 'A JavaScript library for building user interfaces',
=======
    title: 'React 中文文档: 用于构建用户界面的 JavaScript 库',
    siteUrl: 'https://doc.react-china.org',
    rssFeedTitle: 'React 中文文档',
    rssFeedDescription: '用于构建用户界面的 JavaScript 库',
>>>>>>> upstream/master
  },
  mapping: {
    'MarkdownRemark.frontmatter.author': 'AuthorYaml',
  },
  plugins: [
    'gatsby-source-react-error-codes',
    'gatsby-transformer-authors-yaml',
<<<<<<< HEAD
    'gatsby-plugin-netlify',
    'gatsby-plugin-glamor',
    'gatsby-plugin-react-next',
    'gatsby-plugin-twitter',
=======
    'gatsby-transformer-home-example-code',
    'gatsby-plugin-netlify',
    'gatsby-plugin-glamor',
    'gatsby-plugin-react-next',
    // 'gatsby-plugin-twitter',
>>>>>>> upstream/master
    {
      resolve: 'gatsby-plugin-nprogress',
      options: {
        color: '#61dafb',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'packages',
        path: `${__dirname}/content/`,
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-responsive-iframe',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 840,
            },
          },
          'gatsby-remark-autolink-headers',
<<<<<<< HEAD
=======
          {
            resolve: 'gatsby-remark-code-repls',
            options: {
              defaultText: 'Try it on CodePen',
              directory: `${__dirname}/examples/`,
              externals: [
                `//unpkg.com/react/umd/react.development.js`,
                `//unpkg.com/react-dom/umd/react-dom.development.js`,
              ],
              redirectTemplate: `${__dirname}/src/templates/codepen-example.js`,
              target: '_blank',
            },
          },
          {
            resolve: 'gatsby-remark-embed-snippet',
            options: {
              classPrefix: 'gatsby-code-',
              directory: `${__dirname}/examples/`,
            },
          },
>>>>>>> upstream/master
          'gatsby-remark-use-jsx',
          {
            resolve: 'gatsby-remark-prismjs',
            options: {
              classPrefix: 'gatsby-code-',
            },
          },
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
        ],
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-45453476-6',
      },
    },
    {
      resolve: 'gatsby-plugin-feed',
      options: {
        query: `
         {
          site {
            siteMetadata {
              title: rssFeedTitle
              description: rssFeedDescription
              siteUrl
              site_url: siteUrl
            }
          }
        }`,
        feeds: [
          {
            serialize: ({query: {site, allMarkdownRemark}}) => {
              return allMarkdownRemark.edges.map(edge => {
                return Object.assign(
                  {},
                  {
                    title: edge.node.frontmatter.title,
                    description: edge.node.html,
                    date: require('moment')(edge.node.fields.date).format(
                      'MMMM DD, YYYY, h:mm A',
                    ),
                    url: site.siteMetadata.siteUrl + edge.node.fields.slug,
                    guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  },
                );
              });
            },
            query: `
              {
                  allMarkdownRemark
                  (limit: 10,
                  filter: {id: {regex: "/blog/"}},
                  sort: {fields: [fields___date],
                  order: DESC}) {
                    edges {
                      node {
                        fields {
                          date
                          slug
                        }
                        frontmatter {
                          title
                        }
                        html
                      }
                    }
                  }
                }
            `,
            output: '/feed.xml',
          },
        ],
      },
    },
    'gatsby-plugin-react-helmet',
<<<<<<< HEAD
=======
    'gatsby-plugin-catch-links',
>>>>>>> upstream/master
  ],
};
