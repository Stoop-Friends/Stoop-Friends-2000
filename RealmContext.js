import { createRealmContext } from '@realm/react';
import { StoopSale } from './db/salesSchema';

export const realmContext = createRealmContext({
  schema: [StoopSale]
})
