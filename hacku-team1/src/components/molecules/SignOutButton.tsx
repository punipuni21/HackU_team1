import React from "react";
import { useHistory } from "react-router-dom";
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

  const history = useHistory();
  const signOut = () => {
    props.setIsSignIn(false);
    history.push("/");
  };

  return (
    <Button className={classes.logoutButton} variant="outlined" onClick={() => signOut()}>
      Sign Out
    </Button>
  );
};

export default LogoutButton;
