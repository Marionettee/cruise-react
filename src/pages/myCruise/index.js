import React, { PureComponent } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { actionCreators } from './store';

class MyCruise extends PureComponent {
	render() {
		const { loginStatus } = this.props;
		if (!loginStatus) {
			return (
				<div>myCruise</div>
			)
		}else {
			return <Redirect to='/'/>
		}
	}
}

const mapState = (state) => ({
	loginStatus: state.getIn(['login', 'login'])
})

const mapDispatch = (dispatch) => ({
	login(accountElem, passwordElem){
		dispatch(actionCreators.login(accountElem.value, passwordElem.value))
	}
})

export default connect(mapState, mapDispatch)(MyCruise);