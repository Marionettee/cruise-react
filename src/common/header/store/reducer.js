import * as constants from './constants';
import { fromJS } from 'immutable';

const defaultState = fromJS({
	showMenu: false
});

export default (state = defaultState, action) => {
	switch(action.type) {
		case constants.SHOW_MENU:
			return state.set('showMenu', true);
		default:
			return state;
	}
}