import React from "react";
import { Container } from "@material-ui/core";
import Navbar from "../components/Navbar";
import Post from "../components/Post";
import UserComponent from "../components/User";
import Friends from "../components/Friends";
import image from "./girl2.webp";
import { Avatar, Button } from "@material-ui/core";

export default function Profile() {
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
            <div className="posts">
              <div className="user-thumb">
                <img src={image} alt="banner" className="banner-img" />
                <div className="avatar">
                  <Avatar style={{ height: 150, width: 150 }} />
                </div>
              </div>
              <p className="profile-name">Mukhamet Tilekbergen</p>
              <div className="profile-nav">
                <p className="text500 m-0">Posts</p>
                <Button
                  variant="contained"
                  color="primary"
                  style={{ color: "white" }}
                >
                  Add friend
                </Button>
              </div>
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
