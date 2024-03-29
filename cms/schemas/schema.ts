import documents from './documents';
import objects from './objects';

import createSchema from 'part:@sanity/base/schema-creator';
import schemaTypes from 'all:part:@sanity/base/schema-type';

export default createSchema({
   name: 'default',
   types: schemaTypes.concat([...objects, ...documents]),
});
