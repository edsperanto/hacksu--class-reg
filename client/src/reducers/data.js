import {UPDATE_USR, UPDATE_PWD} from '../actions';

const initialState = {
	usr: null,
	pwd: null
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
			})
		default:
			return state;
	}
}

export default data;
