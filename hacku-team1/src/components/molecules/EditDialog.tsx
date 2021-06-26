import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import LocalHospitalRoundedIcon from '@material-ui/icons/LocalHospitalRounded';
import {
  Button,
  Dialog,
  DialogContent,
  DialogActions,
  DialogTitle,
  TextField,
  IconButton
} from "@material-ui/core";
import Image from "../atoms/Image";

type Props = {
  title: string;
  // img: string;
  isOpen: boolean;
  doClose: () => void;
};

const useStyles = makeStyles((theme) => ({
  content: {
    textAlign: "center",
  },
  text: {
    width: "20em",
  },
  dialog: {
    height: "80px"
  },
  add: {
    padding: "0",
    
  }
}));

const EditDialog = (props: Props) => {
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
        <DialogTitle id="form-dialog-title">{props.title}</DialogTitle>
        <DialogContent className={classes.dialog}> 
          <form>
            <TextField
              className={classes.text}
              id="outlined-multiline-static"
              label="10文字以内"
              // multiline
              // rows={8}
              variant="outlined"
            />
            <IconButton
              className={classes.add}
              // style={{width: "100px",}}
              // className={props.style}
              // onClick={handleOpen}
            >
                <LocalHospitalRoundedIcon style={{maxWidth: '60px', maxHeight: '60px', minWidth: '60px', minHeight: '60px'}} />
            </IconButton>
          </form>
        </DialogContent>
        {/* <form>
            <TextField
              className={classes.text}
              id="outlined-multiline-static"
              label="10文字以内"
              // multiline
              // rows={8}
              variant="outlined"
            />
          </form> */}
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            更新
          </Button>
          <Button onClick={handleClose} color="primary">
            キャンセル
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default EditDialog;
