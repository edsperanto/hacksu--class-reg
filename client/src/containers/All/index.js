import React, { Component } from 'react';
import { connect } from 'react-redux';
import './index.css';

import { updatePage, updateSearch } from '../../actions';
import { addCandidate, delCandidate } from '../../actions';

class All extends Component {
	handlePage = page => this.props.onUpdatePage(page);
	handleSearch = e => this.props.onUpdateSearch(e.target.value);
	handleAddCandidate = e => this.props.onAddCandidate(e.currentTarget.dataset.id);
	handleDelCandidate = e => {
		this.props.onDelCandidate(e.currentTarget.dataset.id);
		this.forceUpdate();
	}
	goToConstraint = _ => {this.handlePage('constraint')}
	render() {
		return (
			<div id="all-page">
				<div id="all-left">
					<div id="all-classes-title">All Classes</div>
					<input type="text" placeholder="search..." id="all-classes-search" onChange={this.handleSearch}></input>
					<div id="all-classes-list">
					{
						this.props.allClass
							.filter(course => {
								if(this.props.search == '') return true;
								return this.props.search
									.toUpperCase().split(' ')
									.filter(q => q !== '')
									.map(q => {
										let inName = course.name.indexOf(q) > -1;
										let inSection = course.section.indexOf(q) > -1;
										let inTitle = course.title.toUpperCase().indexOf(q) > -1;
										return inName || inSection || inTitle;
									})
								 .indexOf(true) > -1;
							})
							.map(course => {
								return(
									<div onClick={this.handleAddCandidate} data-id={`${course.name}-${course.section}`} className="course-card">
										<p class="course-name">{course.name}-{course.section}</p>
										<p class="course-title">Title: {course.title}</p>
									</div>
								);
							})
					}
					</div>
				</div>
				<div id="all-right">
					<div id="candidates-title">Candidates</div>
					<div id="candidates-list">
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
										<div onClick={this.handleDelCandidate} data-id={`${course.name}-${course.section}`} className="candidate-card">
											<p class="candidate-name">{course.name}-{course.section}</p>
											<p class="candidate-title">{course.title}</p>
											<p class="candidate-date"><b>Dates:</b> {course['start date']} - {course['end date']}</p>
											<p class="candidate-days"><b>Days:</b> {course.days}</p>
											<p class="candidate-time"><b>Time:</b> {course['start time']} - {course['end time']}</p>
											<p class="candidate-room"><b>Room:</b> {course.room}</p>
											<p class="candidate-faculty"><b>Faculty:</b> {course.faculty}</p>
											<p class="candidate-credits"><b>Credits:</b> {course.credits}</p>
											<p class="candidate-comments"><b>Comments:</b> {course.comments}</p>
										</div>
									)
								})
						}
					</div>
				</div>
				<div id="toWeek">Week View →</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		page: state.page.page,
		allClass: state.data.allClass,
		search: state.data.search,
		candidates: state.data.candidates
	}
}

function mapDispatchToProps(dispatch) {
	return {
		onUpdatePage: page => dispatch(updatePage(page)),
		onUpdateSearch: search => dispatch(updateSearch(search)),
		onAddCandidate: course => dispatch(addCandidate(course)),
		onDelCandidate: course => dispatch(delCandidate(course))
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(All);
