import React from 'react';
// import {
// 	StyledContainer
// } from './Container.js';
import {
	GameFullText, 
	GameTitle
} from './GameMisc';
import {
	ButtonsContainer
} from './ButtonContainers/ButtonsContainer.js';
import "./GameStyles/GameStyles.css"
import { Container as ContainRow , Row, Col } from "react-bootstrap";

//Image Imports
import MarcusNft from "../../assets/marcuscharacter.png";


export class GameContainer extends React.Component {
	render () {
		let currentScene = this.props.game.state.currentScene;
		let isCurrentChannelNull = currentScene === null;
		return (
			<div className='global-container'> 
			<div className='title'> 
			<GameTitle 
				text={(!isCurrentChannelNull) ? 
					currentScene.getTitle(this.props.game) 
					: 
					'Loading....'
				}
			/>
			</div>
			<div className='game-content'>
				<div className='prompt'>
			<GameFullText 
				isCurrentChannelNull={isCurrentChannelNull} 
				game={this.props.game} 
				currentScene={currentScene} 
			/>
			</div>
		<img src={MarcusNft} className="nft-Image" />
		</div>
		<div className='button-container'>
		<ContainRow >
					<Row> 
						<Col md={5}> 
			<ButtonsContainer 
				isCurrentChannelNull={isCurrentChannelNull} 
				game={this.props.game} 
				currentScene={currentScene}
			/>
			</Col>
			</Row>
		</ContainRow> 
			 </div>
			</div>
		);
	}
}