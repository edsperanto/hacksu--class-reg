import {UPDATE_USR, UPDATE_PWD} from '../actions';
import {UPDATE_FIRSTNAME, UPDATE_LASTNAME} from '../actions';
import {UPDATE_SUID, UPDATE_REGISTRATION} from '../actions';
import {UPDATE_ALLCLASS, UPDATE_SEARCH} from '../actions';
import {ADD_CANDIDATE, DEL_CANDIDATE} from '../actions';

const initialState = {
	usr: null,
	pwd: null,
	firstName: null,
	lastName: null,
	SUID: null,
	registration: null,
	allClass: null,
	search: "",
	candidates: []
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
		case UPDATE_ALLCLASS:
			return Object.assign({}, state, {
				allClass: action.allClass
			});
		case UPDATE_SEARCH:
			return Object.assign({}, state, {
				search: action.search
			});
		case ADD_CANDIDATE:
			if(state.candidates.indexOf(action.course) > -1) {
				return state;
			}else{
				return Object.assign({}, state, {
					candidates: [action.course, ...state.candidates]
				});
			}
		case DEL_CANDIDATE:
			let index = state.candidates.indexOf(action.course);
			let newCandidates = state.candidates;
			newCandidates.splice(index, 1);
			console.log('nc: ', newCandidates);
			return Object.assign({}, state, {
				candidates: newCandidates
			});
		default:
			return state;
	}
}

export default data;
