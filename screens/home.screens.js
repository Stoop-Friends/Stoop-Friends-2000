import React from 'react';
import {SafeAreaView, StyleSheet, Text, Button} from 'react-native';
import Map from '../components/Map';
import PostWrapper from '../components/Post';

export default function Home({navigation}) {
  return (
    <SafeAreaView style={styles.flex}>
      <Text style={styles.text}>Welcome to Super-Stooper</Text>
      <Map />
      {/* <PostWrapper /> */}
      <Button title="ADD A SALE" onPress={() => navigation.navigate('Post')} />
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
