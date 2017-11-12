import React, { Component } from 'react';
import { connect } from 'react-redux';
import './index.css';
import Course from '../../components';

import { updatePage } from '../../actions';

class All extends Component {
	handlePage = page => this.props.onUpdatePage(page);
	goToConstraint = _ => {this.handlePage('constraint')}
	render() {
		return (
			<div id="all-page">
				<p>All classes</p>
				<br />
				{JSON.stringify(this.props.allClass)}
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		page: state.page.page,
		allClass: state.data.allClass
	}
}

function mapDispatchToProps(dispatch) {
	return {
		onUpdatePage: page => dispatch(updatePage(page))
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(All);
