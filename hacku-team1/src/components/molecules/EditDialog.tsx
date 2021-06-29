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

import StatusItem from "../molecules/StatusItem";

type Props = {
  title: string;
  contents: string[];
  editContents : any;
  isOpen: boolean;
  doClose: VoidFunction;
  updateDB: VoidFunction;
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
  },
  returnButton: {
    margin: "0 auto",
  }
}));

const EditDialog = (props: Props) => {

  const CHARACTER_LIMIT = 10;

  const classes = useStyles();

  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");

  useEffect(() => {
    setOpen(props.isOpen);
  }, [props.isOpen]);

  const handleCloseWithUpdate = () => {
    props.updateDB();
    setInput("");
    setOpen(false);
    props.doClose();
  };

  const handleAddButton = (value: string) => {
    props.editContents([...props.contents, value]);
    setInput("")
  }

  const handleDeleteButton = (index: number) => {
    props.editContents(props.contents.filter((_,i) => i !== index))
  }

  return (
    
    <Dialog
      open={open}
      onClose={handleCloseWithUpdate}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">{props.title}</DialogTitle>
      <div className={classes.items}>
        {props.contents.map((status, index) => (
          <StatusItem text={status} 
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
            inputProps={{
              maxlength: CHARACTER_LIMIT
            }}
            value={input}
            helperText={`${input.length}/${CHARACTER_LIMIT}`}
            onChange={(event) => setInput(event.target.value)}
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
        <Button onClick={handleCloseWithUpdate} color="primary" variant="outlined" className={classes.returnButton}>
          閉じる
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditDialog;
