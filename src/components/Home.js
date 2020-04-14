import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
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
import { Link } from "react-router-dom";
function Home() {
  return (
    <div>
      <Navbar />

      <div
        className="background"
        style={{
          backgroundImage: `url(${background})`,
        }}
      ></div>
      <div className="header-text">
        <p className="quick-header">
          <strong>Welcome to Medicool</strong>
        </p>
        <p className="sub-text">
          <strong>Keep track of your medications</strong>
        </p>

        <div id="buttons">
          <Link className="start-btn transparent" to="/login">
            SIGN-IN
          </Link>

          <a
            className="start-btn transparent"
            href="about.html"
            target="_blank"
          >
            LEARN MORE
          </a>
        </div>
      </div>

      {/* INFO ABOUT MEDICOOL */}

      <section className="second-section">
        <div className="about-section">
          <img
            className="about-section3"
            src="./Images/adult-black-and-white-child-736428.jpg"
            alt=""
          />
          <p className="para">
            Everyone can make use of the MediCool app. If there are drugs for
            you to take, the MediCool app is a great way to keep track of your
            drug usage. You only need to sign up on the application. Adding a
            prescription and usage formula isn't difficult too.
          </p>
        </div>
        <div className="right-section">
          <h2>CREATE PRESCRIPTIONS AND ADD USAGE FORMULA</h2>
          <p>
            With MediCool, you can easily create and views drug usage formula.
            Also, it is very easy to see all prescriptions and formula. All you
            need do is login to your dashboard.
          </p>
          <p className="earn">Create a Prescription</p>
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
          <img className="profile-img" src={antibiotics} alt="Chore" />
          <p className="txt">Antibiotics</p>
          <p className="price">Points: 5</p>
        </div>

         <div class="tools">
          <img
            class="profile-img"
            src={solution}
            alt="Tool"
          />
          <p class="txt">Solution</p>
          <p class="price">Points: 10</p>
        </div> 
        
        <div class="tools">
          <img
            class="profile-img"
            src={Injections}
            alt="Chore"
          />
          <p class="txt">Injection</p>
          <p class="price">Points: 25</p>
        </div> 

         <div class="tools">
          <img
            class="profile-img"
            src={Disinfectant}
            alt="Chore"
          />
          <p class="txt">Disinfectant</p>
          <p class="price">Points: 15</p>
        </div> 

        <div class="list-items2">
          <div class="tools">
            <img class="profile-img" src={syrup} alt="Chore" />
            <p class="txt">Syrup</p>
            <p class="price">Points: 10</p>
          </div>

          <div class="tools">
            <img class="profile-img" src={capsule} alt="Chore" />
            <p class="txt">Capsule</p>
            <p class="price">Points: 3</p>
          </div>

          <div class="tools">
            <img class="profile-img" src={antiseptics} alt="Chore" />
            <p class="txt">Antiseptics</p>
            <p class="price">Points: 7</p>
          </div>

          <div class="tools">
            <img
              class="profile-img"
              src={Firstaid}
              alt="Chore"
            />
            <p class="txt">First Aid</p>
            <p class="price">Points: 5</p>
          </div> 
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Home;
