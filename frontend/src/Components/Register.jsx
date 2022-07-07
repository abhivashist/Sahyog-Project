import React from "react";
import { useState } from "react";
import "./stylesreg.css";
import axios from "axios";

import places from "./Location";

export default function Register() {
  const [firstname, setFn] = useState("");
  const [lastname, setLn] = useState("");
  const [dob, setDob] = useState("");
  const [email, setEmail] = useState("");
  const [num, setNum] = useState("");
  const [obj, setObj] = useState("");
  const [ser, setService] = useState("");
  const [spe, setSpecification] = useState("");
  const [exp, setExp] = useState("");
  const [loc, setLoc] = useState("");
  const [pswrd, setPswrd] = useState("");
  const [cpswrd, setCpswrd] = useState("");

  const textFn = (e) => {
    setFn(e.target.value);
  };

  const textLn = (e) => {
    setLn(e.target.value);
  };

  const textDob = (e) => {
    setDob(e.target.value);
  };

  const textEmail = (e) => {
    setEmail(e.target.value);
  };

  const textNum = (e) => {
    setNum(e.target.value);
  };

  const textObj = (e) => {
    setObj(e.target.value);
  };

  const textService = (e) => {
    setService(e.target.value);
  };

  const textSpecification = (e) => {
    setSpecification(e.target.value);
  };

  const textExp = (e) => {
    setExp(e.target.value);
  };

  const textLoc = (e) => {
    setLoc(e.target.value);
  };

  const textPswrd = (e) => {
    setPswrd(e.target.value);
  };

  const textCpswrd = (e) => {
    setCpswrd(e.target.value);
  };
  const pushItem = () => {
    axios.post("http://localhost:4000/app/signup", {
      firstname: firstname,
      lastname: lastname,
      dob: dob,
      email: email,
      number: num,
      objective: obj,
      service: ser,
      specification: spe,
      experience: exp,
      location: loc,
      pswrd: pswrd,
      cpswrd: cpswrd
    });
  };

  return (
    <div className="regbody">
      <form>
        <h1>Registration Form</h1>
        <div className="Main">
          <p>First Name:</p>
          <input type="text" name="first" onChange={textFn} required />
          <p>Last Name:</p>
          <input type="text" name="last" onChange={textLn} />
          <p>Date of Birth:</p>
          <input onChange={textDob} />
          <p>Email-Id:</p>
          <input
            name="email"
            type="email"
            placeholder="e-mail"
            onChange={textEmail}
            required
          />
          <p>Contact Number:</p>
          <input type="number" onChange={textNum} required />
          <p>Objective:</p>
          <input type="text" onChange={textObj} />
          <p>Which type of service:</p>
          <input type="text" onChange={textService} required />
          <p>What's your specification:</p>
          <input type="text" onChange={textSpecification} />
          <p>Any prior experience:</p>
          <input type="text" onChange={textExp} />
          <p>Which location do you prefer:</p>
          <select onChange={textLoc} required>
            <option key=""></option>
            {places.map((place) => (
              <option key={place}>{place}</option>
            ))}
          </select>
          <p>Password</p>
          <input name="pswrd" type="password" onChange={textPswrd} required />
          <p>Confirm Password</p>
          <input name="cpswrd" type="password" onChange={textCpswrd} required />
          <button onClick={pushItem}>Submit</button>
        </div>
      </form>
    </div>
  );
}
