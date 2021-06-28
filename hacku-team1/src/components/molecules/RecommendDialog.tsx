import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  Dialog,
  DialogContent,
  DialogActions,
  DialogTitle,
  TextField,
} from "@material-ui/core";
import Image from "../atoms/Image";
import { db } from "../../firebase/firebase";

type Props = {
  docid: string;
  title: string;
  isOpen: boolean;
  doClose: () => void;
};

const useStyles = makeStyles((theme) => ({
  content: {
    textAlign: "center",
  },
  text: {
    width: "30em",
  },
}));

const RecommendDialog = (props: Props) => {
  const classes = useStyles();

  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");

  useEffect(() => {
    setOpen(props.isOpen);
  }, [props.isOpen]);

  const uploadData = async () => {
    const userRef = db.collection("Tips").doc(props.docid);
    await userRef.update({
      done: true,
      doneContent: input,
      imageURL: "aa",
    });
  };

  const handleCloseWithUpload = () => {
    uploadData();
    window.location.reload();
    setInput("");
    setOpen(false);
    props.doClose();
  };

  const handleCloseWithCancel = () => {
    setInput("");
    setOpen(false);
    props.doClose();
  };

  return (
    <>
      <Dialog
        open={open}
        onClose={handleCloseWithCancel}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title" className={classes.content}>
          {props.title}
        </DialogTitle>
        <DialogContent>
          <div className={classes.content}>
            <Image
              src={"./logo192.png"}
              alt={props.title}
              classname={classes.content}
            />
          </div>
          <form>
            <TextField
              className={classes.text}
              id="outlined-multiline-static"
              label="感想など"
              multiline
              rows={8}
              value={input}
              onChange={(event) => setInput(event.target.value)}
              variant="outlined"
            />
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseWithUpload} color="primary">
            投稿
          </Button>
          <Button onClick={handleCloseWithCancel} color="primary">
            キャンセル
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default RecommendDialog;
