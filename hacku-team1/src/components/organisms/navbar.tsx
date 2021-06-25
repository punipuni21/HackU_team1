import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { useHistory } from "react-router-dom";

import SignInButton from "../molecules/SignInButton";
import SignOutButton from "../molecules/SignOutButton";
import SectionBar from "../molecules/sectionBar";

import firebase from "../../firebase/firebase";

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
  const history = useHistory();

  const [isSignIn, setIsSignIn] = React.useState<boolean>(false);

  const [user, setUser] =
    useState<firebase.firestore.DocumentData | null>(null);

   useEffect(() => {
    return firebase.auth().onAuthStateChanged((user) => {
      setUser(user);
    });
  }, []);

  const signIn = () => {
    setIsSignIn(true)
    // const provider = new firebase.auth.GoogleAuthProvider();
    // firebase.auth().signInWithRedirect(provider);
  };

  const signOut = () => {
    setIsSignIn(false);
    history.push("/");
  };

  return (
    <div className={classes.root}>
      <p className="App-intro">UID: {user && user.uid}</p>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar className={classes.toolBar}>
          <div className={classes.sectionBar}>
            <SectionBar isSignIn={isSignIn} />
          </div>
          <div
            className={classes.signInOutButton}
            style={!isSignIn ? {} : { display: "none" }}
          >
            <SignInButton setIsSignIn={setIsSignIn} signIn={signIn}/>
          </div>
          <div
            className={classes.signInOutButton}
            style={isSignIn ? {} : { display: "none" }}
          >
            <SignOutButton setIsSignIn={setIsSignIn} signOut={signOut}/>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
