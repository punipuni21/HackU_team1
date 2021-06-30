import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

interface Props {
  name: string;
}

const useStyles = makeStyles((theme) => ({}));

const UserName = (props: Props) => {
  const classes = useStyles();
  return <Typography variant="h4">{props.name}</Typography>;
};

export default UserName;
