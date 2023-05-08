import React from 'react';
import {SafeAreaView, StyleSheet, Text, Button, View} from 'react-native';
import Map from '../components/Map';
import PostWrapper from '../components/Post';

export default function Home({navigation}) {
  return (
    <SafeAreaView style={styles.flex}>
      <Text style={styles.text}>Welcome to Super-Stooper</Text>
      <Map />
      {/* <PostWrapper /> */}
      <View style={styles.button}>
        <Button
          title="ADD A SALE"
          color="purple"
          onPress={() => navigation.navigate('Post')}
        />
      </View>
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
  button: {
    textAlign: 'center',
    alignContent: 'center',
    marginBottom: 30,
    borderWidth: 1,
    marginHorizontal: 30,
    backgroundColor: '#f194ff',
    borderRadius: 10,
  },
});
