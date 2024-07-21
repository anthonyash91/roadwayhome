import { useState } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import "./app.css";
import "./reset.css";

function App() {
  return (
    <main className="content-grid">
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
              <button>Donate Now</button>
              <ul className="site-stats flex">
                <li>
                  <h2>30+</h2>
                  Years Experience
                </li>
                <li>
                  <h2>45k+</h2>
                  Users Reached
                </li>
                <li>
                  <h2>400+</h2>
                  Locations
                </li>
              </ul>
            </div>
          </ScrollAnimation>
          <ScrollAnimation
            animateIn="bounceInRight"
            animateOnce={true}
            duration={1.1}
          >
            <div className="flex right">
              <div className="tablet-image">
                <div className="box top-left" />
                <div className="box bottom-right" />
                <div className="intro-video-box flex">
                  <svg viewBox="0 0 24 24">
                    <path
                      className="circle"
                      d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                    ></path>
                    <path
                      className="triangle"
                      d="M15.4137 13.059L10.6935 15.8458C9.93371 16.2944 9 15.7105 9 14.7868V9.21316C9 8.28947 9.93371 7.70561 10.6935 8.15419L15.4137 10.941C16.1954 11.4026 16.1954 12.5974 15.4137 13.059Z"
                    ></path>
                  </svg>
                  <div>Play Intro</div>
                </div>
                <div className="mini-bottom-image" />
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
