/* eslint-disable max-len, no-return-assign */
import React from 'react';
import PropTypes from 'prop-types';
import postEditor from '../../modules/post-editor';

export default class PostEditor extends React.Component{
    componentDidMount(){
        postEditor({component: this});
        setTimeout(() => {post.querySelector('[name="title"]').focus(); }, 0)
    }
    render(){
        const {doc} = this.props;
        $(document).ready(function(){
            /*
              Experiment by commenting and uncommenting the two lines below to get the
              textarea label to be active.
            */
            //This does not set the label to the active position:
            $('.input-field label').addClass('active');

            //This does set the label to the active position.
            setTimeout(function(){ $('.input-field label').addClass('active'); }, 1);
        });
        return(
            <div className="row">
                <form ref={ form => (this.documentEditorForm = form) } onSubmit={ event => event.preventDefault() } className="col s6">
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="last_name" name="title" defaultValue={ doc && doc.title } type="text" className="validate"/>
                            <label for="last_name">Post Title</label>
                        </div>

                    </div>
                    <div className="row">
                        <div className="input-field col s6">
                            <textarea name="body" defaultValue={ doc && doc.body } id="textarea1" className="materialize-textarea"></textarea>
                            <label for="textarea1" classname='active'>Post Body</label>
                        </div>
                    </div>
                    <div className="row">
                        <button id="formSubmit" className="btn waves-effect waves-light" type="submit" name="action">
                            <i className="material-icons right">send</i>
                            { doc && doc._id ? 'Save Changes' : 'Add Document' }
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}

PostEditor.propTypes ={
    doc: PropTypes.object
};