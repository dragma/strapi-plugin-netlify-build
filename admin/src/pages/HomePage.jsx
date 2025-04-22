// src/plugins/netlify-build/admin/src/pages/HomePage.js
import React, { useState } from 'react';
import { Button } from '@strapi/design-system';  // import direct du composant Button
import { useNotification, useFetchClient, HeaderLayout } from '@strapi/strapi/admin';
import PluginIcon from '../components/PluginIcon';
import pluginId from '../pluginId';

const HomePage = () => {
  const [loading, setLoading] = useState(false);
  const { post } = useFetchClient();            // Client HTTP Strapi (admin)
  const { toggleNotification } = useNotification();  // Pour afficher des notifications

  const handleRebuild = async () => {
    setLoading(true);
    try {
      // Appel de l'endpoint backend du plugin pour déclencher Netlify
      // await post(`/${pluginId}/rebuild`);
      await post(`/${pluginId}/rebuild`);
      // Si la requête réussit, afficher une notification de succès
      toggleNotification({
        type: 'success',
        message: '✅ Reconstruction du site déclenchée avec succès.',
      });
    } catch (error) {
      // En cas d’échec, notification d'erreur
      toggleNotification({
        type: 'danger',  // type 'danger' pour une notification d'erreur
        message: "❌ Échec de la reconstruction du site.",
      });
    } finally {
      setLoading(false);
    }
  };
  return (
    <div style={{ display: 'flex', height: '100vh', width: '100%', alignItems: 'center', justifyContent: 'center' }}>
      <Button variant="default" startIcon={<PluginIcon />} onClick={handleRebuild} disabled={loading}>
        { loading ? 'Reconstruction en cours...' : 'Reconstruire le site' }
      </Button>
    </div>
  );
};

export default HomePage;
