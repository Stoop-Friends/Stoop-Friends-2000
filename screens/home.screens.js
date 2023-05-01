import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import Map from '../components/Map';
import Post from '../components/Post';

export default function Home() {
  return (
    <SafeAreaView style={styles.flex}>
      <Text style={styles.text}>Welcome to Super-Stooper</Text>
      <Map />
      <Post />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  text: {
    marginTop: 50,
    textAlign: 'center',
    fontSize: 25,
  },
});
