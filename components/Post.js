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
  const [text, onChangeText] = useState('Example');
  // const [number, onChangeNumber] = useState('');

  return (
    <RealmProvider>
      <View>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
        />

        <View style={styles.button}>
          <Button
            // style={styles.fixToText}

            title="POST A STOOP SALE"
            color="purple"
            onPress={() => {
              return Alert.alert('woo wee, you pressed the button');
            }}
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
