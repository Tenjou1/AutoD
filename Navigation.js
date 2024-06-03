import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Connexion from './Screens/Connexion';
import EntrezCours from './Screens/EntrezCours';
import FormatSelection from './Screens/FormatSelection';
import Menu from './Screens/Menu';
import InterfaceQuestion from './Screens/InterfaceQuestion';

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