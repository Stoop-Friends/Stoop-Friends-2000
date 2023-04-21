import React from 'react';
import MapView, {Marker, Callout, PROVIDER_GOOGLE} from 'react-native-maps';
import {StyleSheet, Text, View} from 'react-native';

import {realmContext} from './realmContext';
// import {StoopSale} from '../db/salesSchema.js';

const dummySales = [
  {
    id: 1,
    coordinates: {
      latitude: 40.75901,
      longitude: -73.984474,
    },
    where: 'Times Square',
    hours: {
      start: '9AM',
      end: '4PM',
    },
    stuff: ['cloths', 'books'],
  },
  {
    id: 2,
    coordinates: {
      latitude: 40.782864,
      longitude: -73.965355,
    },
    where: 'Central Park',
    hours: {
      start: '9AM',
      end: '4PM',
    },
    stuff: ['cloths', 'books', 'media'],
  },
];

export default function Sales() {
  return dummySales.map(sale => {
    return (
      <Marker key={sale.id} coordinate={sale.coordinates} pinColor="black">
        <Callout>
          <Text>STOOP SALE</Text>
          <Text>Where: {sale.where}</Text>
          <Text>
            Hours: {sale.hours.start} - {sale.hours.end}
          </Text>
          <Text>Stuff: {sale.stuff.join(', ')}</Text>
        </Callout>
      </Marker>
    );
  });
}
