import React from "react";
import "./FooterStyles.css";
import {
  FaDiscord,
  FaFacebook,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
  FaSearchLocation,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaSearchLocation
              size={20}
              style={{ color: "#ffffff", marginRight: "2rem" }}
            />
            <div>
              {/* <p>123 Acme St.</p> */}
              <h4>Los Angeles Based Company</h4>
            </div>
          </div>
          {/* <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: "#ffffff", marginRight: "2rem" }}
              />{" "}
              1-800-123-1234
            </h4>
          </div> */}
          <div className="email">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "#ffffff", marginRight: "2rem" }}
              />{" "}
              Tayshaunkelly@keepmovingahead.net
            </h4>
          </div>
        </div>
        <div className="right">
          <h4>Mogul</h4>
          <p>
            "Mogul is game under the keep moving ahead network and has been established in 2022"
          </p>
          <div className="social">
            {/* <FaFacebook
              size={30}
              style={{ color: "#ffffff", marginRight: "1rem" }}
            /> */}
            <FaDiscord
              size={30}
              style={{ color: "#ffffff", marginRight: "1rem" }}
            />
            <FaTwitter
              size={30}
              style={{ color: "#ffffff", marginRight: "1rem" }}
            />
            <FaLinkedin
              size={30}
              style={{ color: "#ffffff", marginRight: "1rem" }}
            />
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
