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
  const [formInputs, setFormInputs] = useState({
    address: '',
    where: '',
    start: '',
    end: '',
    stuff: '',
  });
  console.log(marker, 'from Post2');
  console.log(formInputs, 'from Post2');

  const realm = useRealm();

  const handleSubmit = () => {
    realm.write(() => {
      realm.create('UserPost', {
        _id: new Realm.BSON.ObjectId(),
        address: formInputs.address,
        latitude: marker.latitude.toString(),
        longitude: marker.longitude.toString(),
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
      <PostMap setMarker={setMarker} />
      <PostForm setFormInputs={setFormInputs} />
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
