const flatten = require('lodash/flatten');
const cloneDeep = require('lodash/cloneDeep');
const appConfig = require('./config/app.conf');

const routes = [
  {
    path: '/',
    component: 'pages/Home',
  },
  {
    path: '/about',
    component: 'pages/About',
  },
  {
    path: '/portfolio',
    component: 'pages/Portfolio/Portfolio',
  },
];

const generateRoutes = function() {
  let generatedRoutes = routes;
  let { locales } = appConfig;
  // If there is only one locale, that is the default and therefore does not
  // need to be considered.
  if (locales.length <= 1) {
    locales = [];
  }
  // Strip the default locale from the locale array. We don't need
  // to generate a prerendered path prefixed with the default locale.
  else {
    locales = locales.filter(locale => locale !== appConfig.defaultLocale);
  }

  // Generate localized routes for each supported locale if there are multiple
  // supported locales.
  if (locales.length > 0) {
    let localizedRoutes = locales.map(locale => {
      return cloneDeep(routes).map(route => {
        route.path = `/${locale}${route.path}`;
        return route;
      });
    });
    // Merge the base routes and the localized routes.
    generatedRoutes = flatten(generatedRoutes.concat(localizedRoutes));
  }

  // Finally, add the wildcard route at the end to redirect to 404 page.
  generatedRoutes.push({
    path: '*',
    component: 'pages/NotFound',
  });

  return generatedRoutes;
};

module.exports = generateRoutes();
