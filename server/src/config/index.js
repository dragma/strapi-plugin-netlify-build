// src/plugins/netlify-build/server/src/config/index.js
'use strict';

module.exports = {
  default: {
    netlifyWebhookUrl: '',  // URL par défaut (vide signifie à configurer)
  },
  validator(config) {
    // Optionnel: validation de la config
    if (typeof config.netlifyWebhookUrl !== 'string') {
      throw new Error('netlifyWebhookUrl doit être une chaîne de caractères.');
    }
  },
};
