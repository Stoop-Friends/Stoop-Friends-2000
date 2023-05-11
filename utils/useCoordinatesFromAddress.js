import React, {useEffect, useState} from 'react';
import {REACT_APP_GOOGLE_MAPS_API_KEY} from '@env';

//Getting coordinates from an address
export default function useCoordinatesFromAddress(address, city) {
  const [coordinates, setCoordinates] = useState(null);

  useEffect(() => {
    const encodedAdress = address.split(' ').join('%20');
    const GOOGLE_MAPS_KEY = process.env.GOOGLE_MAPS_KEY;
    const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAdress}%20${city}&key=${REACT_APP_GOOGLE_MAPS_API_KEY}`;

    async function getCoordinatesFromAddress() {
      try {
        const response = await fetch(url);
        const jsonData = await response.json();
        const data = jsonData.results[0].geometry.location;
        setCoordinates(data);
      } catch (error) {
        console.error(error);
      }
    }
    getCoordinatesFromAddress();
  }, [address, city]);

  return coordinates;
}
