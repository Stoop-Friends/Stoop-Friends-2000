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

// import MapView, {Marker, Callout, PROVIDER_GOOGLE} from 'react-native-maps';

export default function PostForm({setFormInputs}) {
  // let [postMapData, setPostMapData] = useState('');
  let [inputs, setInputs] = useState({
    address: '',
    where: '',
    start: '',
    end: '',
    stuff: '',
  });

  // let currentInputs = {
  //   address: '',
  //   where: '',
  //   start: '',
  //   end: '',
  //   stuff: '',
  // };

  // const realm = useRealm();

  // const handlePostMapData = event => {
  //   let data = setPostMapData();
  //   console.log(data);
  //   console.log(props);
  // };

  // const handleSubmit = () => {
  //   console.log(formInputs);
  //   realm.write(() => {
  //     realm.create('UserPost', {
  //       _id: new Realm.BSON.ObjectId(),
  //       longitude: +formInputs.longitude,
  //       latitude: +formInputs.latitude,
  //       where: formInputs.where,
  //       start: formInputs.start,
  //       end: formInputs.end,
  //       stuff: formInputs.stuff,
  //     });
  //   });
  //   Alert.alert('woo wee, you pressed the button');
  //   console.log('Realm file is located at: ' + realm.path);
  // };

  return (
    <View>
      <TextInput
        name="address"
        style={styles.input}
        onChangeText={value => setInputs({...inputs, address: value})}
        returnKeytype="next"
        placeholder="address"
        // defaultValue={marker.lng.toString()}
        defaultValue={inputs.address}
      />

      <TextInput
        style={styles.input}
        onChangeText={value => setInputs({...inputs, start: value})}
        placeholder="start time"
        defaultValue={inputs.start}
      />
      <TextInput
        style={styles.input}
        onChangeText={value => setInputs({...inputs, end: value})}
        placeholder="end time"
        defaultValue={inputs.end}
      />
      <TextInput
        style={styles.input}
        onChangeText={value => setInputs({...inputs, stuff: value})}
        placeholder="what they got??"
        defaultValue={inputs.stuff}
      />
      {/* <View style={styles.button}>
        <Button
          // style={styles.fixToText}

          title="SUBMIT THIS STOOP SALE"
          color="purple"
          onPress={() => handleSubmit()}
        />
      </View> */}
      <View style={styles.button}>
        <Button
          title="COMPELTE FORM"
          color="purple"
          onPress={() => setFormInputs(inputs)}
        />
      </View>
    </View>
  );
}

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
