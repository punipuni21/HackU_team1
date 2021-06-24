import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

type Props = {
  setIsSignIn: any;
};

const useStyles = makeStyles(() => ({
  logoutButton: {
    color: "white",
    borderColor: "white",
    backgroundColor: "inherit",
    textTransform: "none",
  },
}));

const LogoutButton: React.FC<Props> = (props) => {
  const classes = useStyles();

  const signIn = () => {
    props.setIsSignIn(true);
  };

  return (
    <Button className={classes.logoutButton} variant="outlined" onClick={() => signIn()}>
      Sign In
    </Button>
  );
};

export default LogoutButton;
