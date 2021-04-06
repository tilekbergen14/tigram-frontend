import React from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import Drawer from "../components/Drawer";
import Help from "../components/Help";

export default function Landing() {
  return (
    <div className="landing">
      <header>
        <Drawer />
        <Help />
      </header>
      <div className="section">
        <div className="logo-section">
          <h1 className="logo">Tigram</h1>
          <div className="button-container">
            <button className="button blue">Testing without sign up</button>
            <button className="button green">Sign up</button>
          </div>
        </div>
      </div>
      <footer>
        <p className="text500">Contact us</p>
        <div className="icons-box">
          <FacebookIcon className="icon" />
          <InstagramIcon className="icon" />
          <WhatsAppIcon className="icon" />
        </div>
      </footer>
    </div>
  );
}
