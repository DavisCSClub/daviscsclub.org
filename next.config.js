const withCSS = require('@zeit/next-css');
module.exports = withCSS({
  distDir: 'build',
  exportPathMap: async () => ({
    '/': { page: '/' },
    '/apparel': { page: '/apparel' },
    '/signin' : { page: '/signin' },
    '/bitbyte' : { page: '/bitbyte' },
  }),
});
