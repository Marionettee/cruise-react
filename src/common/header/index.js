import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from './store';
import './style.scss'
class Header extends Component {
	state = {
		showUserMenu: false
	}
	render() {	
		return (
			<div className="header">
				<div className="header-body middle">
					<div className="menu">
						<div className="menu-btn" onClick={this.props.showSideMenu}>
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
	showSideMenu(){
		this.props.showSideMenu();
	}
}

const mapDispathToProps = (dispatch) => {
	return {
		showSideMenu(){
			dispatch(actionCreators.showSideMenu());
		}
	}
}

export default connect(null, mapDispathToProps)(Header);
