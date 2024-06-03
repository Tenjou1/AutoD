// src/services/api.js
import axios from 'axios';

// Configurer l'instance Axios
const api = axios.create({
  baseURL: 'https://your-api-base-url.com/api',
  timeout: 10000,
});

// Fonction pour gérer les erreurs
const handleError = (error) => {
  console.error('API call error:', error);
  throw error;
};

// Exemple de fonction API pour obtenir des données
export const fetchData = async (endpoint) => {
  try {
    const response = await api.get(endpoint);
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

// Exemple de fonction API pour poster des données
export const postData = async (endpoint, data) => {
  try {
    const response = await api.post(endpoint, data);
    return response.data;
  } catch (error) {
    handleError(error);
  }
};
