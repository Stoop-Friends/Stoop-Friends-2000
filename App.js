import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import Home from './screens/home.screens';
// import Post from './components/Post';
import PostWrapper from './components/Post';

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Post" component={PostWrapper} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
