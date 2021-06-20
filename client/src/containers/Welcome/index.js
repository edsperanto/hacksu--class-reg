import React, { Component } from 'react';
import { connect } from 'react-redux';
import './index.css';

import { updatePage, updateAllClass } from '../../actions';

class Welcome extends Component {
	handlePage = page => this.props.onUpdatePage(page);
	handleAllClass = allClass => this.props.onUpdateAllClass(allClass);
	goToAll = _ => {
		let xhr = new XMLHttpRequest();
		xhr.open('GET', 'https://host.edwardgao.com/Class_Registrator/all/class');
		xhr.send();
		xhr.onload = _ => {
			let res = JSON.parse(xhr.responseText);
			let {success, data} = res;
			let allClass = data;
			if(success) {
				this.handleAllClass(allClass);
				this.handlePage('all');
			}
		}
	}
	render() {
		return (
			<div id="welcome-page">
				<span id="welcome-title">Welcome, {this.props.firstName}!</span>
				<p><b>SUID:</b> {this.props.SUID}</p>
				<p><b>Name:</b> {this.props.lastName}, {this.props.firstName}</p>
				<p><b>Your registration time is:</b> {this.props.registration}</p>
				<div id="toAll" onClick={this.goToAll}><b>Pick Classes →</b></div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		firstName: state.data.firstName,
		lastName: state.data.lastName,
		SUID: state.data.SUID,
		registration: state.data.registration,
		page: state.page.page,
		allClass: state.data.allClass
	}
}

function mapDispatchToProps(dispatch) {
	return {
		onUpdatePage: page => dispatch(updatePage(page)),
		onUpdateAllClass: allClass => dispatch(updateAllClass(allClass))
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Welcome);
