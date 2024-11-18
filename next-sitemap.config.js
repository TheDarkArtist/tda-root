/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://thedarkartist.in",
  generateRobotsTxt: true,
  sitemapSize: 5000,
  changefreq: "daily",
  priority: 0.7,
  exclude: ["/404", "/tda", "/api"],
};
