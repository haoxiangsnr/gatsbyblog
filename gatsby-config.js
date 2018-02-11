module.exports = {
    pathPrefix: '/gatsbydeploy',
    siteMetadata: {
        title: 'HAO羊羽',
        nav: ['resume', 'archive'],
        links: ['http://resume.haoxiang.tech', '/archive']
    },
    plugins: [
        'gatsby-plugin-react-helmet',
        {
            resolve: `gatsby-plugin-nprogress`,
            options: {
                // Setting a color is optional.
                color: `tomato`,
                // Disable the loading spinner.
                showSpinners: false,
            }
        },
        {
            resolve: 'gatsby-transformer-remark',
            options: {
                plugins: [
                    {
                        resolve: 'gatsby-remark-prismjs',
                        options: {classPrefix: "language-"}
                    }
                ]
            }
        },
        {
            resolve: 'gatsby-plugin-less',
            options: {
                theme: {
                    "text-color": '#fff',
                    "meituan-color": "#1cb6a0"
                }
            }
        },
        {
          resolve: 'gatsby-plugin-typography',
          options: {
            pathToConfigModule: 'src/utils/typography'
          }
        },
        {
          resolve: 'gatsby-source-filesystem',
          options: {
            name: 'src',
            path: `${__dirname}/src/pages/posts`,
          }
        }
    ]
};
  