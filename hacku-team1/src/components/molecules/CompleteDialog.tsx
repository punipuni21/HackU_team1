import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  Dialog,
  DialogContent,
  DialogActions,
  DialogTitle,
} from "@material-ui/core";
import Image from "../atoms/Image";

type Props = {
  title: string;
  refURL: string;
  img: string;
  msg: string;
  isOpen: boolean;
  doClose: () => void;
};

const useStyles = makeStyles((theme) => ({
  content: {
    textAlign: "center",
  },
  image: {
    width: "80%",
  },
}));

const CompleteDialog = (props: Props) => {
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
              classname={classes.image}
            />
          </div>
          <a href={props.refURL} target="_blank" rel="noopener noreferrer">
            おすすめのリンク
          </a>
          <p>{props.msg}</p>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            閉じる
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default CompleteDialog;
