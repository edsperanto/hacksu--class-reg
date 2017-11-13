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
					{
						['U', 'M', 'T', 'W', 'R', 'F', 'S'].map(day => {
							return(
								<div className="week-columns" id={day}>
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
										.filter(course => course.days.indexOf(day) > -1)
										.map(course => {
											let startTime = course['start time'];
											let endTime = course['end time'];
											function to24(str) {
												let apm = str.indexOf('AM') > -1;
												let hour = parseInt(str.split(':')[0]) + (apm?0:12);
												let min = parseInt(str.split(':')[1].slice(0,2));
												return hour + (min/60);
											}
											startTime = to24(startTime);
											endTime = to24(endTime);
											console.log('startTime', startTime);
											console.log('endTime', endTime);
											let myTop = `${startTime/60*100}%`;
											let myHeight = `${(endTime-startTime)/24*100}%`;
											let divStyle = {
												top: myTop,
												height: myHeight,
												position: 'relative',
												backgroundColor: 'gray'
											}
											return(
												<div className="display-card" style={divStyle} key={Math.random()}>
												</div>
											)
										})
								}
								</div>
							)
						})
					}
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
