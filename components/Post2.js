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

//Realm stuff
import Realm from 'realm';
import {realmContext} from './RealmContext';
const {useRealm} = realmContext;

import PostForm from './PostForm';
import PostMap from './PostMap';

export default function Post2(props) {
  // let [marker, setMarker] = useState({lat: 40.688615, lng: -74.018907});
  const [marker, setMarker] = useState({lat: 40.688615, lng: -74.018907});
  console.log(marker, 'from Post2');

  const realm = useRealm();

  const handleSubmit = () => {
    realm.write(() => {
      realm.create('UserPost', {
        _id: new Realm.BSON.ObjectId(),
        address: 'from form',
        latitude: 'from map',
        longitude: 'from  map',
        start: 'from form',
        end: 'from form',
        stuff: 'from form',
      });
    });
    Alert.alert('woo wee, you pressed the button');
    console.log('Realm file is located at: ' + realm.path);
  };

  return (
    <>
      <PostMap setMarker={setMarker} />
      <PostForm />
      <Button
        title="tester"
        onPress={() => {
          handleSubmit();
          console.log('hello', props);
        }}
      />
    </>
  );
}
