import React from "react";
import TayPicture from "../assets/tay.jpg";
import "./ourteamstyles.css";

function Team() {
  return (
    <div>
      {/* <header class="d-flex align-items-center">
        <div className="title" id="container">
          <h1 className="Maintitle"> ABOUT US </h1>
        </div>
      </header> */}

      <div className="container">
        <br></br>
        <h1 className="bigblue"> Our Goal</h1>

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
                Engineering the future and expand my knowledge of all things
                coding.
              </p>
            </div>
            <div className="col">
              <img className="crown" src="#"></img>
              <h3 className="names">Marcus Mitchell</h3>
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
