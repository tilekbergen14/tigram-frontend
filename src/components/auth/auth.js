import React from "react";
import image from "./town.jpg";
import { TextField } from "@material-ui/core";

export default function auth() {
  return (
    <div className="auth-page">
      <img src={image} alt="auth" className="auth-image" />
      <div className="auth-side">
        <TextField placeholder="Username" variant="outlined" />
        <TextField placeholder="Username" variant="outlined" />
      </div>
    </div>
  );
}
