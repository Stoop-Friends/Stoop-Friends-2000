import {createRealmContext} from '@realm/react';
import {UserPost} from './UserPostSchema';

export const realmContext = createRealmContext({
  schema: [UserPost],
});
