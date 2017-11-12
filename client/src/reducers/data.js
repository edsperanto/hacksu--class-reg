import {UPDATE_USR} from '../actions';

const initialState = {
	usr: {
		'firstName': null,
		'lastName': null,
		'SUID': null,
		'registration': null
	}
}

function data(state = initialState, action) {
	switch(action.type) {
		case UPDATE_USR:
			return Object.assign({}, state, {
				usr: {
					'firstName': action['firstName'],
					'lastName': action['lastName'],
					'SUID': action['SUID'],
					'registration': action['registration']
				}
			});
		default:
			return state;
	}
}

export default data;
