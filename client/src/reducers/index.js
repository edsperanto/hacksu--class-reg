import { combineReducers } from 'redux';
import data from './data';
import page from './page';

const reducers = combineReducers({
	data,
	page
});

export default reducers;
