import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Connexion from './Connexion';
import EntrezCours from './EntrezCours';
import FormatSelection from './FormatSelection';
import Menu from './Menu';
import InterfaceQuestion from './InterfaceQuestion';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Connexion" component={Connexion} options={{ headerShown: false }} />
      <Stack.Screen name="Menu" component={Menu} options={{ headerShown: false }} />
      <Stack.Screen name="EntrezCours" component={EntrezCours} options={{ headerShown: false }} />
      <Stack.Screen name="FormatSelection" component={FormatSelection} options={{ headerShown: false }} />
      <Stack.Screen name="InterfaceQuestion" component={InterfaceQuestion} options={{ headerShown: false }} />

    </Stack.Navigator>
  );
};

export default Navigation;