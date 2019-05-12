import React, {PureComponent}from 'react';
import './SearchBar.scss'
export class SearchBar extends PureComponent {

    render(){
        return (
            <div className="search-bar">
                <div className="type">
                    <button className={this.props.selectedType === 'all'? 'selected' : '' } onClick={(e)=>this.changeType(e,'all')}>All</button>
                    <button className={this.props.selectedType === 'physical' ? 'selected' : ''} onClick={(e)=>this.changeType(e,'physical')}>PHYSICAL</button>
                    <button className={this.props.selectedType === 'virtual' ? 'selected': ''} onClick={(e)=>this.changeType(e,'virtual')}>VIRTUAR</button>
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

    changeType=(e,type)=>{
        this.props.changeType(type);
    }
	
}
