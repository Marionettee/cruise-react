import { fromJS } from 'immutable';
import * as constants from './constants';

const defaultState = fromJS({
	serverList: [],
	buildingList: [],
	idleList: [],
	physicalList: [],
	virtualList: [],
	selectedType: 'all',
	hitErr: false
});

const toggleDialog = (state,action) => {
	let allList = state.get('serverList').toJS();
	allList.every((server) => {
		if(server.id===action.server.id){
			server.showDialog = !server.showDialog;
			return false;
		}else{
			return true
		}
	})
	return state.merge({'serverList': allList});
}

const changeType = (state,action) =>{
	return state.merge({
		'selectedType': action.newType
	})
}

const closeDialog = (state,action) =>{
	let allList = state.get('serverList').toJS();
	allList.every((server) => {
		if(server.id===action.server.id){
			server.showDialog = false;
			return false;
		}else{
			return true;
		}
	})
	return state.merge({'serverList': allList});
}
const setServerList = (state, action) => {
	return state.merge({
		serverList: action.data.serverList,
		buildingList: action.data.buildingList,
		idleList: action.data.idleList,
		physicalList: action.data.physicalList,
		virtualList: action.data.virtualList
	})
}

const updateServer = (state, action) =>{
	let allList = state.get('serverList').toJS();
	let newList = allList.map((server) => {
		if(server.id===action.server.id){
			server=action.server;
		}
		return server;
	})
	return state.merge({'serverList': newList});
}
const closeAllDialog = (state,action) =>{
	let allList = state.get('allServerList').toJS();
	allList.map((ser) => {
		ser.showDialog = false;
		return ser
	});
	return state.merge({'allServerList': allList})
}


export default (state = defaultState, action) => {
	switch(action.type) {
		case constants.SET_SERVER_LIST:
			return setServerList(state, action);
		case constants.TOGGLE_DIALOG:
			return toggleDialog(state,action);
		case constants.CLOSE_ALL_DIALOG:
			return closeAllDialog(state,action);
		case constants.CLOSE_DIALOG:
			return closeDialog(state,action);
		case constants.CHANGE_TYPE:
			return changeType(state,action);
		case constants.UPDATE_SERVER:
			return updateServer(state, action);
		case constants.TOGGLE_SCROLL_TOP:
			return state.set('showScroll', action.show);
		default:
			return state;
	}
}