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

import firebase from "firebase/app";
import { db, firebaseApp } from "../../firebase/firebase";

type Props = {
  myUid: any;
  otherUid: any;
  isOpen: boolean;
  doClose: () => void;
  reloadDB: VoidFunction;
};

const useStyles = makeStyles((theme) => ({
  content: {
    textAlign: "center",
  },
  text: {
    width: "30em",
  },
}));

const RecommendAddDialog = (props: Props) => {
  const classes = useStyles();

  const [open, setOpen] = useState(false);
  const [inputContent, setInputContent] = useState("");
  const [inputRefURL, setInputRefURL] = useState("");

  useEffect(() => {
    setOpen(props.isOpen);
  }, [props.isOpen]);

  const addRecommendOnDB = async () => {
    try {
      await db.collection("Tips").add({
        content: inputContent,
        done: false,
        doneContent: "",
        imageURL: "",
        recommenderIDs: [props.myUid],
        refURL: inputRefURL,
        userID: props.otherUid,
      });
    } catch (error) {
      console.log("おすすめの追加に失敗");
    }
  };

  const handleCloseWithUpload = () => {
    addRecommendOnDB();
    setInputContent("");
    setInputRefURL("");
    props.reloadDB();
    setOpen(false);
    props.doClose();
  };

  const handleCloseWithCancel = () => {
    setInputContent("");
    setInputRefURL("");
    setOpen(false);
    props.doClose();
  };

  return (
    <Dialog
      open={open}
      onClose={handleCloseWithCancel}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title" className={classes.content}>
        おすすめする
      </DialogTitle>
      <DialogContent>
        <form>
          <TextField
            className={classes.text}
            id="outlined-multiline-static"
            label="おすすめ内容"
            value={inputContent}
            onChange={(event) => setInputContent(event.target.value)}
            variant="outlined"
          />
        </form>
        <form>
          <TextField
            className={classes.text}
            id="outlined-multiline-static"
            label="参考URL"
            value={inputRefURL}
            onChange={(event) => setInputRefURL(event.target.value)}
            variant="outlined"
          />
        </form>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={handleCloseWithUpload}
          color="primary"
          disabled={inputContent === "" || inputRefURL === ""}
        >
          おすすめする！
        </Button>
        <Button onClick={handleCloseWithCancel} color="primary">
          キャンセル
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default RecommendAddDialog;
