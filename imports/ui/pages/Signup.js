import React from 'react';
import {Link} from 'react-router-dom';
import handleSignup from '../../modules/signup';

export default class Signup extends React.Component{
    componentDidMount() {

        handleSignup({ component: this });

    }

    handleSubmit(event) {
        event.preventDefault();
    }
    render(){
        $('.datepicker').pickadate({
            selectMonths: true, // Creates a dropdown to control month
            selectYears: 15, // Creates a dropdown of 15 years to control year,
            today: 'Today',
            clear: 'Clear',
            close: 'Ok',
            closeOnSelect: false // Close upon selecting a date,
        });
        return(
            <div className="Signup">
                <div className="row">
                    <form className="col s12" ref={form => (this.signupForm = form)} onSubmit={ this.handleSubmit }>
                        <div className="row">
                            <div className="input-field col s6">
                                <input ref="firstName" name="firstName" id="icon_prefix" type="text" className="validate"/>
                                <label for="icon_prefix">First Name</label>
                            </div>
                            <div className="input-field col s6">
                                <input ref="lastName" name="lastName" id="icon_prefix" type="text" className="validate"/>
                                <label for="icon_prefix">Last Name</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s6">
                                <input ref="emailAddress" name="emailAddress" id="icon_prefix" type="email" className="validate"/>
                                <label for="icon_prefix">Email Address</label>
                            </div>
                            <div className="input-field col s6">
                                <input ref="password" name="password" id="icon_prefix" type="password" className="validate"/>
                                <label for="icon_prefix">Password</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s6">
                                <input type="text" className="datepicker"/>
                            </div>
                            <div className="col s6">
                                <button id="formSubmit" className="btn waves-effect waves-light" type="submit" name="action">
                                    Submit
                                    <i className="material-icons right">send</i>
                                </button>
                            </div>
                        </div>
                    </form>
                    <p>Already have an account? <Link to="/login">Log In</Link>.</p>
                </div>
            </div>
        )
    }
}