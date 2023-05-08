import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  Alert,
  SafeAreaView,
} from 'react-native';

import PostForm from './PostForm';
import PostMap from './PostMap';

export default function Post2(props) {
  return (
    <>
      <PostMap />
      <PostForm />
      <Button
        title="tester"
        onPress={() => {
          console.log('hello', props);
        }}
      />
    </>
  );
}
