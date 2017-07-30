import { Meteor } from 'meteor/meteor';
import { assert } from 'meteor/practicalmeteor:chai';
import { resetDatabase } from 'meteor/xolvio:cleaner';
import { Factory } from 'meteor/dburles:factory';
import Posts from './posts';
import {upsertPost, removePost} from "./methods";

describe('Posts methods', function(){
    beforeEach(function() {
        if(Meteor.isServer){
            resetDatabase();
        }
    });
    it('insert a post into the Posts collection', function() {
        upsertPost.call({
            title: 'You can\'t arrest me, I\'m the Cake Boss!',
            body: 'They went nuts!',
        });
        const getPost = Posts.findOne({title: 'You can\'t arrest me, I\'m the Cake Boss!'});
        assert.equal(getDocument.body, 'They went nuts!');
    });
    it('updates a post in the Posts collection', function(){
        const {_id} = Factory.create('post');
        upsertPost.call({
            _id,
            title: 'You can\'t arrest me, I\'m the Cake Boss!',
            body: 'They went nuts!',
        });
        const getPost = Posts.findOne(_id);
        assert.equal(getPost.title, 'You can\'t arrest me, I\'m the Cake Boss!');
    });
    it('removes a post from the Posts collection', function(){
        const {_id} = Factory.create('post');
        removePost.call({_id});
        const getPost = Posts.findOne(_id);
        assert.equal(getPost, undefined);
    });
});