import React from "react";
import "./App.scss";
import MyAvatar from "./assets/images/avatar.jpg";
import Timeline from "./components/Timeline/Timeline";
import Skill from "./components/Skill/Skill";

const App: React.FC = () => {
  return (
    <div className="container">
      <div className="bio-box">
        <div className="row">
          <div className="col-12 col-lg-8">
            <section className="my-info">
              <div className="row align-items-center">
                <div className="col-12 col-md-4">
                  <img
                    className="avatar img-fluid"
                    src={MyAvatar}
                    alt="Mohammad Toosi"
                  />
                </div>
                <div className="col-12 col-md-8">
                  <div className="ml-30">
                    <h1 className="my-name">Mohammad Toosi</h1>
                    <h3 className="my-expert">Front-End Developer</h3>
                  </div>
                </div>
              </div>
            </section>
            <div className="bio-box__timeline-wrapper">
              <Timeline />
            </div>
          </div>
          <div className="col-12 col-lg-4">
            <Skill />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
