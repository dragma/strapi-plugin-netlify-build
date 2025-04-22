// src/plugins/netlify-build/admin/src/index.js
import PluginIcon from './components/PluginIcon';
import pluginId from './pluginId';

export default {
  register(app) {
    // Ajout d'un lien dans le menu principal de Strapi
    app.addMenuLink({
      to: `/plugins/${pluginId}`,
      icon: PluginIcon,
      intlLabel: {
        id: `${pluginId}.plugin.name`,
        defaultMessage: 'Reconstruire le site',
      },
      // Chargement asynchrone du composant App (ou HomePage directement)
      async Component() {
        const module = await import(/* webpackChunkName: "netlify-build-app" */ './pages/HomePage');
        return module.default;
      },
      permissions: [
        {
          action: `plugin::${pluginId}.rebuild`,  // permission nécessaire (voir section Permissions)
          subject: null,
        },
      ],
    });
    // Enregistrement du plugin dans l’application Strapi
    app.registerPlugin({
      id: pluginId,
      name: 'Reconstruire le site',
    });
  },

  bootstrap(app) {
    // éventuellement du code à exécuter une fois le plugin chargé (pas nécessaire ici pour la partie admin)
  },
};
