import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";

interface Props {
  text: string;
  isEditMode: boolean;
  index: number;
  handleDelete: any;
}

const useStyles = makeStyles((theme) => ({
  chip: {
    margin: theme.spacing(1),
  },
}));

const StatusItem = (props: Props) => {
  const classes = useStyles();

  if (props.isEditMode) {
    return (
      <Chip
        variant="outlined"
        className={classes.chip}
        label={props.text}
        onDelete={() => props.handleDelete(props.index)}
      />
    );
  } else {
    return (
      <Chip
        variant="default"
        className={classes.chip}
        label={props.text}
        color="primary"
      />
    );
  }
};

export default StatusItem;
