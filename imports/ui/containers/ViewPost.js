import {Meteor} from 'meteor/meteor';
import { composeWithTracker } from 'react-komposer';
import Posts from '../../api/posts/posts';
import ViewPost from '../pages/ViewPost'
import Loading from '../components/Loading.js';

const composer = ({match}, onData) => {
    const postId = match.params._id;
    const subscription = Meteor.subscribe('posts.view', postId);

    if(subscription.ready()){
        const doc = Posts.findOne(postId);
        onData(null,{doc});
    }
};

export default composeWithTracker(composer, Loading)(ViewPost);