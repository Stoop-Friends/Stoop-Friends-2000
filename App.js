// import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {
  Alert,
  StyleSheet,
  Text,
  View,
  Button,
  SafeAreaView,
} from 'react-native';
import MapView, {Marker, Callout, PROVIDER_GOOGLE} from 'react-native-maps';
import Map from './components/Map';
import PostWrapper from './components/Post';
// import {NavigationContainer} from '@react-navigation/native';

// const Stack = createNativeStackNavigator();

export default function App() {
  return (
    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!</Text>
    //   <StatusBar style='auto' />
    // </View>

    // <NavigationContainer>
    <View style={{flex: 1}}>
      <Text
        style={{
          flex: 1,
          marginTop: 50,
          textAlign: 'center',
          fontSize: 25,
        }}>
        Welcome to Super-Stooper
      </Text>

      {/* <StatusBar style="auto" /> */}

      <Map />
      {/* <View style={styles.button}>
        <Button
          // style={styles.fixToText}

          title="POST A STOOP SALE"
          color="purple"
          onPress={() => {
            return Alert.alert('woo wee, you pressed the button');
          }}
        />
      </View> */}
      <PostWrapper />
    </View>
    // </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    textAlign: 'center',
    marginBottom: 30,
    marginHorizontal: 30,
    backgroundColor: '#f194ff',
    borderRadius: 10,
  },
});
