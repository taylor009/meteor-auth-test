import React from 'react';
import PropTypes from 'prop-types';
import {Alert} from 'react-bootstrap';

const handleNav = (history, _id) => {
  history.push(`/posts/${_id}`);
};

const PostList = ({history, posts}) => {
    console.log(posts);
    return (
  posts.length > 0 ? <div className="PostList collection">
      {document.map(({_id, title}) => (
          <li key={ _id } onClick={ () => handleNav(history, _id) } className="collection-item">
              {title}
              </li>
      ))}
  </div> :
      <Alert bsStyle="warning">No documents yet.</Alert>
)};

PostList.propTypes ={
    history: PropTypes.object,
    posts: PropTypes.array,
};

export default PostList