/* eslint-env mocha */
/* eslint-disable func-names, prefer-arrow-callback */

import { assert } from 'meteor/practicalmeteor:chai';
import Posts from './posts';

describe('Posts collection', function(){
   it('registers the collection with Mongo properly', function(){
       assert.equal(typeof Posts, 'object');
   });
});