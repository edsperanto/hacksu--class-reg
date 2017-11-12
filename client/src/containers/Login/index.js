import React, { Component } from 'react';
import { connect } from 'react-redux';
import './index.css';

import { updateUsr, updatePwd } from '../../actions';

class Login extends Component {
	handleUsr = e => this.props.onUpdateUsr(e.target.value);
	handlePwd = e => this.props.onUpdatePwd(e.target.value);
	submitLogin = _ => {
		var xhr = new XMLHttpRequest();
		xhr.open('POST', 'https://www.edwardgao.com/hacksu/user/auth');
		xhr.setRequestHeader('Content-type', 'application/json');
		xhr.send(JSON.stringify({
			usr: this.props.usr,
			pwd: this.props.pwd
		}));
		xhr.onload = function() {
			console.log(this.responseText);
		}
	}
	render() {
		return (
			<div id="login-com">
				<div id="login-form">
					<p id="login-title">Enter Credentails</p>
					<label for="usr">Username</label>
					<input type="text" name="usr" onChange={this.handleUsr}/>
					<br />
					<label for="pwd">Password</label>
					<input type="password" name="pwd" onChange={this.handlePwd}/>
					<div id="login-submit" onClick={this.submitLogin}>submit</div>
					<p>usr: {this.props.usr}</p>
					<p>pwd: {this.props.pwd}</p>
				</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		usr: state.data.usr,
		pwd: state.data.pwd
	}
}

function mapDispatchToProps(dispatch) {
	return {
		onUpdateUsr: usr => dispatch(updateUsr(usr)),
		onUpdatePwd: pwd => dispatch(updatePwd(pwd))
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Login);
