import React, { Component } from 'react';
import { connect } from 'react-redux';
import './index.css';

import { updateUsr } from '../../actions';

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

function mapStateToProps(state) {
	return {
		usr: state.data.usr
	}
}

function mapDispatchToProps(dispatch) {
	return {
		onUpdateUsr: usr => dispatch(updateUsr(usr))
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Login);
