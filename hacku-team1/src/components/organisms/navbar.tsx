import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

import SignInButton from "../molecules/SignInButton";
import SignOutButton from "../molecules/SignOutButton";
import SectionBar from "../molecules/sectionBar";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    backgroundColor: "gray",
  },
  toolBar: {
    minHeight: 24,
    padding: 0,
  },
  sectionBar: {
    flexGrow: 1,
  },
  signInOutButton: {
    marginRight: theme.spacing(2),
    marginLeft: "auto",
  },
}));

const NavBar: React.FC = () => {
  const classes = useStyles();
  const [isSignIn, setIsSignIn] = React.useState<boolean>(false);

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar className={classes.toolBar}>
          <div className={classes.sectionBar}>
            <SectionBar isSignIn={isSignIn} />
          </div>
          <div className={classes.signInOutButton} style={!isSignIn ? {} : {display: "none"}}>
            <SignInButton setIsSignIn={setIsSignIn} />
          </div>
          <div className={classes.signInOutButton} style={isSignIn ? {} : {display: "none"}}>
            <SignOutButton setIsSignIn={setIsSignIn} />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar