import React from "react";
import "./stylecontact.css";
const Contact = () => {
  return (
    <>
      <div className="paralle">
        <h1>
          GET IN TOUCH...
          <br />
          <span>@sahyog</span>
        </h1>
        <div className="fullbox">
          <h3></h3>
          {/* <img  src="data:image/png;base64,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"/> */}
          <h2>Address : </h2>
          <p>
            309, 313 Pratap Chambers, Gurudwara Rd, Karol Bagh, New Delhi, Delhi
            110005
          </p>
          <h2>Phone : </h2>
          <p>9821384271 , 9568568555</p>
          <h2>Email : </h2>
          <p>abhishekvashist.2111@gmail.com , nikansharajput99@gmail.com</p>
          <h2>Website : </h2>
          <p>www.sahyog.com</p>
        </div>
      </div>
    </>
  );
};

export default Contact;
