import React from "react";
import { Link } from "react-router-dom";
import "./VideoStyles.css";
// import businessVideo from "https://drive.google.com/file/d/1UW3MdTMkvL4MtNeNvgY6iwPR4NfwMaLK/view?usp=sharing";
// import businessVideo from "https://seals-team-assets.s3.amazonaws.com/mogul/business1.mp4";

const Video = () => {
  return (
    <div className="hero">
      <video autoPlay loop muted id="video">
        <source
          src="https://seals-team-assets.s3.amazonaws.com/mogul/business1.mp4"
          type="video/mp4"
        />
      </video>
      <div className="content">
        <h1>Successful Businesses Are Everywhere </h1>
        <p> Learn How To Start Yours Today.</p>
        <div className="btn-container">
          {/* <Link to="/signup" className="btn">
            SignUp
          </Link> */}
          <Link to="/playnow" className="btn btn-light">
            Play Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Video;
