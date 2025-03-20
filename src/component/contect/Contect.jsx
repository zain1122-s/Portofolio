import React from "react";
import "./context.scss";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Zain from '../../assets/Zain.jpg'
function Contect() {
  return (
    <div className="main-a">
      <div className="main-b">
        <div className="text">
        <h1>
          Hello it's <span style={{ color: " #50dfe9" }}>ME</span>, <br />{" "}
          <span className="name"> Shahzain Alam </span>
          <br /> i'm a{" "}
          <span style={{ color: " #50dfe9" }}>frontend developer</span>
        </h1>
        <p style={{ fontSize: "1.2rem" }}>
          During my 2 years as a Senior Web Developer at Dot Austere PVT LTD, I
          led web development projects for clients and provided <br />{" "}
          mentorship to Junior Web Developer.
        </p>
         <div className="tag">
        <a href="" className="facebook">
          <FaFacebook style={{ color: " #50dfe9" }} />
        </a>
        <a href="https://github.com/zain1122-s" className="git">
          <FaGithub style={{ color: " #50dfe9" }} />
        </a>
        <a
          href="https://www.linkedin.com/in/shahzain-ali-928a21322/"
          className="linkin"
        >
          <FaLinkedin style={{ color: " #50dfe9" }} />
        </a>
        </div>

        <button className="butn">Download CV</button>
        </div>
        <div className="img">
        <img src={Zain} alt="profile"  className="image"/>
        </div>  
      </div>
    
    </div>
  );
}

export default Contect;
