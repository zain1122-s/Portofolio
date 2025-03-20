import React from "react";
import "./About.scss";
import Zain from "../../assets/Zain.jpg";
function About() {
  return (
    <div className="mainclass">
      <div className="s-class">
        <div className="class-1">
          <img src={Zain} alt="Zain" className="photo" />
        </div>
        <div className="class-2">
          <h1>
            About <span style={{color:"#50dfe9"}}>Me</span> <br /> <span style={{fontSize:"3rem"}}>Frontend Developer</span>
          </h1>
          <p style={{fontSize:"1.2rem"}}>
            As a frontend developer with 3 years of experience, I have developed
            a strong understanding <br />of HTML5, CSS3, JavaScript, and various
            frontend frameworks such as Bootstrap5 and React JS. <br /> I have used
            these technologies to create responsive, user-friendly web
            applications that meet <br /> the needs of my clients.
          </p>
          <div className="button-2">
     <button className="btn2">Read more</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
