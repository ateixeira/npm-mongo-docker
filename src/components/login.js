import React from 'react';

class LoginPage extends React.Component {

    constructor(props) {
        super(props);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.login();
    }

    render() {
        return (
            <div className="login">
                <div className="container">
                    <form className="form-signin">
                        <h2 className="form-signin-heading">Please sign in</h2>
                        <label htmlFor="inputEmail" className="sr-only">Email address</label>
                        <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autoFocus />
                        <label htmlFor="inputPassword" className="sr-only">Password</label>
                        <input type="password" id="inputPassword" className="form-control" placeholder="Password" required />
                        <div className="checkbox">
                          <label>
                            <input type="checkbox" value="remember-me" /> Remember me
                          </label>
                        </div>
                        <button className="btn btn-lg btn-primary btn-block" onClick={this.handleSubmit.bind(this)}>Sign in</button>
                    </form>
                </div>
            </div>
        );
    }

}

export default LoginPage;