import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Button,
  Dialog,
  DialogContent,
  DialogActions,
  DialogTitle,
  TextField,
  Typography,
  Box,
  Container,
} from '@material-ui/core';

import AddIcon from '@material-ui/icons/Add';
import { Chip } from '@material-ui/core';

type Props = {
  title: string;
  contents: string[];
  editContents: any;
  isOpen: boolean;
  doClose: VoidFunction;
  updateDB: VoidFunction;
};

const useStyles = makeStyles((theme) => ({
  content: {
    textAlign: 'center',
  },
  items: {
    marginLeft: '20px',
  },
  add: {
    padding: '0',
  },
  addButton: {
    borderRadius: '0px 4px 4px 0px',
    boxShadow: 'none',
    // height: "9.4vh",
    height: '73%',
  },
  textfield: {
    // width: "20em",

    [`& fieldset`]: {
      borderRadius: '4px 0px 0px 4px',
    },
  },
  addIcon: {
    fontSize: 'xx-large',
  },
  addBox: {
    display: 'flex',
    // alignItems: "center",
    justifyContent: 'center',
    marginTop: '1rem',
  },
  action: {
    width: 'fit-content',
  },
  chip: {
    margin: theme.spacing(1),
  },
}));

const EditDialog = (props: Props) => {
  const CHARACTER_LIMIT = 10;

  const classes = useStyles();

  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');

  useEffect(() => {
    setOpen(props.isOpen);
  }, [props.isOpen]);

  const handleCloseWithUpdate = () => {
    props.updateDB();
    setInput('');
    setOpen(false);
    props.doClose();
  };

  const handleAddButton = (value: string) => {
    if (value.length !== 0) {
      props.editContents([...props.contents, value]);
      setInput('');
    }
  };

  const handleDeleteButton = (index: number) => {
    props.editContents(props.contents.filter((_, i) => i !== index));
  };

  return (
    <Dialog
      open={open}
      onClose={handleCloseWithUpdate}
      aria-labelledby="form-dialog-title"
      fullWidth>
      <Container>
        <DialogTitle id="form-dialog-title">
          <Typography align="center" variant="h6">
            {props.title}
          </Typography>
        </DialogTitle>

        <DialogContent dividers>
          {props.contents.map((status, index) => (
            <Chip
              variant="outlined"
              className={classes.chip}
              label={status}
              onDelete={() => handleDeleteButton(index)}
              key={status + index}
            />
          ))}
          <div className={classes.addBox}>
            <form>
              <TextField
                id="outlined-basic"
                label="10文字以内"
                value={input}
                inputProps={{ maxLength: CHARACTER_LIMIT }}
                helperText={`${input.length}/${CHARACTER_LIMIT}`}
                onChange={(event) => setInput(event.target.value)}
                variant="outlined"
                className={classes.textfield}
              />
            </form>
            <Box>
              <Button
                onClick={() => handleAddButton(input)}
                variant="contained"
                className={classes.addButton}
                color="primary">
                <AddIcon className={classes.addIcon} />
              </Button>
            </Box>
          </div>
        </DialogContent>
        <DialogActions>
          <Container className={classes.action}>
            <Button onClick={handleCloseWithUpdate} color="primary" variant="outlined" size="large">
              閉じる
            </Button>
          </Container>
        </DialogActions>
      </Container>
    </Dialog>
  );
};

export default EditDialog;
