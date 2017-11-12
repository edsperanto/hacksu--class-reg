import React, { Component } from 'react';
import { connect } from 'react-redux';
import './index.css';

import { updatePage } from '../../actions';

class All extends Component {
	handlePage = page => this.props.onUpdatePage(page);
	goToConstraint = _ => {this.handlePage('constraint')}
	render() {
		return (
			<div id="all-page">
				<div id="all-left">
					<div id="all-classes-title">All Classes</div>
					<input type="text" id="all-classes-search"></input>
					<div id="all-classes-list">
					{
						this.props.allClass
							.filter(course => {
								return true;
							})
							.map(course => {
								return(
									<div className="course-card">
										<p class="name">{course.name}</p>
									</div>
								);
							})
					}
					</div>
				</div>
				<div id="all-right">
					<div id="candidates-title">Candidates</div>
					<div id="candidates-list">
					</div>
				</div>
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
