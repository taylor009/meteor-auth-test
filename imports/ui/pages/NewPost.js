import React from 'react';
import PropTypes from 'prop-types';
import PostEditor from '../components/PostEditor';

const NewPost = ({history}) => (
    <div className="NewPost">
        <h4 className="page-header">New Post</h4>
        <PostEditor history={history}/>
    </div>
);

NewPost.propTypes = {
  history: PropTypes.object,
};

export default NewPost;