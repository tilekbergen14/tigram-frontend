import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import List from "@material-ui/core/List";
import ListItemComp from "../components/Listitem";
import Avatar from "@material-ui/core/Avatar";

export default function Friends() {
  return (
    <div className="left-box">
      <div className="users">
        <List>
          <ListItemComp text="You might know" />
          <ListItem>
            <ListItemIcon>
              <Avatar alt="profile" className="cursorp" />
            </ListItemIcon>
            <ListItemText>
              <p className="cursorp text">Tilekbergen Mukhamet</p>
            </ListItemText>
          </ListItem>
        </List>
      </div>
    </div>
  );
}
