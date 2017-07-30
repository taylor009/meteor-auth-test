import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';
import Posts from '../posts';

Meteor.publish('posts.list', () => Posts.find());

Meteor.publish('posts.view', (_id) => {
   check(_id, String);
   return Posts.find(_id);
});