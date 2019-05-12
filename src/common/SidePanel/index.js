import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
// import { CSSTransition } from 'react-transition-group';
// import { actionCreators } from './store';
// import { actionCreators as loginActionCreators } from '../../pages/login/store'
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
			<div className="side-panel"> 
			{/* [ngClass]="{'MenuAnimation' : showMenu}" */}
            <div className="side-wrap">
                <div className="close-btn">
                    <span className="icon-close blue-action fs20"></span>
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



// const mapStateToProps = (state) => {
// 	return {
// 		focused: state.getIn(['header', 'focused']),
// 		list: state.getIn(['header', 'list']),
// 		page: state.getIn(['header', 'page']),
// 		totalPage: state.getIn(['header', 'totalPage']),
// 		mouseIn: state.getIn(['header', 'mouseIn']),
// 		login: state.getIn(['login', 'login'])
// 	}
// }

// const mapDispathToProps = (dispatch) => {
// 	return {
// 		handleInputFocus(list) {
// 			(list.size === 0) && dispatch(actionCreators.getList());
// 			dispatch(actionCreators.searchFocus());
// 		},
// 		handleInputBlur() {
// 			dispatch(actionCreators.searchBlur());
// 		},
// 		handleMouseEnter() {
// 			dispatch(actionCreators.mouseEnter());
// 		},
// 		handleMouseLeave() {
// 			dispatch(actionCreators.mouseLeave());
// 		},
// 		handleChangePage(page, totalPage, spin) {
// 			let originAngle = spin.style.transform.replace(/[^0-9]/ig, '');
// 			if (originAngle) {
// 				originAngle = parseInt(originAngle, 10);
// 			}else {
// 				originAngle = 0;
// 			}
// 			spin.style.transform = 'rotate(' + (originAngle + 360) + 'deg)';

// 			if (page < totalPage) {
// 				dispatch(actionCreators.changePage(page + 1));
// 			}else {
// 				dispatch(actionCreators.changePage(1));
// 			}
// 		},
// 		logout() {
// 			dispatch(loginActionCreators.logout())
// 		}
// 	}
// }

export default connect()(SidePanel);
