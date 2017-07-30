import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import Posts from './posts';
import rateLimit from '../../modules/rate-limit.js';

export const upsertPost = new ValidatedMethod({
    name: 'posts.upsert',
    validate: new SimpleSchema({
        _id: { type: String, optional: true },
        title: { type: String, optional: true },
        body: { type: String, optional: true },
    }).validator(),
    run(post){
        return Posts.upsert({_id: post._id}, {$set: post});
    },
});

export const removePost = new ValidatedMethod({
   name: 'posts.remove',
   validate: new SimpleSchema({
       _id: {type: String},
   }).validator(),
    run({_id}){
       Posts.remove(_id);
    },
});

rateLimit({
    methods: [
        upsertPost,
        removePost,
    ],
    limit: 5,
    timeRange: 1000,
});