import React from "react";
import "./GameOverviewStyles.css";
import picture from "../../../assets/crypto1.png";

const Overview = () => {
  return (
    <div className="GameOverView">
      <img src={picture} className="picture" />
      <div className="content1">
        <h1 className="def">What is Mogul? </h1>
        <hr color="white" width="45%" className="underline12" />
        <p className="desc">
          In Mogul you start off as a beginning business person and work to
          build a tech empire! You are taught mutiple parts of business such as
          Finances, Operations, Business Growth and much much more. Every
          decision is up to you, but be warned making certain business decisions
          can have an impact that's either positive, negative or both!
        </p>
      </div>
    </div>
  );
};

export default Overview;
