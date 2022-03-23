import React from 'react';
import {
	Container
} from '../Container.js';
import {
	GameButton
} from '../GameMisc';
import "../GameStyles/GameStyles.css"
import { Container as ContainRow , Row, Col } from "react-bootstrap";
export class ButtonsContainer extends React.Component {
	render () {
		return (
		<div className='Test'>
			<Container id="buttons-container"  >
				{/* <ContainRow >
					<Row> 
						<Col md={10}>  */}
			{((!this.props.isCurrentChannelNull) ? this.props.currentScene.buttons.map((button, index) => {
				if(button.getAppear(this.props.game)){
					return (
					<GameButton 
						key={"game-button-" + index + "-" + (index*2)} 
						text={button.getText(this.props.game)} 
						onClick={() => button.onClick(this.props.game)}
					/>);
				}
				return false;
			}) : false)}
			{/* </Col>
			</Row>
		</ContainRow>  */}
		</Container>
		</div>);
	}
}