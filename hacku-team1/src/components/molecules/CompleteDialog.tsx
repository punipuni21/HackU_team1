import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  Dialog,
  DialogContent,
  DialogActions,
  DialogTitle,
  Container,
  Typography,
  Box,
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
  action: {
    width: "fit-content",
  },
  box: {
    textAlign: "right",
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
        <Container>
          <DialogTitle id="form-dialog-title" className={classes.content}>
            <Typography align="center" variant="h6">
              {props.title}
            </Typography>
          </DialogTitle>
          <DialogContent dividers>
            <div className={classes.content}>
              <Image
                src={props.img}
                alt={props.title}
                classname={classes.image}
              />
            </div>
            <Box className={classes.box}>
              <a href={props.refURL} target="_blank" rel="noopener noreferrer">
                おすすめのリンク
              </a>
            </Box>
            <Typography variant="body1">{props.msg}</Typography>
          </DialogContent>
          <DialogActions>
            <Container className={classes.action}>
              <Button
                onClick={handleClose}
                color="primary"
                variant="outlined"
                size="large"
              >
                閉じる
              </Button>
            </Container>
          </DialogActions>
        </Container>
      </Dialog>
    </>
  );
};

export default CompleteDialog;
