// src/hooks/useFetchData.js
import { useState, useEffect } from 'react';
import { fetchData } from '../services/api';

const useFetchData = (endpoint) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await fetchData(endpoint);
        setData(result);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, [endpoint]);

  return { data, loading, error };
};

export default useFetchData;