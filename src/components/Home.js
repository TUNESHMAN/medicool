import React from "react";
import Navbar from "./Navbar";
import background from "../images/background.jpg";
import capsule from "../images/capsule.jpg";
import syrup from "../images/syrup.jpg";
import antibiotics from "../images/antibiotics.jpg";
import solution from "../images/solution.jpg";
import antiseptics from "../images/antiseptics.jpg";
import reminder from "../images/reminder.jpg";
import Injections from "../images/Injections.jpg";
import Firstaid from "../images/Firstaid.jpg";
import Disinfectant from "../images/Disinfectant.jpg";
import tracker from "../images/tracker.jpg";
import { NavLink } from "react-router-dom";
function Home() {
  // const CLOUDINARY_URL = "https://api.cloudinary.com/v1_1/tuneshman/upload";
  // const CLOUDINARY_UPLOAD_PRESET = "e5gsr7d5";
  return (
    <div className="home-div">
      <Navbar />

      <div
        className="background"
        style={{
          backgroundImage: `url(${background})`,
        }}
      ></div>
      <div className="header-text">
        <p className="quick-header">
          <strong>Welcome to MediCool</strong>
        </p>
        <p className="sub-text">
          <strong>Keep track of your medications</strong>
        </p>

        <div id="buttons">
          <NavLink className="start-btn1" to="/login">
            SIGN IN
          </NavLink>

          <NavLink className="start-btn2" to="/about">
            LEARN MORE
          </NavLink>
        </div>
      </div>

      {/* INFO ABOUT MEDICOOL */}

      <section className="second-section">
        <div className="about-section">
          <img className="about-section3" src={tracker} alt="app-description" />
          <p className="para">
            Everyone can make use of the MediCool app. If there are drugs for
            you to take, the MediCool app is a great way to keep track of your
            drug usage. You only need to sign up on the application. Adding a
            prescription and usage formula isn't difficult too.
          </p>
        </div>
        <div className="right-section">
          <h2>CREATE PRESCRIPTIONS AND ADD USAGE FORMULA</h2>
          <p className="med-desc">
            With MediCool, you can easily create and view drug usage formula.
            Also, it is very easy to see all prescriptions and formula. All you
            need do is login to your dashboard.
          </p>
          <NavLink to="/login">
            <p className="earn">Create Prescription</p>
          </NavLink>
        </div>
      </section>

      {/* SECOND INFO SECTION */}

      <section className="third-section">
        <div className="about-section">
          <img className="about-section2" src={reminder} alt="" />
        </div>
        <div className="right-section">
          <h2>BE REMINDED OF YOUR MEDICAL PLAN</h2>
          <p>
            MediCool is a good way to learn how to take your drugs religiously.
            With this app, it becomes easier to stick to whatever plan our
            doctor has given to you.
          </p>
          <p className="earn">Check Dashboard</p>
        </div>
      </section>

      {/* DRUGS LISTED HERE */}

      <div className="list-items">
        <div className="tools">
          <img className="profile-img" src={antibiotics} alt="antibiotics" />
          <p className="txt2">Antibiotics</p>
        </div>

        <div className="tools">
          <img className="profile-img" src={solution} alt="solution" />
          <p className="txt2">Solution</p>
        </div>

        <div className="tools">
          <img className="profile-img" src={Injections} alt="injection" />
          <p className="txt2">Injection</p>
        </div>

        <div className="tools">
          <img className="profile-img" src={Disinfectant} alt="disinfectant" />
          <p className="txt2">Disinfectant</p>
        </div>

        <div className="list-items2">
          <div className="tools">
            <img className="profile-img" src={syrup} alt="syrup" />
            <p className="txt2">Syrup</p>
          </div>

          <div className="tools">
            <img className="profile-img" src={capsule} alt="capsule" />
            <p className="txt2">Capsule</p>
          </div>

          <div className="tools">
            <img className="profile-img" src={antiseptics} alt="antiseptics" />
            <p className="txt2">Antiseptics</p>
          </div>

          <div className="tools">
            <img className="profile-img" src={Firstaid} alt="Chore" />
            <p className="txt2">First Aid</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
