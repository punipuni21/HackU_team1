import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";

interface Props {
  text: string;
}

const useStyles = makeStyles((theme) => ({
  chip: {
    margin: theme.spacing(1),
  },
}));

const StatusItem = (props: Props) => {
  const classes = useStyles();
  return (
    <Chip variant="outlined" className={classes.chip} label={props.text} />
  );
};

export default StatusItem;
