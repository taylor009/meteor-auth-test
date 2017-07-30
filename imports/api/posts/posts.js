import {Mongo} from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { Factory } from 'meteor/dburles:factory';

const Posts = new Mongo.Collection('Posts');
export default Posts;

Posts.allow({
   insert: () => false,
   update: () => false,
   remove: () => false,
});

Posts.deny({
   insert: () => true,
   update: () => true,
   remove: () => true,
});

Posts.schema = new SimpleSchema({
   title:{
       type: String,
       label: 'The title of the post.',
   },
   body:{
       type: String,
       label: 'The body of the post.'
   },
});

Posts.attachSchema(Posts.schema);

Factory.define('post', Posts, {
   title: () => 'Factory Title',
   body: () => 'Factory Body',
});