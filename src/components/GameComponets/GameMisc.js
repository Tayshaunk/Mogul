import React from "react";
import "../GameComponets/GameStyles/GameStyles.css"
import {
//	StyledContainer, 
	Container
} from './Container.js';


export class GameFullText extends React.Component {
	render () {
		var text,
			extras = [];
		if(!this.props.isCurrentChannelNull) {
			text = this.props.currentScene.getText(this.props.game);
			let hasType = false;
			if (text.constructor === Array) {
				if(text[0] === 'string') {
					// just ignore it since we'll do it after
				} else if (text[0] === 'react') {
					hasType = true;
				}
				text = text[1];
			}

			if(!hasType && typeof(text) === 'string') {
				text = text.split('\n').map((text, index) => {
					console.log('boop');
					return (<GameText 
						key={"GameTitle-" + index + "-" + (index*2)} 
						text={text}
					/>);
				})
			}

			extras = this.props.currentScene.getExtras(this.props.game);
		}
		return (<Container maxHeight="40%">
			{text}
			{extras.map((val, index) => {
				if (typeof(val) === 'string') {
					return (<GameText 
						key={"GameTitle-" + index + '-Extra-' + (index*2)} 
						text={val}
					/>);
				} else {
					return val;
				}
			})}
		</Container>);
	}
}

export class GameButton extends React.Component {
	render () {
		return ( <div 
			className="game-button" 
			onClick={this.props.onClick}
		>{this.props.text}</div>);
	}
}


export class GameTitle extends React.Component {
	render () {
		return (<h1 className="game-title">{this.props.text}</h1>);
	}
}

export class GameText extends React.Component {
	render () {
		return (<div>
			<p className="game-text">{this.props.text}</p>
		</div>);
	}
}


export class GameCheckbox extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			checked: this.props.checked || false
		};
	}
	render () {
		return (<div>
			<input 
				checked={this.state.checked} 
				type="checkbox" 
				onChange={(event) => {
					this.setState({
						checked: event.target.checked
					});
					if(typeof(this.props.onChange) === 'function') {
						this.props.onChange(event, event.target.checked, this.props.onChangeArgs);
					}
				}}
			/><label>{this.props.text}</label><br />
		</div>);
	}
}

export class GameInput extends React.Component {
	constructor (props) {
		super(props);

		this.state = {
			value: this.props.value || ''
		}
	}
	render () {
		
		return (<div>
			<input
				type="text" 
				value={this.state.value} 
				onChange={(event) => {
					this.setState({
						value: event.target.value
					});

					if(typeof(this.props.onChange) === 'function'){
						this.props.onChange(event, event.target.value, this.props.onChangeArgs);
					}
				}}
			/><label>{this.props.text}</label><br />
		</div>)
	}
}

export class GameSelect extends React.Component {
	constructor (props) {
		super(props);
		
		this.state = {
			value: this.props.value || this.props.options[0]
		};

	}

	render () {
		return (<div>
			<select value={this.state.value} onChange={(event) => {
					this.setState({
						value: event.target.value
					});

					if (typeof(this.props.onChange) === 'function') {
						this.props.onChange(event, event.target.value, this.props.onChangeArgs);
					}
				}}>
				{this.props.options.map((option, index) => {
					return <option key={'option-' + index}>{option}</option>;
				})}
			</select>
			<label>{this.props.text}</label><br />
		</div>);
	}
}





export class GameImage extends React.Component {
	render () {
		return (<img 
			src={this.props.src} 
			alt=""
		/>);
	}
}


export class GameItem extends React.Component {
	render () {
		return (<div
			className="game-item"
		>
			
			<p>{this.props.item.getDescription(this.props.game)}</p>
		</div>);
	}
}