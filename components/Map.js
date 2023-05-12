import React from 'react';
import MapView, {Marker, Callout, PROVIDER_GOOGLE} from 'react-native-maps';
import {StyleSheet, Text, View} from 'react-native';
import Sales from './Sales';

//Realm stuff
import {realmContext} from './RealmContext';
const {useRealm, useQuery} = realmContext;
import {UserPost} from './UserPostSchema';

export default function Map() {
  const realm = useRealm();
  const posts = useQuery(UserPost);

  return (
    <MapView
      style={{flex: 10, margin: 30, borderRadius: 10}}
      provider={PROVIDER_GOOGLE}
      showsUserLocation={true}
      followsUserLocation={true}
      showsCompass={true}
      showsMyLocationButton={true}
      initialRegion={{
        latitude: 40.688615,
        longitude: -74.018907,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}>
      <Sales />
      {/* <Marker
        coordinate={{
          latitude: 40.688615,
          longitude: -74.018907,
        }}
        pinColor="#f194ff">
        <Callout>
          <Text>STOOP SALE</Text>
          <Text>Address</Text>
          <Text>Hours</Text>
          <Text>What kinda stuff is there</Text>
        </Callout>
      </Marker> */}

      {/* items in map need a key!!!!! */}
      {/* {posts.map(singlePost => {
        return (
          <Marker>
            <Callout>
              <Text>STOOP SALE</Text>
              <Text>Address: </Text>
              <Text>Hours: </Text>
              <Text>What kinda stuff is there</Text>
            </Callout>
          </Marker>
        );
      })} */}
    </MapView>
  );
}
