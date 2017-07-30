import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { composeWithTracker } from 'react-komposer';
import { Meteor } from 'meteor/meteor';
import Public from '../pages/Public';
import Authenticated from '../pages/Authenticated';
import AppNavigation from '../components/AppNavigation';
import Index from '../pages/Index';
import Posts from '../pages/Posts'
import NewPost from '../pages/NewPost';
import EditPost from '../pages/EditPost';
import ViewPost from '../pages/ViewPost';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import NotFound from '../pages/NotFound';

const App = appProps => (
    <Router>
        <div className="App">
            <AppNavigation {...appProps}/>
            <Switch>
                <Route exact name="index" path="/" component={Index}/>
                <Authenticated exact path="/posts" component={Posts} {...appProps}/>
                <Authenticated exact path="/posts/new" component={NewPost} {...appProps}/>
                <Authenticated exact path="/posts/:_id" component={ViewPost} {...appProps}/>
                <Authenticated exact path="/posts/:_id/edit" component={EditPost} {...appProps}/>
                <Public path="/signup" component={Signup} {...appProps} />
                <Public path="/login" component={Login} {...appProps} />
                <Route component={NotFound} />
            </Switch>
        </div>
    </Router>
);

App.propTypes = {
    loggingIn: PropTypes.bool,
    authenticated: PropTypes.bool,
};

const composer = (props, onData) => {
    const loggingIn = Meteor.loggingIn();
    onData(null, {
        loggingIn,
        authenticated: !loggingIn && !!Meteor.userId(),
    });
};

export default composeWithTracker(composer)(App);