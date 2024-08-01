import { FaExternalLinkAlt } from "react-icons/fa";
import Button from "../Shared/Button";
import "./Navigation.css";

export default function Navigation() {
  return (
    <nav className="content-grid full-width">
      <div className="inner-nav flex">
        <svg class="logo" viewBox="0 0 32 32">
          <path
            class="heart"
            d="M21.5,4A7.47,7.47,0,0,0,16,6.41,7.49,7.49,0,0,0,3,11.5C3,21,16,28,16,28s13-7,13-16.5A7.5,7.5,0,0,0,21.5,4Z"
          />
          <path
            class="shine"
            d="M10,9a2,2,0,0,0-2,2,1,1,0,0,1-2,0,4,4,0,0,1,4-4,1,1,0,0,1,0,2Z"
          />
        </svg>
        <ul className="flex navigation">
          <li class="logo">
            <svg viewBox="0 0 32 32">
              <path
                class="heart"
                d="M21.5,4A7.47,7.47,0,0,0,16,6.41,7.49,7.49,0,0,0,3,11.5C3,21,16,28,16,28s13-7,13-16.5A7.5,7.5,0,0,0,21.5,4Z"
              />
              <path
                class="shine"
                d="M10,9a2,2,0,0,0-2,2,1,1,0,0,1-2,0,4,4,0,0,1,4-4,1,1,0,0,1,0,2Z"
              />
            </svg>
          </li>
          <li>Home</li>
          <li>About Us</li>
          <li>Meet Our Team</li>
          <li>Contact</li>
        </ul>

        <Button version="reentry">
          Reentry to Recovery
          <FaExternalLinkAlt />
        </Button>
      </div>
    </nav>
  );
}
