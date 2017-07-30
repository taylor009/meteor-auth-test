import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import PostList from '../containers/PostList';

const Posts = ({history}) => (
    <div className="Posts">
        <div className="col s12">
            <div className="row">
                <div className="page-header clearfix">
                    <h4 className="left">Posts</h4>
                    <Link to="/posts/new">
                        <button className="btn waves-effect waves-light">
                            <i className="material-icons right">send</i>
                            New Post
                        </button>
                    </Link>
                </div>
            </div>
            <div className="row">
                <PostList history={history}/>
            </div>
        </div>
    </div>
);

Posts.propTypes = {
    history: PropTypes.object,
};

export default Posts