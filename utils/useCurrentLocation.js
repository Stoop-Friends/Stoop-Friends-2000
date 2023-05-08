import React, {useEffect} from 'react';
import Geolocation from 'react-native-geolocation-service';

export default function useCurrentLocation() {
  useEffect(() => {
    Geolocation.getCurrentPosition(
      position => {
        const data = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        };
        console.log(data);
      },
      error => {
        console.log(error.code, error.message);
      },
      {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
    );
  }, []);
}
