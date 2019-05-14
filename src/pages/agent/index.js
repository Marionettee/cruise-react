import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from './store';
import { StatusUI } from './components/Status';
import SearchBar from './components/SearchBar';
import ServerList from './components/ServerList';
import axios from 'axios';

class Agent extends PureComponent {
	constructor(){
		super()
		this.state = {
			serverList:[]
		}
	}
	physicalList = [];
	virtualList = [];
	allList = [];
	buildingList = [];
	idleList = []
	filterServerList(){
		const {buildingList,idleList,virtualList,physicalList} = this.props
		return <StatusUI buildingList = {buildingList.size} idleList = {idleList.size} physicalList = {physicalList.size} virtualList = {virtualList.size}/>
	}
	render() {
		return (
			<div>
				{this.filterServerList()}
				<SearchBar />
				<ServerList />
			</div>
		)
	}
	componentDidMount() {
		this.getServerList();
		// document.body.addEventListener('click', (e) => {
		// 	this.props.closeAllDialog();
		// });
	}
	getServerList(){
		axios.get('http://localhost:3001/agents').then((res) => {
			let serverList = res.data,
			buildingList = [],
			idleList = [],
			physicalList = [],
			virtualList = []
			for(let i=0;i<serverList.length;i++){
				serverList[i].showDialog = false;
				if(serverList[i].status === 'building'){
					buildingList.push(serverList[i]);
				}else if(serverList[i].status === 'idle'){
					idleList.push(serverList[i]);
				}
				if(serverList[i].type === 'physical'){
					physicalList.push(serverList[i]);
				}else if(serverList[i].type === 'virtual'){
					virtualList.push(serverList[i]);
				}
			}
			this.props.setServerList({serverList,buildingList,idleList,physicalList,virtualList})
		});
	}

}

const mapState = (state) => ({
	serverList: state.getIn(['agent', 'serverList']),
	buildingList: state.getIn(['agent', 'buildingList']),
	idleList: state.getIn(['agent', 'idleList']),
	virtualList: state.getIn(['agent', 'virtualList']),
	physicalList: state.getIn(['agent', 'physicalList']),
	
})
const mapDispatch = (dispatch) => ({
	setServerList(data){
		dispatch(actionCreators.setServerList(data))
	},
	toggleDialog(server,index) {
		dispatch(actionCreators.toggleDialog(server,index));
	},
	closeAllDialog() {
		dispatch(actionCreators.closeAllDialog());
	}
});

export default connect(mapState, mapDispatch)(Agent);
