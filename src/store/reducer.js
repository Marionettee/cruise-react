import { combineReducers } from 'redux-immutable';
import { reducer as headerReducer } from '../common/header/store';
import { reducer as agentReducer } from '../pages/agent/store';

const reducer = combineReducers({
	header: headerReducer,
	agent: agentReducer
});

export default reducer;
