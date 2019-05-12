import { combineReducers } from 'redux-immutable';
import { reducer as headerReducer } from '../common/header/store';
import { reducer as dashboardReducer } from '../pages/dashboard/store';
import { reducer as agentReducer } from '../pages/agent/store';
import { reducer as helpReducer } from '../pages/help/store';
import { reducer as myCruiseReducer } from '../pages/myCruise/store';

const reducer = combineReducers({
	header: headerReducer,
	dashboard: dashboardReducer,
	agent: agentReducer,
	help: helpReducer,
	myCruise: myCruiseReducer
});

export default reducer;
