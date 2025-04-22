// src/plugins/netlify-build/server/src/index.js
'use strict';

module.exports = {
  // Strapi s’attend à ces propriétés si présentes
  routes: require('./routes'),
  services: {
    netlify: require('./services/netlify'),
  },
  controllers: {
    rebuild: require('./controllers/rebuild'),
  },
  bootstrap: require('./bootstrap'),
};
