import { composeWithTracker } from 'react-komposer';
import { Meteor } from 'meteor/meteor';
import Posts from '../../api/posts/posts';
import PostList from '../components/PostList';
import Loading from '../components/Loading';

const composer = (params, onData) => {
    const subscription = Meteor.subscribe('posts.list');
    if(subscription.ready()){
        const posts = Posts.find().fetch();
        onData(null, {posts})
    }
};

export default composeWithTracker(composer, Loading)(PostList);