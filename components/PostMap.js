import React, {useEffect, useState} from 'react';
import MapView, {Marker, Callout, PROVIDER_GOOGLE} from 'react-native-maps';
import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
// import Sales from './Sales';
import Post from './Post';
import Map from './Map';

import Geolocation from 'react-native-geolocation-service';

export default function PostMap({setMarker}) {
  // let [marker, setMarker] = useState({lat: 40.688615, lng: -74.018907});
  // console.log(props);
  let currentLocation = {lat: 40.688615, lng: -74.018907};

  return (
    <>
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
            latitude: currentLocation.lat,
            longitude: currentLocation.lng,
          }}
          draggable={true}
          pinColor="#f194ff"
          onDrag={e => {
            let coordinate = e.nativeEvent.coordinate;

            setMarker(coordinate);
          }}
        />
      </MapView>
      <Text
        style={{
          textAlign: 'center',
          marginBottom: 10,
        }}>
        PLACE MARKER AT STOOP SALE
      </Text>
    </>
  );
}
