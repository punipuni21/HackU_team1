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

type Props = {
  title: string;
  img: string;
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

  useEffect(() => {
    setOpen(props.isOpen);
  }, [props.isOpen]);

  const handleClose = () => {
    setOpen(false);
    props.doClose();
  };

  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title" className={classes.content}>
          {props.title}
        </DialogTitle>
        <DialogContent>
          <div className={classes.content}>
            <Image
              src={props.img}
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
              variant="outlined"
            />
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            投稿
          </Button>
          <Button onClick={handleClose} color="primary">
            キャンセル
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default RecommendDialog;
