import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Container from "@material-ui/core/Container";

interface Props {
  name: string;
  icon: string;
}

const useStyles = makeStyles((theme) => ({
  avatar: { width: "fit-content", height: "fit-content" },
}));

const UserIcon = (props: Props) => {
  const classes = useStyles();
  return (
    <Container>
      <Avatar alt={props.name} src={props.icon} className={classes.avatar} />
    </Container>
  );
};

export default UserIcon;
