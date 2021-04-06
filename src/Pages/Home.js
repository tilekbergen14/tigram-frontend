import React from "react";
import { Container } from "@material-ui/core";
import Post from "../components/Post";
import UserComponent from "../components/User";
import Friends from "../components/Friends";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <Container>
      <div className="home">
        <Navbar />
        <main>
          <div className="friends-component">
            <div className="user-component2">
              <UserComponent />
            </div>
            <Friends />
          </div>
          <div className="post-section">
            <p className="text500">Posts</p>
            <div className="posts">
              <Post />
              <Post />
            </div>
          </div>
          <div className="user-component">
            <UserComponent />
          </div>
        </main>
      </div>
    </Container>
  );
}
