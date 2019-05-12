import * as constants from './constants';
import axios from 'axios';

export const setServerList = (data) => ({
	type: constants.SET_SERVER_LIST,
	data
})

export const toggleDialog = (server) => ({
	type: constants.TOGGLE_DIALOG,
	server
})
export const closeDialog = (server) => ({
	type: constants.CLOSE_DIALOG,
	server
})
export const toggleTopShow = (show) => ({
	type: constants.TOGGLE_SCROLL_TOP,
	show
})

export const closeAllDialog = () => ({
	type: constants.CLOSE_ALL_DIALOG
})

export const changeType = (newType) =>({
	type: constants.CHANGE_TYPE,
	newType
})

export const addResources = (server,newResources) =>{
	server.showDialog = undefined;
	server.resources = server.resources.concat(newResources);
	return updateServerRequest(server);
}

export const deleteItem = (server,index) =>{
	server.showDialog = undefined;
	server.resources.splice(index,1)
	return updateServerRequest(server);
}

const updateServerRequest = (server) =>{
	let headers = {'Content-Type': 'application/json'}
	return (dispatch)=>{
		axios.put( 'http://localhost:3001/agents/'+server.id,server,{headers:headers}).then((res)=>{
			if(res.status === 200 && res.data){
				res.data.showDialog = false;
				console.log(res)
				dispatch(updateServer(res.data))
			}else{

			}
			
		})
	}
}
const updateServer = (server) => ({
	type: constants.UPDATE_SERVER,
	server
});