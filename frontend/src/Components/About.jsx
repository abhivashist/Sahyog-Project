import React from "react";
import ghar from "./image/Ghar.jpg";
import "./styleabout.css";

const About = () => {
  return (
    <>
      <div className="about">
        <span>About</span>
        <p>
          -“To help people find happiness.”
          <li>To provide Social , Educational and Economic Empowerment.</li>
          <li>To create various opportunities for individuals.</li>
          <li>Help someone to use his/her leisure time.</li>
          <li>
            Not only studies one can learn or teach any other field of interest.
          </li>
          <li>To enhace social skills.</li>
        </p>
      </div>
      <div className="Cards">
        <div className="head">
          <span>Working With AmchaGhar</span>
        </div>
        <div className="Card">
          <img src={ghar} style={{ width: "200px" }} />
          <a
            href="https://www.googleadservices.com/pagead/aclk?sa=L&ai=DChcSEwiI7b6Zgc_xAhVIwhYFHb_BAEoYABAAGgJ0bA&ae=2&ohost=www.google.com&cid=CAESQOD2CTdX8clFYeN9-MHjXD_b3tBv4ndSDCflZcNKvPGk2-0P1socVcY2BbZ2lBbWJgMJgg7-6SwklanrOk7gvtc&sig=AOD64_38CQzZMNyeZl2KbUpkIhT-ju3YQw&q&nis=1&adurl&ved=2ahUKEwjxkbeZgc_xAhWTwTgGHTmRDgkQ0Qx6BAgCEAE"
            target="_blank"
          >
            <button>More Info</button>
          </a>
        </div>
        <div className="Ghar">
          <p>
            Amcha Ghar(Our Home) has been working in collaboration with key
            stakeholders
            <br />
            to drive a clear value proposition and deeper impact for the
            underprivileged
            <br />
            section of the society through innovative program design, robust
            monitoring
            <br />
            processes, upholding utmost transparency and accountability in its
            operations
            <br />
            with long term, strategic and sustainable approach to inclusive
            development.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
