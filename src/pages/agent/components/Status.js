import React from 'react';
import './Status.scss'
export const StatusUI = (props)=>{
	return (
		<div className="status">
            <div className="absolute-pos orange">
                <div className="icon-cog icon-part"></div>
                <div className="descript">Building</div>
                <div className="count">{props.buildingList}</div>                    
            </div>
            <div className="absolute-pos green">
                <div className="icon-coffee icon-part"></div>
                <div className="descript">Idle</div>
                <div className="count">{props.idleList}</div>
            </div>
            <div className="server-summary">
                <div className="server-type">
                    <div className="key">ALL</div>
                    <div className="value">{props.physicalList + props.virtualList}</div>
                </div>
                <div className="server-type">
                    <div className="key">PHYSICAL</div>
                    <div className="value">{props.physicalList}</div>
                </div>
                <div className="server-type">
                    <div className="key">VIRTUAL</div>
                    <div className="value">{props.virtualList}</div>
                </div>
            </div>
        </div>
	)
}
