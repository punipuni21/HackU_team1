import React, { useState, useEffect, MouseEvent, ChangeEventHandler } from "react";
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
import StatusItem from "../molecules/StatusItem";

type Props = {
  title: string;
  contents: any[];
  editContents : any;
  isOpen: boolean;
  doClose: () => void;
  getPrevContents: VoidFunction;
};

const useStyles = makeStyles((theme) => ({
  content: {
    textAlign: "center",
  },
  items: {
    marginLeft: "20px",
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
  const [input, setInput] = useState("");

  // const prevContents = props.contents

  useEffect(() => {
    setOpen(props.isOpen);
  }, [props.isOpen]);

  const handleClose = () => {
    setOpen(false);
    props.doClose();
  };

  const handleCancelClose = () => {
    props.getPrevContents();
    setInput("")
    setOpen(false);
    props.doClose();
  };

  const handleAddButton = (value: string) => {
    props.editContents([...props.contents, {content : value}]);    
  }

  const handleDeleteButton = (index: number) => {
    props.editContents(props.contents.filter((_,i) => i !== index))
  }

  return (
    
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">{props.title}</DialogTitle>
      <div className={classes.items}>
        {props.contents.map((status, index) => (
          <StatusItem text={status.content} 
          isEditMode={true} 
          index={index} 
          handleDelete={handleDeleteButton}/>
        ))}
      </div>
      <DialogContent className={classes.dialog}>
        <form>
          <TextField
            className={classes.text}
            id="outlined-multiline-static"
            label="10文字以内"
            value={input}
            onChange={(event) => setInput(event.target.value)}
            // multiline
            // rows={8}
            variant="outlined"
          />
          <IconButton
            className={classes.add}
            onClick={ () => handleAddButton(input)}
          >
              <LocalHospitalRoundedIcon style={{maxWidth: '60px', maxHeight: '60px', minWidth: '60px', minHeight: '60px'}} />
          </IconButton>
        </form>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          更新
        </Button>
        <Button onClick={handleCancelClose} color="primary">
          キャンセル
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditDialog;
