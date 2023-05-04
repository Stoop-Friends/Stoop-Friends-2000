import React, {useState} from 'react';
import MapView, {Marker, Callout, PROVIDER_GOOGLE} from 'react-native-maps';
import {StyleSheet, Text, View} from 'react-native';
// import Sales from './Sales';

export default function PostMap() {
  let [marker, setMarker] = useState({lat: 40.688615, lng: -74.018907});

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
        coordinate={{latitude: marker.lat, longitude: marker.lng}}
        draggable={true}
        pinColor="#f194ff"
        onDrag={e => {
          // console.log(e.nativeEvent);
          let coordinate = e.nativeEvent.coordinate;

          setMarker(coordinate);

          console.log('marker', marker);
        }}
      />
      {/* <Marker
        coordinate={{
          latitude: 40.688615,
          longitude: -74.018907,
        }}
        draggable={true}
        pinColor="black"
      /> */}
    </MapView>
  );
}
