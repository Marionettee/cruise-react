import React, {PureComponent}from 'react';
import {connect} from 'react-redux';
import {actionCreators} from '../store'
import './SearchBar.scss'
class SearchBar extends PureComponent {
    render(){
        return (
            <div className="search-bar">
                <div className="type">
                    <button className={this.props.selectedType === 'all'? 'selected' : '' } onClick={()=>this.changeType('all')}>All</button>
                    <button className={this.props.selectedType === 'physical' ? 'selected' : ''} onClick={()=>this.changeType('physical')}>PHYSICAL</button>
                    <button className={this.props.selectedType === 'virtual' ? 'selected': ''} onClick={()=>this.changeType('virtual')}>VIRTUAR</button>
                </div>
                <div className="input-bar">
                    <span className="icon-search fs20"></span><input type="text" />
                </div>
                <div className="layout">
                    <span className="icon-th-card"></span>
                    <span className="icon-th-list blue-action"></span>                    
                </div>
            </div>
        )
    }

    changeType(type){
        this.props.changeType(type);
    }
	
}
const mapState = (state)=>({
    selectedType: state.getIn(['agent', 'selectedType'])
});
const mapDispatch = (dispatch)=>({
    changeType(type){
		dispatch(actionCreators.changeType(type));
	}
})
export default connect(mapState,mapDispatch)(SearchBar)