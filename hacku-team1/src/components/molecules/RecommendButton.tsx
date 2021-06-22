import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

interface Props {
  text: string;
}

const useStyles = makeStyles((theme) => ({
  button: {
    backgroundColor: "red",
    margin: theme.spacing(1),
  },
}));

const RecommendButton = (props: Props) => {
  const classes = useStyles();
  return (
    <Button variant="contained" className={classes.button}>
      {props.text}
    </Button>
  );
};

export default RecommendButton;
