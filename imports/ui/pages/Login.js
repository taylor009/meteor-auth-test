import React from 'react';
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
                    <form ref={form => (this.loginForm = form)} onSubmit={ this.handleSubmit }>
                        <div className="row">
                            <div className="input-field col s6 offset-s3">
                                <input ref="emailAddress" name="emailAddress" id="icon_prefix" type="text" className="validate"/>
                                <label for="icon_prefix">Email Address</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s6 offset-s3">
                                <input ref="password" name="password" id="icon_prefix" type="password" className="validate"/>
                                <label for="icon_prefix">Password</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s3 offset-s9">
                                <button id="formSubmit" className="btn waves-effect waves-light" type="submit" name="action">
                                    <i className="material-icons right">send</i>
                                    Submit
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