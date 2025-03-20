import React from "react";
import "./Services.css";
import { FaCode } from "react-icons/fa";
function Services() {
  return (
    <div className="Services">
      <div className="mainclass-1">
        <div className="mainup">
          <div className="d1">
            <h1 style={{ color: "white" }}>
              <FaCode />
            </h1>
            <h1>Web Development</h1>
            <p>
              Web development is the work <br /> involved in developing a
              website <br /> for the Internet (World Wide Web)
            </p>
            <button className="btn-d1">Read More</button>
          </div>
          <div className="d2">
            <h1 style={{ color: "white" }}>
              <FaCode />
            </h1>
            <h1>UI/UX Design </h1>
            <p>
              Web development is the work <br /> involved in developing a
              website <br /> for the Internet (World Wide Web)
            </p>
            <button className="btn-d1">Read More</button>
          </div>
          <div className="d3">
            <h1 style={{ color: "white" }}>
              <FaCode />
            </h1>
            <h1>
              Responsive Web <br /> Design
            </h1>
            <p>
              Web development is the work <br /> involved in developing a
              website <br /> for the Internet (World Wide Web)
            </p>
            <button className="btn-d1">Read More</button>
          </div>
          <div className="d33">
            <h1 style={{ color: "white" }}>
              <FaCode />
            </h1>
            <h1>
              Figma/XD/Sketch to <br /> HTML Conversion
            </h1>
            <p>
              Web development is the work <br /> involved in developing a
              website <br /> for the Internet (World Wide Web)
            </p>
            <button className="btn-d1">Read More</button>
          </div>
        </div>
        <div className="maindn">
          <div className="d4">
            <h1 style={{ color: "white" }}>
              <FaCode />
            </h1>
            <h1>Single Page Applications (SPA's)</h1>
            <p>
              A single-page application (SPA) is a web application or website
              <br /> that interacts with the user by
            </p>
            <button className="btn-d1">Read More</button>
          </div>
          <div className="d5">
            <h1 style={{ color: "white" }}>
              <FaCode />
            </h1>
            <h1>Search Engine Optimization (SEO)</h1>
            <p>
              Search engine optimization is the process of improving the quality
              <br /> and quantity of website traffic to
            </p>
            <button className="btn-d1">Read More</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
