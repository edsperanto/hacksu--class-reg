import React, { Component } from 'react';
import { connect } from 'react-redux';
import './index.css';

class Welcome extends Component {
	render() {
		return (
			<div id="welcome-page">
				<span id="welcome-title">Welcome, {this.props.firstName}!</span>
				<p><b>SUID:</b> {this.props.SUID}</p>
				<p><b>Name:</b> {this.props.lastName}, {this.props.firstName}</p>
				<p><b>Your registration time is:</b> {this.props.registration}</p>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		firstName: state.data.firstName,
		lastName: state.data.lastName,
		SUID: state.data.SUID,
		registration: state.data.registration
	}
}

function mapDispatchToProps(dispatch) {
	return {
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Welcome);
