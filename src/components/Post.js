import React from "react";
import image from "../Pages/girl2.webp";
import Avatar from "@material-ui/core/Avatar";
import FavoriteOutlinedIcon from "@material-ui/icons/FavoriteOutlined";

export default function Post() {
  return (
    <div className="post">
      <img src={image} alt="post_image" className="image" />
      <div className="post-info">
        <Avatar alt="profile" />
        <div className="inline-info">
          <p className="post-publisher">Zinedine</p>
          <p className="date">Apr 6</p>
          <h3 className="post-title cursorp">
            There would be some massive title over here!
          </h3>
          <div className="likes">
            <FavoriteOutlinedIcon
              className="cursorp"
              style={{ color: "red" }}
              fontSize="small"
            />
            <p className="like-text">22 likes</p>
          </div>
        </div>
      </div>
    </div>
  );
}
