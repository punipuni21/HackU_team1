import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Container from "@material-ui/core/Container";
interface Props {
  picture_src: string;
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    // display: "inline",
    // alignItems: "center",
    // justifyContent: "center",
    // marginTop: "auto",
    // margin: 20,
    // position: 'fixed',

    // top: 100,
    // left: "auto",
    // right: "auto",
  },
  large: {
    width: theme.spacing(10),
    height: theme.spacing(10),
  },
}));

const UserIcon = (props: Props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container maxWidth="sm">
        <Avatar
          alt="user icon"
          src={props.picture_src}
          className={classes.large}
        />
      </Container>
    </div>
  );
};

export default UserIcon;
