import React from "react";
import Drawer from "./Drawer";
import Textedit from "./Textedit";

export default function Navbar() {
  return (
    <header className="fixed-navbar">
      <h2 className="sm-logo mobile-logo ">Tigram</h2>
      <div className="nav">
        <p className="sm-logo">Tigram</p>
        <div className="search-input">
          <Textedit />
        </div>
        <div className="drawer">
          <Drawer menu={true} />
        </div>
      </div>
    </header>
  );
}
