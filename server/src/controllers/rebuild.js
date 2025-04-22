// src/plugins/netlify-build/server/src/controllers/rebuild.js
'use strict';

module.exports = {
  async triggerBuild(ctx) {
    try {
      // Récupération de l'URL du webhook depuis la configuration du plugin
      const url = strapi.config.get('plugin::netlify-build.netlifyWebhookUrl');
      if (!url) {
        ctx.throw(400, 'Webhook Netlify non configuré');
      }

      // Appel du service Netlify pour déclencher la reconstruction
      await strapi.plugin('netlify-build').service('netlify').triggerBuild(url);

      // Répondre avec un statut 200 (OK) et un message
      ctx.send({ success: true, message: 'Build triggered' });
    } catch (err) {
      // Gérer les erreurs (par exemple, requête externe échouée)
      strapi.log.error('Erreur lors de la requête Netlify:', err);
      ctx.status = err.status || 500;
      ctx.body = { success: false, message: err.message || "Erreur du serveur" };
    }
  },
};
