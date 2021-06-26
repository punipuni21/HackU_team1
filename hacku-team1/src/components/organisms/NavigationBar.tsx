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

type Props = {
  handleLogin: (uid: string | null) => void;
};
const NavigationBar: React.FC<Props> = ({ handleLogin }) => {
  const classes = useStyles();
  const history = useHistory();

  const [user, setUser] =
    useState<firebase.firestore.DocumentData | null>(null);

  useEffect(() => {
    return firebase.auth().onAuthStateChanged((user) => {
      setUser(user);
      if (user) {
        handleLogin(user.uid);
      } else {
        handleLogin(null);
      }
    });
  }, []);

  const signIn = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithRedirect(provider);
  };

  const signOut = () => {
    firebase.auth().signOut();
    history.push("/");
  };

  console.log(user);

  return (
    <div className={classes.root}>
      <p className="App-intro">UID: {user && user.uid}</p>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar className={classes.toolBar}>
          <div className={classes.sectionBar}>
            <SectionBar isSignIn={user ? true : false} />
          </div>
          <div
            className={classes.signInOutButton}
            style={!user ? {} : { display: "none" }}
          >
            <SignInButton signIn={signIn} />
          </div>
          <div
            className={classes.signInOutButton}
            style={user ? {} : { display: "none" }}
          >
            <SignOutButton signOut={signOut} />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavigationBar;
