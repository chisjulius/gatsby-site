module.exports = {
    plugins: [
        "gatsby-plugin-catch-links",
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name:"src",
                path: `${__dirname}/src/`
            }
        },
        "gatsby-transformer-remark"
    ],
}