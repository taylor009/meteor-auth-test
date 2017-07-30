import React from 'react';
import PropTypes from 'prop-types';
import { ButtonToolbar, ButtonGroup, Button } from 'react-bootstrap';
import { Bert } from 'meteor/themeteorchef:bert';
import {removePost} from "../../api/posts/methods"
import NotFound from './NotFound';

const handleEdit = (history, _id) => {
    history.push(`/documents/${_id}/edit`);
};

const handleRemove = (history, _id) => {
    if(confirm('Are you sure? This is permanent!')){
        removePost.call({_id}, (error) => {
            if(error){
                Bert.alert(error.reason, 'danger');
            }else{
                Bert.alert('Post deleted!', 'success');
            }
        });
    }
};

const ViewPost = ({doc, history}) => {
    return doc ? (
        <div className="ViewPost">
            <div className="page-header clearfix">
                <h4 className="pull-left">{ doc && doc.title }</h4>
                <ButtonToolbar className="pull-right">
                    <ButtonGroup bsSize="small">
                        <Button
                            onClick={() => handleEdit(history, doc._id)}
                        >Edit</Button>
                        <Button
                            onClick={() => handleRemove(history, doc._id)}
                            className="text-danger"
                        >Delete</Button>
                    </ButtonGroup>
                </ButtonToolbar>
            </div>
            { doc && doc.body }
        </div>
    ) : <NotFound />;
};

ViewPost.propTypes = {
    doc: PropTypes.object,
    history: PropTypes.object
};

export default ViewPost;

