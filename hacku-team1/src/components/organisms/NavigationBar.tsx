import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { useHistory } from "react-router-dom";

import SignInButton from "../molecules/SignInButton";
import SignOutButton from "../molecules/SignOutButton";
import SectionBar from "../molecules/sectionBar";

import firebase from "../../firebase/firebase";
import { db } from "../../firebase/firebase";
import { Avatar } from "@material-ui/core";
import { Box } from "@material-ui/core";

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

  const [usericon, setUserIcon] = useState<string>("");

  useEffect(() => {
    return firebase.auth().onAuthStateChanged(async (user) => {
      setUser(user);
      if (user) {
        handleLogin(user.uid);
        user.photoURL && setUserIcon(user.photoURL);
        var userDoc = await db.collection("User").doc(user.uid).get();
        if (!userDoc.exists) {
          // Firestore にユーザー用のドキュメントが作られていなければ作る
          await userDoc.ref.set({
            displayName: user.displayName,
            iconURL: user.photoURL,
          });

          // 例として、statusに「このアプリの初心者」
          await db
            .collection("Status")
            .add({ content: "このアプリの初心者", userID: user.uid });
        } else {
          // 存在する場合はディスプレイネームとアイコンを更新
          await userDoc.ref.update({
            displayName: user.displayName,
            iconURL: user.photoURL,
          });
        }
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

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar className={classes.toolBar}>
          <div className={classes.sectionBar}>
            <SectionBar isSignIn={user ? true : false} />
          </div>

          {user ? (
            <>
              <Box m={1}>
                <Avatar src={usericon} />
              </Box>
              <div className={classes.signInOutButton}>
                <SignOutButton signOut={signOut} />
              </div>
            </>
          ) : (
            <div className={classes.signInOutButton}>
              <SignInButton signIn={signIn} />
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavigationBar;
