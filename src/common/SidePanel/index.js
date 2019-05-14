import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
// import { CSSTransition } from 'react-transition-group';
// import { actionCreators } from './store';
import { actionCreators as headerActionCreators } from '../header/store'
import './style.scss'
class SidePanel extends Component {
	constructor(
        props, context
	){
		super(props,context);
		this.state={
            pathName : window.location.hash.replace(/#/, '')
        }
	}
	render() {
        console.log(this.props)
		return (
			<div className={`side-panel ${this.props.showSideMenu?'MenuAnimation':null}`}>
            <div className="side-wrap">
                <div className="close-btn">
                    <span className="icon-close blue-action fs20" onClick={this.props.hideSideMenu}></span>
                    {/* onClick="showMenu=false" */}
                </div>
                <ul className="menu-list">
                    <Link to='/dashboard'><li className={this.state.pathName === '/dashboard'?'menu-select':''}><span className="icon-dashboard fs20"></span>DASHBOARD</li></Link>
                    <Link to='/agent'><li className={this.state.pathName === '/agent'?'menu-select':''}><span className="icon-sitemap fs20"></span>AGENT</li></Link>
                    <Link to='/myCruise'><li className={this.state.pathName === '/myCruise'?'menu-select':''}><span className="icon-boat fs20"></span>MY CURISE</li></Link>
                    <Link to='/help'><li className={this.state.pathName === '/help'?'menu-select':''}><span className="icon-life-bouy fs20"></span>HELP</li></Link>
                </ul>
                {/* <div className="history">
                    <div className="history-title">HISTORY</div>
					{this.historyList.map((li)=>{
						return <li key={li.toString()}>{li}</li>
					})}
                    <ul>

                        <li *ngFor="let resource of cruiseService.data.allList"><a href="javascript:void(0);">{{resource.name}}</a></li>
                    </ul>
                </div> */}
            </div>
        </div>
		);
    }

    componentDidMount() {
        window.addEventListener('hashchange',()=>{
            this.setState({
                pathName: window.location.hash.replace(/#/, '')
            })
        })
    }
}



const mapState = (state) => ({
	showSideMenu: state.getIn(['header', 'showSideMenu'])
})

const mapDispath = (dispatch) => ({
    hideSideMenu(){
        dispatch(headerActionCreators.hideSideMenu());
    }

})

export default connect(mapState,mapDispath)(SidePanel);
