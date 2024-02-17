import React from 'react';
import Landing from './components/Landing';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BiodataFormPregnant from './components/BiodataFormPregnant';
import BiodataFormChildren from './components/BiodataFormChildren';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Landing">
        <Stack.Screen
          name="Home"
          component={Landing}
        />
        <Stack.Screen name="Form Biodata Ibu Hamil" component={BiodataFormPregnant} />
        <Stack.Screen name="Form Biodata Anak" component={BiodataFormChildren} />
      </Stack.Navigator>
    </NavigationContainer>
    );    
}
