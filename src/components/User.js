import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import List from "@material-ui/core/List";
import ListItemComp from "../components/Listitem";
import Avatar from "@material-ui/core/Avatar";
import AddCircleIcon from "@material-ui/icons/AddCircle";

export default function User() {
  return (
    <div className="user-profile">
      <div className="user-box">
        <List>
          <ListItem>
            <ListItemIcon>
              <Avatar alt="profile" className="cursorp" />
            </ListItemIcon>
            <ListItemText>
              <p className="cursorp">Tilekbergen Mukhamet</p>
            </ListItemText>
          </ListItem>
          <ListItemComp text="Your posts" />
          <ListItemComp text="Friends" />
          <ListItemComp text="Settings" />
          <ListItem>
            <ListItemIcon>
              <AddCircleIcon className="cursorp" color="primary" />
            </ListItemIcon>
            <ListItemText>
              <p className="cursorp">Create post</p>
            </ListItemText>
          </ListItem>
        </List>
      </div>
    </div>
  );
}
