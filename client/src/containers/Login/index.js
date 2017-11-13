import React, { Component } from 'react';
import { connect } from 'react-redux';
import './index.css';

import { updateUsr, updatePwd, updateErr, updatePage } from '../../actions';
import { updateFirstName, updateLastName } from '../../actions';
import { updateSUID, updateRegistration } from '../../actions';

class Login extends Component {
	handleUsr = e => this.props.onUpdateUsr(e.target.value);
	handlePwd = e => this.props.onUpdatePwd(e.target.value);
	handleErr = err => this.props.onUpdateErr(err);
	handlePage = page => this.props.onUpdatePage(page);
	handleFirstName = firstName => this.props.onUpdateFirstName(firstName);
	handleLastName = lastName => this.props.onUpdateLastName(lastName);
	handleSUID = SUID => this.props.onUpdateSUID(SUID);
	handleRegistration = registration => this.props.onUpdateRegistration(registration);
	submitLogin = _ => {
		let xhr = new XMLHttpRequest();
		xhr.open('POST', 'https://www.edwardgao.com/hacksu/user/auth');
		xhr.setRequestHeader('Content-type', 'application/json');
		xhr.send(JSON.stringify({
			usr: this.props.usr,
			pwd: this.props.pwd
		}));
		xhr.onload = _ => {
			let res = JSON.parse(xhr.responseText);
			let {success, firstName, lastName, SUID, registration} = res;
			if(success) {
				this.handlePage('welcome');
				this.handleFirstName(firstName);
				this.handleLastName(lastName);
				this.handleSUID(SUID);
				this.handleRegistration(registration);
			}else{
				this.handleErr('incorrect username/password');
			}
		}
	}
	render() {
		return (
			<div id="login-com">
				<div id="login-form">
					<p id="login-title">Enter Credentails</p>
					<p id="login-error">{this.props.err}</p>
					<label for="usr">Username</label>
					<input type="text" name="usr" onChange={this.handleUsr}/>
					<br />
					<label for="pwd">Password</label>
					<input type="password" name="pwd" onChange={this.handlePwd}/>
					<div id="login-submit" onClick={this.submitLogin}>submit</div>
				</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		usr: state.data.usr,
		pwd: state.data.pwd,
		err: state.data.err,
		page: state.page.page
	}
}

function mapDispatchToProps(dispatch) {
	return {
		onUpdateUsr: usr => dispatch(updateUsr(usr)),
		onUpdatePwd: pwd => dispatch(updatePwd(pwd)),
		onUpdateErr: err => dispatch(updateErr(err)),
		onUpdatePage: page => dispatch(updatePage(page)),
		onUpdateFirstName: firstName => dispatch(updateFirstName(firstName)),
		onUpdateLastName: lastName => dispatch(updateLastName(lastName)),
		onUpdateSUID: SUID => dispatch(updateSUID(SUID)),
		onUpdateRegistration: registration => dispatch(updateRegistration(registration))
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Login);
