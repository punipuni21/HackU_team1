import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { GoogleLoginButton } from "react-social-login-buttons";

import firebase from "../../firebase/firebase";

type Props = {
  signIn: VoidFunction;
};

const useStyles = makeStyles(() => ({
  loginButton: {
    color: "white",
    borderColor: "white",
    backgroundColor: "inherit",
    textTransform: "none",
  },
}));

const SignInButton: React.FC<Props> = (props) => {
  const classes = useStyles();

  return (
    <Button
      className={classes.loginButton}
      variant="outlined"
      onClick={() => props.signIn()}
    >
      Sign In
    </Button>
  );
};

export default SignInButton;
