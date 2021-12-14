const withCss = require('@zeit/next-css');

module.exports = {
    images: {
      domains: ['assets.acme.com'],
    },
}
module.exports = withCss({
    exportPathMap: function() {
        return {
            '/': { page: '/' },
            '/nft': { page: '/nft' },
        };
    },
});