import React from "react";
import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import DoneIcon from "@material-ui/icons/Done";
import CompleteDialog from "../molecules/CompleteDialog";

interface Props {
  text: string;
  refURL: string;
  img: string;
  msg: string;
  // onClick: VoidFunction;
}

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
    borderRadius: 15,
  },
}));

const CompleteButton = (props: Props) => {
  const classes = useStyles();

  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button
        variant="contained"
        color="default"
        className={classes.button}
        onClick={handleOpen}
        startIcon={<DoneIcon />}
      >
        {props.text}
      </Button>
      <CompleteDialog
        title={"「" + props.text + "」を達成しました！"}
        refURL={props.refURL}
        img={props.img}
        msg={props.msg}
        isOpen={open}
        doClose={() => handleClose()}
      ></CompleteDialog>
    </>
  );
};

export default CompleteButton;
