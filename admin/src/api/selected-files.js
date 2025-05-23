import { PLUGIN_ID } from '../pluginId';

const selectedFiles = {
  setSelectedFiles: async (files) => {
    try {
      const response = await fetch(`/${PLUGIN_ID}/selected-files`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ files: files }), // Veranderd van fileIds naar { files: fileIds }
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error('Fout bij opslaan van geselecteerde bestanden:', error);
      throw error;
    }
  },
};

export default selectedFiles;
