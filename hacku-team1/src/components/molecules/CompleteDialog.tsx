import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Button,
  Dialog,
  DialogContent,
  DialogActions,
  DialogTitle,
  Container,
  Typography,
  Box,
  Divider,
} from '@material-ui/core';
import LinkIcon from '@material-ui/icons/Link';
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
    textAlign: 'center',
  },
  image: {
    width: '80%',
  },
  action: {
    width: 'fit-content',
  },
  box: {
    display: 'flex',
    justifyContent: 'flex-end',
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
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <Container>
          <DialogTitle id="form-dialog-title" className={classes.content}>
            {props.title}
          </DialogTitle>
          <DialogContent dividers>
            <Box mb={1}>
              <Typography variant="body1">{props.msg}</Typography>
            </Box>
            <div className={classes.content}>
              <img src={props.img} alt={props.title} className={classes.image} />
            </div>
            <Box m={1}>
              <Divider />
            </Box>
            <Box className={classes.box}>
              <LinkIcon />
              <a href={props.refURL} target="_blank" rel="noopener noreferrer">
                おすすめされたリンク
              </a>
            </Box>
          </DialogContent>
          <DialogActions>
            <Container className={classes.action}>
              <Button onClick={handleClose} color="primary" variant="outlined" size="large">
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
