import  React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from '../store';
import ServerDetail from './ServerDetail'
class ServerList extends PureComponent {
    list = [];
    test = true;
    mapListAccoundingToType(){
        // if(this.test){
        //     this.list = this.props.serverList.toJS();
        //     this.test = true
        // }else{
        //     console.log(this.list)
        // }
        if(this.props.selectedType === 'all'){
            return this.props.serverList.toJS().map((server,index)=>{
                return <ServerDetail key={index} server={server}/>
            })
        }else if(this.props.selectedType === 'physical'){
            let physicalList = this.props.serverList.toJS().filter((server)=>{
                return server.type === 'physical';
            });
            return physicalList.map((server,index)=>{
                return <ServerDetail key={index} server={server}/>
            })
        }else if(this.props.selectedType === 'virtual'){
            let virtualList = this.props.serverList.toJS().filter((server)=>{
                return server.type === 'virtual';
            });
            console.log(virtualList)
            return virtualList.map((server,index)=>{
                return <ServerDetail key={index} server={server}/>
            })
        }
    }
    
    render(){
        return (
            <div>
                {this.mapListAccoundingToType()}
            </div>
        )
    }

    // componentWillReceiveProps(a){
    //     if(a.serverList.toJS()[0].showDialog === true){
    //         this.test = false;
    //         this.list[0].showDialog = true;
    //     }
    // }

}
const mapState = (state) => ({
    serverList: state.getIn(['agent', 'serverList']),
	virtualList: state.getIn(['agent', 'virtualList']),
	physicalList: state.getIn(['agent', 'physicalList']),
    selectedType: state.getIn(['agent', 'selectedType']),
    hitErr : state.getIn(['agent', 'hitErr'])
});

const mapDispatch = (dispatch) => ({
	toggleDialog(server,index) {
		dispatch(actionCreators.toggleDialog(server,index));
	}
})

export default connect(mapState, mapDispatch)(ServerList);