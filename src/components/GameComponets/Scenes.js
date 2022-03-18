import React from "react";

import { Scene, SceneButton } from "./Scene.js";
import //	StyledContainer,
//	Container
"./Container.js";
import //	GameContainer
"./GameContainer.js";
import {
  //	GameFullText,
  GameText,
  //	GameButton,
  //	GameTitle,
  //	GameCheckbox,
  GameInput,
  GameSelect,
  //	GameImage
} from "./GameMisc";
import //	ButtonsContainer
"./ButtonsContainer.js";
import //	PlayerContainer
"./PlayerContainer.js";
import //	SituationalContainer
"./SituationalContainer.js";

export var Scenes = {
  characterSelection: new Scene(
    "Name Selection",
    (game) => {
      return [
        "react",
        <div>
          <GameText text="Choose:" />
          <GameInput
            onChange={(event, text) =>
              game.setPlayer({
                name: text,
              })
            }
            text="Name"
          />
          
        </div>,
      ];
    },
    [
      new SceneButton("Confirm", (game) => {
        game.gotoScene(Scenes.IntroScreen);
      }),
    ]
  ),

  //intro scene
  IntroScreen: new Scene(
    "Lets get started!",
    (game) => {
      let text =
        "Hello! I am marus your new business advisor. I will be here to help and guide you through the basics of creating your company. Let's not waste any time, let's pick the type of business you would like to start! Keep in mind though each business type has its own positive and negative effects!";

      return text;
    },
    [
      new SceneButton("sole Proprietorship", (game) => {
        game.gotoScene(Scenes.Sole_Proprietorship);
      }),
      new SceneButton("LLC (Limited Liability Company)", (game) => {
        game.gotoScene(Scenes.limited_Liability_Company);
      }),
      new SceneButton("Corporation", (game) => {
        game.gotoScene(Scenes.Corporation);
      }),
      new SceneButton("None Profit", (game) => {
        game.gotoScene(Scenes.Non_Profit);
      }),
    ]
  ),

  Sole_Proprietorship: new Scene(
    "Sole Proprietorship",
    (game) => {
      let text =
        "Great Choice! Sole Proprietorships are great for all starting businesses. although one downside of sole Proprietorships is that they have less starting funds , in this case you've been awarded $10000 in starting funds.";

      return text;
    },
    [
      new SceneButton("that'll be enough to get us started!", (game) => {
        game.gotoScene(Scenes.Sole_Proprietorship_Hiring);
      }),
      new SceneButton(
        "I need more money! Lets take out a bank loan.",
        (game) => {
          game.gotoScene(Scenes.Sole_Proprietorship_Loan);
        }
      ),
    ]
  ),

  //Section for if the user decides to take out a bank loan
  Sole_Proprietorship_Loan: new Scene(
    "Bank Loan",
    (game) => {
      let text =
        "Im scared of this place... but we have to get this done, there are a number of different loans we can get becareful though these bankers like to pull fast ones";
      return text;
    },
    [
      new SceneButton("Large Loan", (game) => {
        game.gotoScene(Scenes.Sole_Proprietorship_Hiring);
      }),
    ]
  ),

  // Hiring section
  Sole_Proprietorship_Hiring: new Scene(
    "Hiring!",
    (game) => {
      let text =
        "A huge part of business is the team around it! lets hire some employess to help make your job easier! first up lets hire someone to handle our social media presence!";

      return text;
    },
    [
      //list of employess names to be changed
      new SceneButton("Low Skill high potential", (game) => {
        game.gotoScene(Scenes.Sole_Proprietorship);
      }),
      new SceneButton("Medium skill medium potential", (game) => {
        game.gotoScene(Scenes.limited_Liability_Company);
      }),
      new SceneButton("High skill high potential", (game) => {
        game.gotoScene(Scenes.Corporation);
      }),
    ]
  ),
};
