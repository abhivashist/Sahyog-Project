import React from "react";
import "./stylehome.css";
// import logo from "./Components/image/logo";
import bg from "./image/bg2.jpg";
var cDate = new Date();
cDate = cDate.getHours();
if (cDate < 12 && cDate > -1) var wish = "Good Morning";
else if (cDate > 11 && cDate < 18) {
  wish = "Good AfterNoon";
} else {
  wish = "Good Evening";
}

const Home = () => {
  return (
    <>
      <div className="parallex">
        {/* <img src={logo} /> */}
        <p>
          SAHYOG<p>(a helping hand)</p>
        </p>
      </div>
      <div className="Head"></div>
      <div className="Wish">
        <h1>
          Hello, <span>{wish}</span>
          <br />
          Welcome To Sahyog...
        </h1>
      </div>
    </>
  );
};

export default Home;
