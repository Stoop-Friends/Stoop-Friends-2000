import React, {useState} from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Button,
  Alert,
  SafeAreaView,
} from 'react-native';

// Realm stuff
import Realm from 'realm';
import {realmContext} from './RealmContext';
const {useRealm, useQuery} = realmContext;

import PostMap from './PostMap';
import PostForm from './PostForm';

import MapView, {Marker, Callout, PROVIDER_GOOGLE} from 'react-native-maps';

export default function Post(props) {
  // let [postMapData, setPostMapData] = useState('');

  const [formInputs, setFormInputs] = useState({
    longitude: '',
    latitude: '',
    where: '',
    start: '',
    end: '',
    stuff: '',
  });

  const realm = useRealm();

  // const handlePostMapData = event => {
  //   let data = setPostMapData();
  //   console.log(data);
  //   console.log(props);
  // };

  const handleSubmit = () => {
    console.log(formInputs);
    realm.write(() => {
      realm.create('UserPost', {
        _id: new Realm.BSON.ObjectId(),
        longitude: +formInputs.longitude,
        latitude: +formInputs.latitude,
        where: formInputs.where,
        start: formInputs.start,
        end: formInputs.end,
        stuff: formInputs.stuff,
      });
    });
    Alert.alert('woo wee, you pressed the button');
    console.log('Realm file is located at: ' + realm.path);
  };

  return (
    <>
      <PostMap />
      <TextInput
        name="longitude"
        style={styles.input}
        onChangeText={value => setFormInputs({...formInputs, longitude: value})}
        returnKeytype="next"
        placeholder="longitude"
        // defaultValue={marker.lng.toString()}
        defaultValue={formInputs.longitude}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        onChangeText={value => setFormInputs({...formInputs, latitude: value})}
        placeholder="latitude"
        defaultValue={formInputs.latitude}
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
      <View style={styles.button}>
        <Button
          title="TEST TEST"
          color="purple"
          onPress={() => console.log(props)}
        />
      </View>
    </>
  );
}

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
    // flex: 1,
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

// export default Post;
