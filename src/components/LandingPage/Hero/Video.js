import React from "react";
import { Link } from "react-router-dom";
import "./VideoStyles.css";

const Video = () => {
  return (
    <div className="hero">
      <video autoPlay loop muted id="video">
        <source
          src= "https://seals-team-assets.s3.amazonaws.com/mogul/black-business-man-in-a-suit-2021-12-09-15-43-30-utc.mp4"
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
          <Link to="/play" className="btn btn-light">
            Play Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Video;
