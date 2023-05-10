import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import Home from './screens/home.screens';
// import Post from './components/Post';
import PostWrapper from './components/Post';
import Post2 from './components/Post2';

import {realmContext} from './components/RealmContext';

const {RealmProvider} = realmContext;

export default function App() {
  return (
    <RealmProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Post" component={PostWrapper} />
          <Stack.Screen name="Post2" component={Post2} />
        </Stack.Navigator>
      </NavigationContainer>
    </RealmProvider>
  );
}
