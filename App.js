import React from 'react';
import Landing from './components/Landing';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import FormDataPribadi from './components/FormDataPribadi';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Landing">
        <Stack.Screen
          name="Home"
          component={Landing}
        />
        <Stack.Screen name="Form" component={FormDataPribadi} />
      </Stack.Navigator>
    </NavigationContainer>
    );    
}
