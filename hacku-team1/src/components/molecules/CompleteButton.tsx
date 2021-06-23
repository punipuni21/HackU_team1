import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import DoneIcon from "@material-ui/icons/Done";

interface Props {
  text: string;
}

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
    borderRadius: 15,
  },
}));

const CompleteButton = (props: Props) => {
  const classes = useStyles();
  return (
    <Button
      variant="contained"
      color="default"
      className={classes.button}
      startIcon={<DoneIcon />}
    >
      {props.text}
    </Button>
  );
};

export default CompleteButton;
