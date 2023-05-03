import React from 'react';
import MapView, {Marker, Callout, PROVIDER_GOOGLE} from 'react-native-maps';
import {StyleSheet, Text, View} from 'react-native';
// import Sales from './Sales';

export default function PostMap() {
  return (
    <MapView
      style={{
        flex: 10,
        marginLeft: 30,
        marginRight: 30,
        marginBottom: 15,
        marginTop: 15,
        borderRadius: 10,
      }}
      provider={PROVIDER_GOOGLE}
      showsUserLocation={true}
      followsUserLocation={true}
      showsCompass={true}
      showsMyLocationButton={true}
      zoomEnabled={true}
      initialRegion={{
        latitude: 40.688615,
        longitude: -74.018907,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}>
      <Marker
        coordinate={{
          latitude: 40.688615,
          longitude: -74.018907,
        }}
        draggable
        pinColor="black">
        <Callout>
          <Text>STOOP SALE</Text>
          <Text>Address</Text>
          <Text>Hours</Text>
          <Text>What kinda stuff is there</Text>
        </Callout>
      </Marker>
    </MapView>
  );
}
