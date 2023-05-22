import React, {useEffect, useState} from 'react';
import MapView, {Marker, Callout, PROVIDER_GOOGLE} from 'react-native-maps';
import {StyleSheet, Text, View, SafeAreaView} from 'react-native';

import useCurrentLocation from '../utils/useCurrentLocation';

export default function PostMap(props) {
  const initialCoords = useCurrentLocation();
  console.log(props);
  const [coords, setCoords] = useState(null);
  const setMarker = props.setMarker;
  const defaultCoords = {
    latitude: 40.688615,
    longitude: -74.018907,
  };

  useEffect(() => {
    setCoords(initialCoords);
  }, [initialCoords]);
  console.log('coords in postMap', coords);

  const longitude = coords ? coords.longitude : defaultCoords.longitude;
  const latitude = coords ? coords.latitude : defaultCoords.latitude;
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
          latitude,
          longitude,
          // latitudeDelta: 0.0922,
          // longitudeDelta: 0.0421,
          latitudeDelta: 0.02,
          longitudeDelta: 0.02,
        }}>
        <Marker
          coordinate={coords}
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
