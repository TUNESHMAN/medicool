import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import background from "../images/background.jpg";
import capsule from "../images/capsule.jpg";
import syrup from "../images/syrup.jpg";
import antibiotics from "../images/antibiotics.jpg";
import antiseptics from "../images/antiseptics.jpg";
import reminder from "../images/reminder.jpg";
function Home() {
  return (
    <div>
      <Navbar />

      <div
        class="background"
        style={{
          backgroundImage: `url(${background})`,
        }}
      ></div>
      <div class="header-text">
        <p class="quick-header">
          <strong>Welcome to Medicool</strong>
        </p>
        <p class="sub-text">
          <strong>Get your kids working</strong>
        </p>

        <div id="buttons">
          <a
            class="start-btn"
            href="https://objective-dubinsky-42e588.netlify.com/signup"
            target="_blank"
          >
            SIGN-UP
          </a>
          <a class="start-btn transparent" href="about.html" target="_blank">
            LEARN MORE
          </a>
        </div>
      </div>

      {/* INFO ABOUT MINECHORE */}

      <section class="second-section">
        <div class="about-section">
          <img
            class="about-section3"
            src="./Images/adult-black-and-white-child-736428.jpg"
            alt=""
          />
          <p class="para">
            Every member of your household can make use of the MineChore app. If
            there are chores for your kids to do, the MineChore app is a great
            way to keep track of events. Parents only need to sign up on the
            application. Adding a child's account isn't difficult too. This
            enables a child to sign in and submit a completed chore before it is
            confirmed by a parent.
          </p>
        </div>
        <div class="right-section">
          <h2>CREATE AND ASSIGN CHORES</h2>
          <p>
            With MineChore, you can easily create and assign tasks for everyone.
            Also, it becomes easier to draw up a schedule. This schedule
            reflects on the dashboard of every child. Once a child confirms that
            a chore has been done, the parent must approve. It is only after
            approval that credits are awarded.
          </p>
          <p class="earn">Create a chore</p>
        </div>
      </section>

      {/* SECOND INFO SECTION */}

      <section class="third-section">
        <div class="about-section">
          <img class="about-section2" src={reminder} alt="" />
        </div>
        <div class="right-section">
          <h2>BE REMINDED OF YOUR MEDICAL PLAN</h2>
          <p>
            Medicool is a good way to teach your kids about savings. Work done
            equals money earned. With MineChore, it's easy to get your kids
            excited about chores with our "gamified" approach to household chore
            tracking and management.
          </p>
          <p class="earn">Check Dashboard</p>
        </div>
      </section>

      {/* CHORES LISTED HERE */}

      <div class="list-items">
        <div class="tools">
          <img class="profile-img" src={antibiotics} alt="Chore" />
          <p class="txt">Antibiotics</p>
          <p class="price">Points: 5</p>
        </div>

        {/* <div class="tools">
          <img
            class="profile-img"
            src="./Images/garden-gardening-grass-589.jpg"
            alt="Tool"
          />
          <p class="txt">Mowing</p>
          <p class="price">Points: 10</p>
        </div> */}
        {/* 
        <div class="tools">
          <img
            class="profile-img"
            src="./Images/blurred-background-close-up-clothes-2517866.jpg"
            alt="Chore"
          />
          <p class="txt">Laundry</p>
          <p class="price">Points: 25</p>
        </div> */}

        {/* <div class="tools">
          <img
            class="profile-img"
            src="./Images/car-cleaning-washing-5989.jpg"
            alt="Chore"
          />
          <p class="txt">Wash Car</p>
          <p class="price">Points: 15</p>
        </div> */}

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

          {/* <div class="tools">
            <img
              class="profile-img"
              src="./Images/animal-animal-lover-animal-photography-1981111.jpg"
              alt="Chore"
            />
            <p class="txt">Feed Pets</p>
            <p class="price">Points: 5</p>
          </div> */}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Home;
