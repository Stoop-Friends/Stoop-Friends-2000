import React from 'react';
import Realm from 'realm';
import { createRealmContext } from '@realm/react';

//define object model
export class StoopSale extends Realm.Object = {
  static schema = {
    name: 'StoopSale',
    primaryKey: '_id',
    properties: {
      _id: 'objectId',
      where: 'string',
      start: 'date',
      end: 'date',
      stuff: 'set'
    }
  }
}

//configuration
const realmConfig = {
  schema: [StoopSale],
}

//creat realm context
const {RealmProvider, useRealm, useObject, useQuery} = createRealmContext(realmConfig);

//expose a realm (whatever that means)
function AppWrapper() {
  return (
  <RealmProvider>
    <RestOfApp />
  </RealmProvider>
    );
}
