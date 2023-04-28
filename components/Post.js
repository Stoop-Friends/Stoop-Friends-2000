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
  const [formInputs, setFormInputs] = useState({
    longitude: '',
    lattitude: '',
    where: '',
    start: '',
    end: '',
    stuff: '',
  });
  // const [number, onChangeNumber] = useState('');
  // const [saleTitle, onChangeText] = useState('')

  // const handleChange = event => {
  //   setFormInputs({...});
  //   console.log(formInputs);
  // };

  const handleSubmit = () => {
    console.log(formInputs);
    Alert.alert('woo wee, you pressed the button');
    //write the info to the sales API
  };

  return (
    <RealmProvider>
      <View>
        <TextInput
          name="longitude"
          style={styles.input}
          onChangeText={value =>
            setFormInputs({...formInputs, longitude: value})
          }
          returnKeytype="next"
          placeholder="longitude"
          defaultValue={formInputs.longitude}
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          onChangeText={value =>
            setFormInputs({...formInputs, lattitude: value})
          }
          placeholder="Lattitude"
          defaultValue={formInputs.lattitude}
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          onChangeText={value => setFormInputs({...formInputs, where: value})}
          placeholder="where"
          defaultValue={formInputs.where}
        />
        <TextInput
          style={styles.input}
          onChangeText={value => setFormInputs({...formInputs, start: value})}
          placeholder="start time"
          defaultValue={formInputs.start}
        />
        <TextInput
          style={styles.input}
          onChangeText={value => setFormInputs({...formInputs, end: value})}
          placeholder="end time"
          defaultValue={formInputs.end}
        />
        <TextInput
          style={styles.input}
          onChangeText={value => setFormInputs({...formInputs, stuff: value})}
          placeholder="what they got??"
          defaultValue={formInputs.stuff}
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
