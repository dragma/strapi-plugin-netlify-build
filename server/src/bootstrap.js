// src/plugins/netlify-build/server/src/bootstrap.js
'use strict';

module.exports = async ({ strapi }) => {
  // Définition de l'action de permission pour le plugin
  const actions = [
    {
      section: 'plugins',
      displayName: 'Reconstruire le site',    // Nom lisible de l'action
      uid: 'rebuild',                        // Identifiant interne de l'action
      pluginName: 'netlify-build',           // Nom du plugin auquel cette action se rattache
    },
  ];
  await strapi.admin.services.permission.actionProvider.registerMany(actions);
};
