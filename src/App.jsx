import { useState } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import CountUp from "react-countup";
import Modal from "./components/Modal/Modal";
import Button from "./components/Shared/Button";
import Navigation from "./components/Navigation/Navigation";
import Divider from "./components/Shared/Divider";
import { IoMdArrowRoundUp } from "react-icons/io";
import "./app.css";
import "./reset.css";

function App() {
  const [showIntro, setShowIntro] = useState(false);
  const [tabletHovered, setTabletHovered] = useState(false);
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  const handleMouseMove = (event) => {
    setMouseX(event.clientX);
    setMouseY(event.clientY);
  };

  const handleMouseLeave = () => {
    setMouseX(0);
    setMouseY(0);
  };

  return (
    <main className="content-grid">
      <Modal showIntro={showIntro} setShowIntro={setShowIntro} />
      <Navigation />
      <Divider type="nav" />

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
                  version="accent"
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
              style={{
                transform: `rotateX(${mouseX * 0.015}deg) rotateY(${
                  mouseY * -0.015
                }deg)`,
              }}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              <div className="tablet-image">
                <div
                  className="intro-video-box flex"
                  onClick={() => {
                    setShowIntro((prevState) => !prevState);
                  }}
                  onMouseLeave={() => {
                    setTabletHovered(false);
                  }}
                  onMouseEnter={() => {
                    setTabletHovered(true);
                  }}
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

      <Divider type="content" />

      <section className="content-grid full-width content">
        <div className="cards grid">
          <div className="card flex column">
            <div className="card-icon" />
            <h1>Donate</h1>
            Help fund someone to receive health & wellness services and
            educational classes through the latest technology app.
            <Button version="card-button">
              Read More
              <IoMdArrowRoundUp />
            </Button>
          </div>
          <div className="card flex column">
            <div className="card-icon" />
            <h1>Sponsor</h1>
            We are supported by donations made from sponsors like you. Please
            help to make a change in someone’s life.
            <Button version="card-button">
              Read More
              <IoMdArrowRoundUp />
            </Button>
          </div>
          <div className="card flex column">
            <div className="card-icon" />
            <h1>Community</h1>
            We know you care about your community and want to make a difference.
            Contact us and we will provide you with additional info.
            <Button version="card-button">
              Read More
              <IoMdArrowRoundUp />
            </Button>
          </div>
        </div>
      </section>

      <Divider type="footer" />

      <footer className="content-grid full-width">
        <div>Copyright © 2024 Roadway Home. All rights reserved.</div>
      </footer>
    </main>
  );
}

export default App;
