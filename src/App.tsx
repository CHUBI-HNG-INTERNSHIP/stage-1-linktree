import { useState } from "react";
import "./App.css";
import pfp from "./assets/profile__img.png";
import slack from "./assets/slack.svg";
import github from "./assets/github.svg";
import zuri from "./assets/zuri.svg";
import i4g from "./assets/i4g.svg";
import shareBtn from "./assets/share button.svg";
import dots from "./assets/dots.svg";
function App() {
  return (
    <div className="App">
      <main>
        <div className="share_button">
          <img src={shareBtn} alt="share button" className="hidden md:block" />
          <img src={dots} alt="tooltip button" className="md:hidden" />
        </div>
        <div className="profile">
          <div className="profile__img__container">
            <img src={pfp} id="profile_img" alt="profile image" />
          </div>
          <h1 className="text-text-xl font-bold text-gray-900" id="twitter">
            @chubiyojo__
          </h1>
          <h1 id="slack" className="hidden">
            Slack
          </h1>
        </div>
        <div className="buttons">
          <div className="button">Button</div>
          <div className="button">Button</div>
          <div className="button">Button</div>
          <div className="button">Button</div>
          <div className="button">Button</div>
          <div className="button">Button</div>
        </div>
        <div className="social__links">
          <div className="slack">
            <img src={slack} alt="slack icon" />
          </div>
          <div className="github">
            <a
              href="https://github.com/CHUBI-HNG-INTERNSHIP/stage-1-linktree"
              target="blank"
              rel="noreferrer noopener"
            >
              <img src={github} alt="github icon" />
            </a>
          </div>
        </div>
      </main>
      <footer>
        <img src={zuri} alt="zuri internship logo" />

        <p className="text-text-md text-gray-500">
          HNG Internship 9 Frontend Task
        </p>
        <img src={i4g} alt="I4G logo" />
      </footer>
    </div>
  );
}

export default App;

