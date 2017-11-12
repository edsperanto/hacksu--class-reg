import {UPDATE_PAGE} from '../actions';

const initialState = {
	page: 'login'
}

function page(state = initialState, action) {
	switch(action.type) {
		case UPDATE_PAGE:
			return Object.assign({}, state, {
				page: action.page
			});
		default:
			return state;
	}
}

export default page;
