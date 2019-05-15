import * as constants from './constants';
import { fromJS } from 'immutable';

const defaultState = fromJS({
	showSideMenu: false
});

export default (state = defaultState, action) => {
	switch(action.type) {
		case constants.SHOW_SIDE_MENU:
			return state.set('showSideMenu', true);
		case constants.HIDE_SIDE_MENU:
			return state.set('showSideMenu', false);
		default:
			return state;
	}
}