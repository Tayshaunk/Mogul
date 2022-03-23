import React from 'react';
import "./GameStyles/GameStyles.css";

export class Container extends React.Component {
	render () {
		return (<div 
			id={this.props.id || ''} 
			className={"container " + (this.props.className || '')} 
			style={{
				maxHeight: this.props.maxHeight || ''
			}}
		>{this.props.children}
		</div>);
	}
	
}





