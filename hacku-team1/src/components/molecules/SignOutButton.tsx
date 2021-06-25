import React from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

import firebase from "../../firebase/firebase";

type Props = {
  setIsSignIn: any;
  signOut: any;
};

const useStyles = makeStyles(() => ({
  logoutButton: {
    color: "white",
    borderColor: "white",
    backgroundColor: "inherit",
    textTransform: "none",
  },
}));

const SignOutButton: React.FC<Props> = (props) => {
  const classes = useStyles();

  const history = useHistory();
  const signOut = () => {
    props.setIsSignIn(false);
    history.push("/");
  };

  return (
    <Button className={classes.logoutButton} variant="outlined" onClick={() => props.signOut()}>
      Sign Out
    </Button>
  );
};

export default SignOutButton;
