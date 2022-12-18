import '~/main.css';
import '~/transitions.css';
import aos from './aos';

const SCROLL_OFFSET = 10;

export default function main(Vue, { head }) {
  Vue.directive('aos', aos);

  const files = require.context('./', true, /\.vue$/i);

  files.keys().forEach((key) => {
    const path = key
      .split('/')
      .splice(1)
      .slice(0, -1)
      .map((part, index) => {
        if (index > 0 || part.substr(-1) !== 's') {
          return part;
        }

        return part.charAt(0).toUpperCase() + part.substr(1, part.length - 2);
      });

    const filename = key.split('/').pop().split('.')[0];

    if (filename !== 'index') {
      path.push(filename);
    }

    Vue.component(
      path
        .join('')
        .replace(/[[\]:]+/g, '-')
        .replace(/(^-+|-+$)/g, ''),
      files(key).default,
    );
  });

  head.link.push({
    rel: 'stylesheet',
    href: '/ie.css',
  });

  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Rubik+Mono+One&display=swap',
  });
  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&family=Oswald:wght@300;400;500;700&display=swap',
  });
  head.meta.push(
    {
      name: 'og:url',
      content: process.env.FRONTEND_URI,
    },
    {
      name: 'og:image',
      content: `${process.env.FRONTEND_URI}/share.png`,
    },
    {
      name: 'twitter:image',
      content: `${process.env.FRONTEND_URI}/share.png`,
    },
    {
      name: 'og:site_name',
      content: 'Surgence',
    },
    {
      name: 'og:description',
      content: `Leading hub for builders, traders, 
      and brands entering web3. 555 supply. Surgence accelerates your
       path to success.  Talent and Advisory       `,
    },
    {
      name: 'twitter:card',
      content: 'summary',
    },
  );

  if (process.isClient) {
    const el = document.scrollingElement || document.documentElement;
    let ticking = false;

    document.addEventListener('scroll', () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (el.scrollTop >= SCROLL_OFFSET) {
            el.classList.add('scrolled');
          } else {
            el.classList.remove('scrolled');
          }
          ticking = false;
        });

        ticking = true;
      }
    });
  }
}
