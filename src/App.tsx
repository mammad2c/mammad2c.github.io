import "./App.scss";
import MyAvatar from "./assets/images/avatar.jpg";
import Timeline from "./components/Timeline/Timeline";
import Skills from "./components/Skills/Skills";
import { FC } from "react";

const App: FC = () => (
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
                <div className="my-info__initials">
                  <h1 className="my-info__name">Mohammad Toosi</h1>
                  <h3 className="my-info__expert">Front-End Developer</h3>
                </div>
              </div>
            </div>
          </section>
          <div className="bio-box__timeline-wrapper">
            <Timeline />
          </div>
        </div>
        <div className="col-12 col-lg-4">
          <Skills />
        </div>
      </div>
    </div>
  </div>
);

export default App;
