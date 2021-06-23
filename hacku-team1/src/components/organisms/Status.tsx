import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import StatusItem from "../molecules/StatusItem";

interface Props {
  text: string;
}

const useStyles = makeStyles((theme) => ({
  h2: {
    textAlign: "left",
    marginTop: "20px",
    marginRight: "0px",
    marginBottom: "10px",
    marginLeft: "20px",
  },
  items: {
    marginLeft: "40px",
  },
}));

const Status = (props: Props) => {
  const classes = useStyles();
  return (
    <div>
      <h2 className={classes.h2}>何の初心者？</h2>
      <div className={classes.items}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
          <StatusItem text={props.text + num} />
        ))}
      </div>
    </div>
  );
};

export default Status;
