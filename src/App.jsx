import { useState } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import CountUp from "react-countup";
import Modal from "./components/Modal/Modal";
import Button from "./components/Shared/Button";
import "./app.css";
import "./reset.css";

function App() {
  const [showIntro, setShowIntro] = useState(false);
  const [tabletHovered, setTabletHovered] = useState(false);
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  const handleMouseMove = (event) => {
    // console.log("Mouse position:", event.clientX, event.clientY);
    setMouseX(event.clientX);
    setMouseY(event.clientY);
    // Additional logic
  };

  const hoverTabletImage = () => {
    setTabletHovered(true);
  };

  const hoverOffTabletImage = () => {
    setTabletHovered(false);
  };

  const styling = {
    bottom: "-14px",
    right: "-14px",
    height: "130px",
    width: "130px",
  };

  return (
    <main className="content-grid">
      <Modal showIntro={showIntro} setShowIntro={setShowIntro} />

      <nav className="content-grid full-width">
        <div>this is the nav</div>
      </nav>

      <header className="content-grid full-width">
        <div className="grid">
          <ScrollAnimation
            animateIn="bounceInLeft"
            animateOnce={true}
            duration={0.8}
          >
            <div className="flex column left">
              <div className="slogan">Turning Struggles Into Strength</div>
              <div>
                <h1>Roadway Home</h1>
                At Road Way Home, we believe in helping corrections and
                rehabilitation facilities users by funding health and wellness
                and education through technology platforms.
              </div>
              <div className="buttons flex">
                <Button>Donate Now</Button>

                <Button
                  version="play-intro"
                  btnFunction={() => {
                    setShowIntro((prevState) => !prevState);
                  }}
                >
                  Play Intro
                </Button>
              </div>
              <ul className="site-stats flex">
                <li>
                  <h2>
                    <CountUp end={30} duration={1.6} />+
                  </h2>
                  Years Experience
                </li>
                <li>
                  <h2>
                    <CountUp end={45} duration={1.8} />
                    k+
                  </h2>
                  Users Reached
                </li>
                <li>
                  <h2>
                    <CountUp end={400} duration={1.5} />+
                  </h2>
                  Current Locations
                </li>
              </ul>
            </div>
          </ScrollAnimation>
          <ScrollAnimation
            animateIn="bounceInRight"
            animateOnce={true}
            duration={1.1}
          >
            <div
              className="flex right"
              // style={{
              //   transform: `rotateX(${mouseX * 0.025}deg) rotateY(${
              //     mouseY * -0.025
              //   }deg)`,
              // }}
              // onMouseMove={handleMouseMove}
            >
              <div className="tablet-image">
                <div
                  className="intro-video-box flex"
                  onClick={() => {
                    setShowIntro((prevState) => !prevState);
                  }}
                  onMouseLeave={hoverOffTabletImage}
                  onMouseEnter={hoverTabletImage}
                >
                  <svg viewBox="0 0 24 24">
                    <path d="M21.4086 9.35258C23.5305 10.5065 23.5305 13.4935 21.4086 14.6474L8.59662 21.6145C6.53435 22.736 4 21.2763 4 18.9671L4 5.0329C4 2.72368 6.53435 1.26402 8.59661 2.38548L21.4086 9.35258Z"></path>
                  </svg>
                  <div>Play Intro</div>
                </div>

                <div className="box top-left" />

                <div
                  className={`mini-bottom-image ${tabletHovered && "shrink"}`}
                />
                <div
                  className={`box bottom-right ${tabletHovered && "shrink"}`}
                />
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </header>
      <section className="content-grid full-width">
        <div>this is content</div>
      </section>
      <footer className="content-grid full-width">
        <div>Copyright © 2023 Roadway Home. All rights reserved.</div>
      </footer>
    </main>
  );
}

export default App;
