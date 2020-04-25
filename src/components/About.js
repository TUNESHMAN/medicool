import React from "react";
import Navbar from "./Navbar";
import woman from "../images/woman.jpg";
import background2 from "../images/background2.jpg";

function About() {
  return (
    <div>
      <Navbar />
      <div
        className="base"
        style={{
          backgroundImage: `url(${background2})`,
        }}
      ></div>
      <div className="header-text1">
        <p className="quick-header1">
          <strong>We are on a mission to...</strong>
        </p>
        <p className="sub-text1">
          ...make it easier to keep track of your drugs, dosage, and
          prescriptions.
        </p>
      </div>
      <section className="sub-section">
        {/* ABOUT MediCool  */}
        <div className="reason">
          <h2 className="txt1">ABOUT US</h2>
          <p className="txt">
            For some people, taking a drug is an herculean task. So, it
            shouldn't be harder. MediCool takes the burden of having to remember
            what the doctor says from you. You only have to create a
            prescription for each drug, and add an appropriate usage formula.
            The rest is history. On every successful login attempt, a complete
            list of all prescriptions are displayed. To view usage formula, just
            click on the "view icon".
          </p>
        </div>

        <img className="tracker" src={woman} />

        {/* <WHY CHOOSE MediCool */}
        <div className="reason">
          <h2 className="txt1">WHY CHOOSE MediCool?</h2>

          <p className="txt">
            Overdose is very harmful. On the other hand, you wouldn't make the
            most of a drug if it is underused. With MediCool, perfection is
            assured. The details of drug usage remain intact as they were
            inputted.
          </p>
        </div>
      </section>
    </div>
  );
}

export default About;
