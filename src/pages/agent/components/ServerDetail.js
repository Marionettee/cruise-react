import React ,{Component} from 'react'
import { connect } from 'react-redux';
import { actionCreators } from '../store';
import Dialog from './Dialog'
import './ServerDetail.scss';

class ServerDetail extends Component{
    render(){
        return (
            <div className="server-detail">
                <div className="os-type">
                    <img src={"../../../resources/icons/" +this.props.server.os + ".png"} alt={this.props.server.os} />
                </div>
                <div className={`server-side ${this.props.server.status === 'idle'?'bdl-green': 'bdl-orange'}`}>
                    <div className="server-info">
                        <div className="server-panel">
                            <span className="icon-desktop fs16"></span>
                            <span className="server-name">{this.props.server.name}</span>
                            <span className={`info ${this.props.server.status === 'idle'?'green': 'orange'}`}>{this.props.server.status}</span>
                        </div>
                        <div className="server-addr">
                            <span className="icon-info fs16"></span>
                            <span>{this.props.server.ip}</span>
                        </div>
                        <div className="server-addr">
                            <span className="icon-folder fs16"></span>
                            <span>{this.props.server.location}</span>
                        </div>
                    </div>
                    <div className="server-action">
                        <div className="res-change">
                            <div className="add-ser" >
                                <button onClick={(event)=> this.toggleDialog(event)}><span className="icon-plus fs16"></span></button>
                                {this.props.server.showDialog ? (
                                    <Dialog server={this.props.server}/>
                                ): null}
                            </div>
                            <div className="del-part">
                                {
                                    this.props.server.resources.map((res,index)=>{
                                        return (
                                            <div key={index} className="del-ser" onClick={()=>this.deleteItem(index)}>
                                                <span>{res}</span>
                                                <span className="icon-trash fs16"></span>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <div className="deny-wrap">
                            {this.props.server.status==='building'?(
                                <div className="res-deny">
                                    <span className="icon-deny fs16"></span>
                                    <span>Deny</span>
                                </div>
                            ):null}
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    shouldComponentUpdate(nextProps){
        return JSON.stringify(nextProps.server) !== JSON.stringify(this.props.server);
    }
    toggleDialog(event){
        this.props.toggleDialog(this.props.server);
        event.stopPropagation();
    }
    deleteItem(index){
       this.props.deleteItem(this.props.server,index);
    }

}
const mapState = (state) => ({

});
const mapDispatch = (dispatch) =>({
    toggleDialog(server) {
		dispatch(actionCreators.toggleDialog(server));
    },
    deleteItem(server, index){
        dispatch(actionCreators.deleteItem(server,index));
    }
}) 
export default connect(mapState, mapDispatch)(ServerDetail);