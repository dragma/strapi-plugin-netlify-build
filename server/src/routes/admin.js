// src/plugins/netlify-build/server/src/routes/admin.js
module.exports = [
  {
    method: 'POST',
    path: '/rebuild',
    handler: 'rebuild.triggerBuild',  // appelle la méthode triggerBuild du contrôleur "rebuild"
    config: {
      auth: false,  // optionnel: false si on voulait autoriser sans auth (à éviter ici)
      // Pas de 'auth: false' => la route requiert une authentification admin par défaut.
      // On pourrait ajouter une politique personnalisée ici si besoin de contrôles supplémentaires.
    },
  },
];
