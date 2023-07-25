import React from "react";
import "./Footerstyles.css";
import {
  FaHome,
  FaPhone,
  FaMailBulk,
  FaFacebook,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
const footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <div>
              <p>Warangal</p>
              <p>Telangana.</p>
            </div>
          </div>
          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{
                  color: "#fff",
                  marginRight: "2rem",
                }}
              />
              91 9767022217
            </h4>
          </div>
          <div className="email">
            <h4>
              <FaMailBulk
                size={20}
                style={{
                  color: "#fff",
                  marginRight: "2rem",
                }}
              />
              rajani.vucha@gmail.com
            </h4>
          </div>
        </div>
        <div className="right">
          <h4>About the company</h4>
          <p>
            This is Rajani.I am a freelancer .I enjoy discussing new projects
            and design challenges.
          </p>
          <div className="social">
            <FaFacebook
              size={20}
              style={{
                color: "#fff",
                marginRight: "1rem",
              }}
            />
            <FaTwitter
              size={20}
              style={{
                color: "#fff",
                marginRight: "1rem",
              }}
            />
            <FaLinkedinIn
              size={20}
              style={{
                color: "#fff",
                marginRight: "1rem",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default footer;
