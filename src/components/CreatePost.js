import React from "react";
import Button from "@material-ui/core/Button";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import { TextField } from "@material-ui/core";

function SimpleDialog(props) {
  const { close, open } = props;
  return (
    <Dialog aria-labelledby="simple-dialog-title" open={open}>
      <div className="dialog">
        <DialogTitle id="simple-dialog-title">
          Create your new post!
        </DialogTitle>
        <TextField
          placeholder="Title"
          variant="outlined"
          size="small"
          className="my-10"
        />
        <Button variant="contained" color="primary" className="my-10 white">
          Publish
        </Button>
        <Button onClick={() => close()}>Close</Button>
      </div>
    </Dialog>
  );
}

export default function SimpleDialogDemo({ open, setOpen }) {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="create-post">
      <SimpleDialog open={open} close={handleClose} />
    </div>
  );
}
