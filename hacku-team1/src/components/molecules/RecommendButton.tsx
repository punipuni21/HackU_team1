import React from "react";
import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import RecommendDialog from "../molecules/RecommendDialog";

interface Props {
  text: string;
  img: string;
  // onClick: VoidFunction;
}

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
    borderRadius: 15,
  },
}));

const RecommendButton = (props: Props) => {
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
        variant="outlined"
        className={classes.button}
        onClick={handleOpen}
      >
        {props.text}
      </Button>
      <RecommendDialog
        title={"「" + props.text + "」の成果を投稿！"}
        img={props.img}
        isOpen={open}
        doClose={() => handleClose()}
      ></RecommendDialog>
    </>
  );
};

export default RecommendButton;
