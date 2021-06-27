import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";
// import HighlightOffIcon from '@material-ui/icons/HighlightOff';

interface Props {
  text: string;
  isEditMode: boolean;
  index: number;
  handleDelete: any;
  // handleDelete: (index: number) => void;
}

const useStyles = makeStyles((theme) => ({
  chip: {
    margin: theme.spacing(1),
  },
}));

const StatusItem = (props: Props) => {
  const classes = useStyles();

  // const handleDelete = () => {
  //   console.info('You clicked the delete icon.');
  // };

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
        variant="outlined"
        className={classes.chip}
        label={props.text} 
      />
    );
  }
};

export default StatusItem;
