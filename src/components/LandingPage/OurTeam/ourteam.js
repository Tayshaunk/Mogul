import React from "react";
import TayPicture from "../../../assets/tay.jpg";
import MarcusPicture from "../../../assets/marcus.jpg";
import "./ourteamstyles.css";

function Team() {
  return (
    <div>
      <div className="container">
        <br></br>
        <h1 className="bigblue"> Our Team</h1>
        <hr color="white" width="20%" className="underline1" />

        <div className="row">
          <div className="gamePara">
            <p>
              Our team is made up of young minds who put their skills to the
              test every day. By creating our own currency, we are working on
              blockchain technology and expanding our understanding of the
              crypto world. The crypto world is expanding on a daily basis as
              our world transitions to the online currency. We do not intend to
              fall behind and we took this as the perfect opportunity to not
              only learn block chain and businesses as a whole but teach it also
              this is why we created Mogul.
            </p>
          </div>
          <div className="row">
            <div className="col">
              <img className="crown" src={TayPicture}></img>
              <h3 className="names">Tayshaun Kelly</h3>
              <p className="desc">
                I am a high school student striving to become a Software
                Engineer in the future and expand my knowledge of all things
                coding. Plenty of experience teaching and working with code.
                Demonstrated leader with the ability to communicate
                effectively.Proficient in Javascript, HTML; CSS; Learning
                React.js, Solidity, and Python.
              </p>
            </div>
            <div className="col">
              <img className="crownM" src={MarcusPicture}></img>
              <h3 className="names">Marcus Mitchell</h3>
              <p className="desc">
                As a Homeschooled High School Senior, I am striving to be a
                Software Engineer in the future. I hope to grow my knowledge in
                multiple code languages while teaching others the benefits of
                emerging tech. I am a leader who would like to see the best in
                everyone I work with and ready to do what it takes to make ideas
                become reality ! Past experience includes UI/UX and ScrumMaster
                responsibilities. Proficient in Javascript, HTML; CSS; Learning
                React.js, Solidity, and Python.
              </p>
            </div>
          </div>
        </div>
        <div className="align-items-center">
          <hr></hr>
        </div>
        <div className="container">
          <br></br>
        </div>
      </div>
    </div>
  );
}

export default Team;
