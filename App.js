import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './Navigation';
import { DataProvider } from './src/context/DataContext'; // Importez et utilisez votre DataProvider

const App = () => {
  return (
    <DataProvider>
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
    </DataProvider>

  );
};

export default App;