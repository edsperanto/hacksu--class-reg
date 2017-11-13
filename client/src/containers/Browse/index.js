import React, { Component } from 'react';
import { connect } from 'react-redux';
import './index.css';

import { updatePage } from '../../actions';

class Browse extends Component {
	handlePage = page => this.props.onUpdatePage(page);
	goToFinal = _ => {this.handlePage('final')}
	render() {
		return (
			<div id="browse-page">
				<div id="browse-left">
					<div id="final-candidates-title">Candidates</div>
					<div id="final-candidates-list">
						{
							this.props.candidates
								.map(candidate => {
									let parts = candidate.split('-');
									let cName = `${parts[0]}-${parts[1]}`;
									let cSection = parts[2];
									return this.props.allClass
										.filter(course => {
											let matchName = course.name == cName;
											let matchSec = course.section == cSection;
											return matchName && matchSec;
										})[0];
								})
								.map(course => {
									return(
										<div className="candidate-card">
											<p class="candidate-name">{course.name}-{course.section}</p>
											<p class="candidate-title">{course.title}</p>
										</div>
									)
								})
						}
					</div>
					<div id="browse-filters">· · · Filters</div>
				</div>
				<div id="browse-right">
					<div className="week-columns" id="U-col">
					</div>
					<div className="week-columns" id="M-col">
					</div>
					<div className="week-columns" id="T-col">
					</div>
					<div className="week-columns" id="W-col">
					</div>
					<div className="week-columns" id="R-col">
					</div>
					<div className="week-columns" id="F-col">
					</div>
					<div className="week-columns" id="S-col">
					</div>
				</div>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		page: state.page.page,
		allClass: state.data.allClass,
		candidates: state.data.candidates
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
)(Browse);
