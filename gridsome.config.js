const tailwind = require('tailwindcss');
const nesting = require('tailwindcss/nesting');

module.exports = {
  siteName: `Leading hub for builders, traders, 
  and brands entering web3. 555 supply. Surgence accelerates your
   path to success.  Talent and Advisory       `,
  siteUrl: process.env.FRONTEND_URI,
  icon: {
    favicon: './src/icon.png',
    touchicon: './src/icon.png',
  },
  css: {
    loaderOptions: {
      postcss: {
        plugins: [tailwind, nesting],
      },
    },
  },
  plugins: ['gridsome-plugin-robots', '@gridsome/plugin-sitemap'],
};
