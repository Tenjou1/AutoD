import React, { createContext, useState } from 'react';

// Créez le contexte
export const DataContext = createContext();

// Créez un fournisseur de données (DataProvider)
export const DataProvider = ({ children }) => {
  const [data, setData] = useState(null);

  return (
    <DataContext.Provider value={{ data, setData }}>
      {children}
    </DataContext.Provider>
  );
};
