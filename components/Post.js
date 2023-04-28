import React, {useState} from 'react';
import {View, TextInput, StyleSheet, Button, Alert} from 'react-native';
import Realm from 'realm';
import {createRealmContext} from '@realm/react';

class UserPost extends Realm.Object {
  static schema = {
    name: 'Post',
    properties: {
      _id: 'objectId',
      name: 'string',
      description: 'string',
    },
    primaryKey: '_id',
  };
}

const realmConfig = {
  schema: [UserPost],
};

const {RealmProvider, useRealm, useObject, useQuery} =
  createRealmContext(realmConfig);

const Post = () => {
  const [formInputs, onChangeText] = useState({
    longitude: '',
    lattitude: '',
    where: '',
    start: '',
    end: '',
    stuff: '',
  });
  // const [number, onChangeNumber] = useState('');
  // const [saleTitle, onChangeText] = useState('')

  const handleSubmit = () => {
    console.log(formInputs);
    Alert.alert('woo wee, you pressed the button');
    //write the info to the sales API
  };

  return (
    <RealmProvider>
      <View>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          returnKeytype="next"
          placeholder="longitude"
          value={formInputs.longitude}
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          placeholder="Longitude"
          value={formInputs.lattitude}
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          placeholder="where"
          value={formInputs.where}
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          placeholder="start time"
          value={formInputs.start}
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          placeholder="end time"
          value={formInputs.end}
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          placeholder="what they got??"
          value={formInputs.stuff}
        />

        <View style={styles.button}>
          <Button
            // style={styles.fixToText}

            title="SUBMIT THIS STOOP SALE"
            color="purple"
            onPress={() => handleSubmit()}
          />
        </View>
      </View>
    </RealmProvider>
  );
};

// const styles = StyleSheet.create({
//   input: {
//     height: 40,
//     margin: 12,
//     borderWidth: 1,
//     padding: 10,
//   },
// });

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    marginHorizontal: 30,
    marginBottom: 5,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    textAlign: 'center',
  },
  button: {
    textAlign: 'center',
    marginBottom: 30,
    borderWidth: 1,
    marginHorizontal: 30,
    backgroundColor: '#f194ff',
    borderRadius: 10,
  },
});

export default Post;
