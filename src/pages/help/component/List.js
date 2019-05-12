import React, {PureComponent}from 'react';
export class List extends PureComponent {

    render(){
        return (
            <div onClick={()=>this.delete(this.props.index)}>
                {this.props.val}
            </div>
        )
    }

    delete=(type)=>{
        this.props.delete(type);
    }
	
}
