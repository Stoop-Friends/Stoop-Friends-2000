import React, {useState} from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Button,
  Alert,
  SafeAreaView,
} from 'react-native';
import PostMap from './PostMap';
import PostForm from './PostForm';
import {Calendar} from 'react-native-calendars';

// Realm stuff
import Realm from 'realm';
import {realmContext} from './RealmContext';

const {useRealm} = realmContext;

export default function Post(props) {
  const [selected, setSelected] = useState('');
  // let [postMapData, setPostMapData] = useState('');

  const [formInputs, setFormInputs] = useState({
    address: '',
    start: '',
    end: '',
    stuff: '',
  });

  const realm = useRealm();

  // We should adjust the form so that the input is the street address and the city and we can convert that to coordinates
  // const handleCoordinates = () => {
  //   getCoordinatesFromAddress('192 Spencer Street', 'Brooklyn');
  // };

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
        address: formInputs.address,
        start: formInputs.start,
        end: formInputs.end,
        stuff: formInputs.stuff,
      });
    });
    Alert.alert('woo wee, you pressed the button');
    console.log('Realm file is located at: ' + realm.path);
  };

  return (
    <SafeAreaView>
      <Calendar
        onDayPress={day => {
          // setSelected(day.dateString);
          console.log(day);
        }}
      />
      <PostMap />
      <TextInput
        style={styles.input}
        onChangeText={value => setFormInputs({...formInputs, address: value})}
        placeholder="address"
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
    </SafeAreaView>
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
