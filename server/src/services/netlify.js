// src/plugins/netlify-build/server/src/services/netlify.js
'use strict';
import axios from 'axios';

const service = ({ strapi }) => ({
  async triggerBuild(webhookUrl) {
    try {
      // Envoi d'une requête POST sans payload au webhook Netlify
      const response = await axios.post(webhookUrl);
      // On peut éventuellement analyser response.status pour confirmer le 200.
      return response.data;
    } catch (err) {
      // En cas d'erreur de requête, on lance une exception pour que le contrôleur la capture.
      throw new Error(`Échec de l'appel au webhook Netlify: ${err.message}`);
    }
  },
});

export default service;
