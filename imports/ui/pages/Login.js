import React from 'react';
import { Link } from 'react-router-dom';
import handleLogin from '../../modules/login';

class Login extends React.Component{
    componentDidMount() {
        handleLogin({ component: this });
    }

    handleSubmit(event) {
        event.preventDefault();
    }
    render(){
        return(
            <div className="Login">
                <div className="row">
                    <h4 className="page-header">Login</h4>
                    <form className="col 12" ref={form => (this.loginForm = form)} onSubmit={ this.handleSubmit }>
                        <div className="row">
                            <div className="input-field col s6">
                                <i className="material-icons prefix">email</i>
                                <input ref="emailAddress" name="emailAddress" id="icon_prefix" type="text" className="validate"/>
                                <label for="icon_prefix">Email Address</label>
                            </div>
                            <div className="input-field col s6">
                                <i className="material-icons prefix">lock</i>
                                <input ref="password" name="password" id="icon_prefix" type="text" className="validate"/>
                                <label for="icon_prefix">Email Address</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s6">
                                <button id="formSubmit" className="btn waves-effect waves-light" type="submit" name="action">
                                    Submit
                                    <i className="material-icons right">send</i>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default Login;