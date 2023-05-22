import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  Alert,
  SafeAreaView,
} from 'react-native';
import useCurrentLocation from '../utils/useCurrentLocation';

//Realm stuff
import Realm from 'realm';
import {realmContext} from './RealmContext';
const {useRealm} = realmContext;

import PostForm from './PostForm';
import PostMap from './PostMap';

export default function Post2(props) {
  const [marker, setMarker] = useState(null);

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
      <View style={styles.button}>
        <Button
          title="POST STOOP SALE"
          onPress={() => {
            handleSubmit();
            console.log('hello', props);
          }}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  button: {
    textAlign: 'center',
    marginBottom: 30,
    borderWidth: 1,
    marginHorizontal: 30,
    backgroundColor: '#f194ff',
    borderRadius: 10,
  },
});
