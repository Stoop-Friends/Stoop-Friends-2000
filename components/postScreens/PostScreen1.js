import React from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Button,
  Alert,
  SafeAreaView,
} from 'react-native';

export default function PostScreen1({navigation}) {
  return (
    <View>
      <Button title="USE MY LOCATION" />

      <Button title="ENTER ADDRESS" />
    </View>
  );
}
