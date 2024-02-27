const path = require('path');

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;
  const blogTemplate = path.resolve('src/templates/blog-page.js');
  const PortfolioTemplate = path.resolve('src/templates/Portfolio-page.js');
  

  const blogs = graphql(
    `
      {
        allMicrocmsBlog {
          totalCount
        }
      }
    `
  ).then((result) => {
    if (result.errors) {
      Promise.reject(result.errors);
    }

    const PerPage = 10;
    const pageCount = Math.ceil(result.data.allMicrocmsBlog.totalCount / PerPage);

    for (let i = 0; i < pageCount; i++) {
      createPage({
        path: `/blog/page/${i + 1}`,
        component: blogTemplate,
        context: {
          limit: PerPage,
          skip: i * PerPage,
        },
      });
    }
  });

  const Portfolios = graphql(
    `
      {
        allMicrocmsPortfolio {
          totalCount
        }
      }
    `
  ).then((result) => {
    if (result.errors) {
      Promise.reject(result.errors);
    }

    const PerPage = 16;
    const pageCount = Math.ceil(result.data.allMicrocmsPortfolio.totalCount / PerPage);

    for (let i = 0; i < pageCount; i++) {
      createPage({
        path: `/portfolio/page/${i + 1}`,
        component: PortfolioTemplate,
        context: {
          limit: PerPage,
          skip: i * PerPage,
        },
      });
    }
  });

  return Promise.all([blogs, Portfolios]);
};

exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions;

  return new Promise(resolve => {
    const oldPage = Object.assign({}, page);
    if (page.path !== '/404.html' && typeof page.path === 'string' && !page.path.endsWith('/')) {
      page.path += '/';
    }

    if (page.path !== oldPage.path) {
      deletePage(oldPage);
      createPage(page);
    }

    resolve();
  });
};