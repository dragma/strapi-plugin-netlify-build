// src/plugins/netlify-build/server/src/routes/index.js
'use strict';
const adminRoutes = require('./admin');

module.exports = {
  admin: {
    type: 'admin',
    routes: adminRoutes,
  },
};
