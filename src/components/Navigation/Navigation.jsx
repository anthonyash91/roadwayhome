import { FaExternalLinkAlt } from "react-icons/fa";
import Button from "../Shared/Button";
import "./Navigation.css";
import Logo from "../../assets/logo2.png";

export default function Navigation() {
  return (
    <nav className="content-grid full-width">
      <div className="inner-nav flex">
        <img className="logo-img" src={Logo} />

        <ul className="flex navigation">
          <li class="logo">
            <img src={Logo} />
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
