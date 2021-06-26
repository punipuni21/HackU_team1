import React from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

type Props = {
  signOut: VoidFunction;
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

  return (
    <Button
      className={classes.logoutButton}
      variant="outlined"
      onClick={() => props.signOut()}
    >
      Sign Out
    </Button>
  );
};

export default SignOutButton;
