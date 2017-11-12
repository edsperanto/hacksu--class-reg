import {UPDATE_USR, UPDATE_PWD} from '../actions';
import {UPDATE_FIRSTNAME, UPDATE_LASTNAME} from '../actions';
import {UPDATE_SUID, UPDATE_REGISTRATION} from '../actions';

const initialState = {
	usr: null,
	pwd: null,
	firstName: null,
	lastName: null,
	SUID: null,
	registration: null
}

function data(state = initialState, action) {
	switch(action.type) {
		case UPDATE_USR:
			return Object.assign({}, state, {
				usr: action.usr
			});
		case UPDATE_PWD:
			return Object.assign({}, state, {
				pwd: action.pwd
			});
		case UPDATE_FIRSTNAME:
			return Object.assign({}, state, {
				firstName: action.firstName
			});
		case UPDATE_LASTNAME:
			return Object.assign({}, state, {
				lastName: action.lastName
			});
		case UPDATE_SUID:
			return Object.assign({}, state, {
				SUID: action.SUID
			});
		case UPDATE_REGISTRATION:
			return Object.assign({}, state, {
				registration: action.registration
			});
		default:
			return state;
	}
}

export default data;
