import Realm from 'realm';

export class UserPost extends Realm.Object {
  static schema = {
    name: 'UserPost',
    primaryKey: '_id',
    properties: {
      _id: 'objectId',
      address: 'string',
      latitude: 'string',
      longitude: 'string',
      start: 'string',
      end: 'string',
      stuff: 'string',
    },
  };
}
