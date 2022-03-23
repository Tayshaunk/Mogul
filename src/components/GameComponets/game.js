import React from "react";
import { GameContainer } from "./GameContainer.js";
import { Scenes } from "./scenes/Scenes.js";
import "./GameStyles/GameStyles.css"
class Game extends React.Component {
  //OTHER
  constructor(props) {
    super(props);
    this.state = {
      Player: {
        name: "Player#1",
        inventory: [],
        itemID: 0,
        
      },
      currentScene: null,
    };
    this.Scenes = Scenes;
  }


  //SCENE
  gotoScene(scene, passArgs) {
    //passArgs is for if you want to pass something to the next scene from a previous one
    if (scene !== null) {
      this.setState((prevState, props) => {
        return {
          currentScene: scene,
          currentSceneArgs: passArgs || prevState.currentSceneArgs,
        };
      });
      if (scene !== this.state.currentScene) {
        scene.playerVisitedCounter++;
      }
    } else {
      alert("There was an error going to a scene.");
    }
  }

  //REACT, not the constructor tho
  componentDidMount() {
    this.gotoScene(this.Scenes.characterSelection);
  }

  render() {
    let game = {
      //State
      state: this.state,
      setState: this.setState.bind(this),
      
      //Scenes
      Scenes: this.Scenes,
      gotoScene: this.gotoScene.bind(this),
    };
    return (
      <div>
        <GameContainer game={game} />
      </div>
    );
  }
}

export default Game;
