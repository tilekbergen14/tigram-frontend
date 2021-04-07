import { useState } from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import List from "@material-ui/core/List";
import ListItemComp from "../components/Listitem";
import Avatar from "@material-ui/core/Avatar";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import { Link } from "react-router-dom";
import CreatePostComp from "./CreatePost";
import { Button } from "@material-ui/core";

export default function User() {
  const [open, setOpen] = useState(false);
  return (
    <div className="user-profile">
      <CreatePostComp open={open} setOpen={setOpen} />
      <div className="user-box">
        <List>
          <ListItem>
            <ListItemIcon>
              <Link to="/profile/">
                <Avatar alt="profile" className="cursorp" />
              </Link>
            </ListItemIcon>
            <ListItemText>
              <Link to="/profile/" className="cursorp black">
                Tilekbergen
              </Link>
            </ListItemText>
          </ListItem>
          <ListItemComp text="Your posts" />
          <ListItemComp text="Friends" />
          <ListItemComp text="Settings" />
          <ListItem>
            <Button
              onClick={() => {
                console.log(open);
                setOpen((open) => !open);
              }}
              className="cursorp black"
              variant="contained"
              color="primary"
              style={{ color: "#fff" }}
              startIcon={<AddCircleIcon className="cursorp" />}
            >
              Create post
            </Button>
          </ListItem>
        </List>
      </div>
    </div>
  );
}
