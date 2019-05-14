import React, {PureComponent} from 'react';
import './Dialog.scss'
import {actionCreators} from '../store'
import { connect } from 'react-redux';
class Dialog extends PureComponent{
    constructor(){
        super();
        this.state = {
            addBar: ''
        }
        this.addResources = this.addResources.bind(this);
        this.closeDialog = this.closeDialog.bind(this);
    }
    render(){
        return (
            <div className="dialog-mx">
                <div className={`dialog-main ${this.props.isLast? 'dialog-top':'dialog-bottom'}`}>
                    <div className="add-descript">
                        <p>separate multiple resource name with commas</p>
                        <div >
                            <span className="icon-close blue-action fs20" onClick={this.closeDialog}></span>
                        </div>
                    </div>
                    <div>
                        <input className="add-input" placeholder="e.g. Chrome,Firefox" type="text"
                        defaultValue = {this.state.addBar} onChange={this.changeValue}/>
                    </div>
                    <button className="add-submit" onClick={this.addResources}>add resources</button>
                    <button className="cancel" onClick={this.closeDialog}>cancel</button>
                </div>
            </div>
        )
    }
    changeValue=(e)=>{
        this.setState({
            addBar: e.target.value
        })
    }
    addResources(){
        let newResources = this.state.addBar
        newResources = newResources.replace(/(,*)$/, '')
        if( newResources === '') return;
        this.props.addResources(this.props.server, newResources.split(','))
    }
    closeDialog(){
        this.props.closeDialog(this.props.server)
    }
}
const mapDispatch =(dispatch)=>({
    closeDialog(server){
        dispatch(actionCreators.closeDialog(server));
    },
    addResources(server,newResources){
        dispatch(actionCreators.addResources(server,newResources));
    }
})

export default connect(null, mapDispatch)(Dialog);