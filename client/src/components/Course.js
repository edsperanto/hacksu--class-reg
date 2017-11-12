import React from 'react';

const Course = data => {
	let {term, name, section, title} = data;
	let stat = data['status'];
	let startDate = data['start date'];
	let endDate = data['end date'];
	let {format, days} = data;
	let startTime = data['start time'];
	let endTime = data['end time'];
	let {room, core, faculty} = data;
	let {available, capacity, waitlist} = data;
	let {credits, comments} = data;

	const handleClick = e => {

	}

	return(
		<div class="course" onClick={handleClick}>
			<ul>
				<li>{term}</li>
				<li>{stat}</li>
				<li>{name}</li>
				<li>{section}</li>
				<li>{title}</li>
			</ul>
		</div>
	);
}

export default Course;
