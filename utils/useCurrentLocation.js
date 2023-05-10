import React, {useEffect, useState} from 'react';
import Geolocation from 'react-native-geolocation-service';

export default function useCurrentLocation() {
  const [coordinates, setCoordinates] = useState(null);

  useEffect(() => {
    Geolocation.getCurrentPosition(
      position => {
        const data = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        };
        setCoordinates(data);
      },
      error => {
        console.log(error.code, error.message);
      },
      {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
    );
  }, []);
  return coordinates;
}
