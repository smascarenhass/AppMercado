import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/pages/Home';
import Promoçoes from './src/pages/Promoçoes';
import Mercado from './src/pages/Mercado';


const Stack = createNativeStackNavigator ();

export default function App() {
  return (
    <NavigationContainer>

      <Stack.Navigator initialRouteName='Home'>

      <Stack.Screen name='Barcelos' component={Home}/>
      <Stack.Screen name='Promoçoes' component={Promoçoes}/>
      <Stack.Screen name='Mercado' component={Mercado}/>



      </Stack.Navigator>

    </NavigationContainer>
  );
};
