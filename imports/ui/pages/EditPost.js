import React from 'react';
import PostEditor from '../components/PostEditor';
import NotFound from './NotFound';

const EditPost = (props) => {
    return props.doc ? (
        <div className="EditPost">
            <div className="row">
                <h4 className="page-header"> Editing "{props.doc.title}"</h4>
            </div>
            <div className="row">
                <DocumentEditor {...props} />
            </div>
        </div>
    ):<NotFound/>
};

EditPost.propTypes = {
    doc: React.PropTypes.object,
};

export default EditPost;