import { Meteor } from 'meteor/meteor';
import { composeWithTracker } from 'react-komposer';
import Posts from '../../api/posts/posts';
import EditPost from '../pages/EditPost';
import Loading from '../components/Loading';

const composer = ({match}, onData) => {
    const postId = match.params._id;
    const subscription = Meteor.subscribe('post.view', postId);

    if(subscription.ready()){
        const doc = Posts.findOne(postId);
        onData(null, {doc});
    }
};

export default composeWithTracker(composer, Loading)(EditPost);