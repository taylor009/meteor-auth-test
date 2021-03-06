import React from 'react';
import {render} from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Bert} from 'meteor/themeteorchef:bert';
import App from '../../ui/layouts/App';

Bert.defaults.style = 'growl-top-right';

Meteor.startup(() => {
   render(<App/>, document.getElementById('react-root'));
});