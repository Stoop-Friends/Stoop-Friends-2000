import React, {useState} from 'react';
import MapView, {Marker, Callout, PROVIDER_GOOGLE} from 'react-native-maps';
import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
// import Sales from './Sales';
import Post from './Post';
import Map from './Map';

export default function PostMap(props) {
  let [marker, setMarker] = useState({lat: 40.688615, lng: -74.018907});

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
          coordinate={{latitude: marker.lat, longitude: marker.lng}}
          draggable={true}
          pinColor="#f194ff"
          onDrag={e => {
            let coordinate = e.nativeEvent.coordinate;

            setMarker(coordinate);

            console.log('marker', marker);
          }}
        />
      </MapView>
    </>
  );
}
