import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Container from "@material-ui/core/Container";

interface Props {
  name: string;
  icon: string;
}

const useStyles = makeStyles((theme) => ({
  avatar: {
    width: "100px",
    height: "100px",
    margin: "1em auto",
  },
}));

const UserIcon = (props: Props) => {
  const classes = useStyles();
  return (
    <Container maxWidth="sm">
      <Avatar alt={props.name} src={props.icon} className={classes.avatar} />
    </Container>
  );
};

export default UserIcon;
