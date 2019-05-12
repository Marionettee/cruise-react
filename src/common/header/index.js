import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from './store';
// import { actionCreators as loginActionCreators } from '../../pages/login/store'
import './style.scss'
class Header extends Component {
	// constructor(){
	// 	super();
	// 	// this.showUserMenu = this.showUserMenu.bind(this);
	// }
	state = {
		showUserMenu: false
	}
	render() {
		const { showMenu } = this.props;		
		return (
			<div className="header">
				<div className="header-body middle">
					<div className="menu">
						<div className="menu-btn" onClick={()=>showMenu()}>
							<span className="icon-navicon"></span>  
						</div>
					</div>
					<div className="header-title"><img src="../../resources/logo/logo.svg" alt="" /></div>
					<div className="avatar">
						<div className="ava-scope" onClick={()=>{this.setState({showUserMenu : !this.state.showUserMenu})}}>
							<div>
								<img src="../../resources/logo/avatar.jpg" alt="" />
							</div>
							<span className="icon-angle-down"></span>
						</div>
						{this.state.showUserMenu?(
						<ul className="userMenu">
							<li>
								<span className="icon-id-card"></span>
								Profile
							</li>
							<li>
								<span className="icon-sign-in"></span>
								Sign out
							</li>
						</ul>):null}
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		focused: state.getIn(['header', 'focused']),
		list: state.getIn(['header', 'list']),
		page: state.getIn(['header', 'page']),
		totalPage: state.getIn(['header', 'totalPage']),
		mouseIn: state.getIn(['header', 'mouseIn']),
		login: state.getIn(['login', 'login'])
	}
}

const mapDispathToProps = (dispatch) => {
	return {
		handleInputFocus(list) {
			(list.size === 0) && dispatch(actionCreators.getList());
			dispatch(actionCreators.searchFocus());
		},
		handleInputBlur() {
			dispatch(actionCreators.searchBlur());
		},
		handleMouseEnter() {
			dispatch(actionCreators.mouseEnter());
		},
		handleMouseLeave() {
			dispatch(actionCreators.mouseLeave());
		},
		handleChangePage(page, totalPage, spin) {
			let originAngle = spin.style.transform.replace(/[^0-9]/ig, '');
			if (originAngle) {
				originAngle = parseInt(originAngle, 10);
			}else {
				originAngle = 0;
			}
			spin.style.transform = 'rotate(' + (originAngle + 360) + 'deg)';

			if (page < totalPage) {
				dispatch(actionCreators.changePage(page + 1));
			}else {
				dispatch(actionCreators.changePage(1));
			}
		},
		showMenu(){
			dispatch(actionCreators.showMenu());
		}
	}
}

export default connect(mapStateToProps, mapDispathToProps)(Header);
