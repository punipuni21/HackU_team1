import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  Dialog,
  DialogContent,
  DialogActions,
  DialogTitle,
  TextField,
  Box,
  Typography,
  Container,
} from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";

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
    // width: "30em",
  },
  container: {
    width: "fit-content",
  },
}));

const UserEditDialog = (props: Props) => {
  const classes = useStyles();

  const [open, setOpen] = useState(false);
  const [inputName, setInputName] = useState("");

  useEffect(() => {
    setOpen(props.isOpen);
  }, [props.isOpen]);

  const editUserNameOnDB = async () => {
    try {
      await db.collection("User").doc(props.myUid).update({
        displayName: inputName,
      });
    } catch (error) {
      console.log("ユーザー名の変更に失敗");
    }
  };

  const handleCloseWithUpload = () => {
    editUserNameOnDB();
    setInputName("");
    props.reloadDB();
    setOpen(false);
    props.doClose();
  };

  const handleCloseWithCancel = () => {
    setInputName("");
    setOpen(false);
    props.doClose();
  };

  return (
    <Dialog
      open={open}
      onClose={handleCloseWithCancel}
      aria-labelledby="form-dialog-title"
      fullWidth
    >
      <DialogTitle id="form-dialog-title" className={classes.content}>
        <Typography align="center" variant="h6">
          ユーザー編集
        </Typography>
      </DialogTitle>
      <DialogContent dividers>
        <form>
          <TextField
            fullWidth
            className={classes.text}
            id="outlined-multiline-static"
            label="名前"
            value={inputName}
            onChange={(event) => setInputName(event.target.value)}
            variant="outlined"
          />
        </form>
      </DialogContent>
      <DialogActions>
        <Container className={classes.container}>
          <Button
            onClick={handleCloseWithUpload}
            color="primary"
            disabled={inputName === ""}
            variant="contained"
            style={{ marginRight: "2rem" }}
          >
            更新
          </Button>
          <Button onClick={handleCloseWithCancel} color="primary">
            キャンセル
          </Button>
        </Container>
      </DialogActions>
    </Dialog>
  );
};

export default UserEditDialog;
