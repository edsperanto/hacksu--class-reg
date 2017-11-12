import React, { Component } from 'react';
import './index.css';

class Login extends Component {
	render() {
		return (
			<div id="login-com">
				<div id="login-form">
					<p id="login-title">Enter Credentails</p>
					<label for="usr">Username</label>
					<input type="text" name="usr" />
					<br />
					<label for="pwd">Password</label>
					<input type="password" name="pwd" />
					<div id="login-submit">submit</div>
				</div>
			</div>
		);
	}
}

export default Login;
