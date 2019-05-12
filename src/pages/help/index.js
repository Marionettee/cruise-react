import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import {List} from './component/List'
class Help extends PureComponent {
	constructor(){
		super();
		this.state={
			list:[1,2,3,4]
		}
		this.delete = this.delete.bind(this);
	}
	render() {
		return (
			<div>
				<div>help</div>
				{this.state.list.map((val,index) => {
					return <List delete={this.delete} key={index} val={val} index={index}/>
				})}
			</div>			
		)
	}
	delete(index){
		this.setState((pre,pop)=>({
			'list':[1,2,3]
		}))
	}
}

const mapState = (state) => ({
	loginStatus: state.getIn(['login', 'login'])
})

export default connect(mapState, null)(Help);