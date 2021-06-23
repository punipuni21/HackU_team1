import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

interface Props {
  text: string;
}

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
    borderRadius: 15,
  },
}));

const RecommendButton = (props: Props) => {
  const classes = useStyles();
  return (
    <Button variant="outlined" className={classes.button}>
      {props.text}
    </Button>
  );
};

export default RecommendButton;
