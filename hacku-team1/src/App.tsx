import React, { useEffect, useState } from "react";
import { Redirect } from "react-router";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

import firebase, { db } from "./firebase/firebase";

import TopPage from "./components/pages/TopPage";
import NavigationBar from "./components/organisms/NavigationBar";
import Footer from "./components/organisms/Footer";
import UserPage from "./components/pages/UserPage";
import OtherUsersPage from "./components/pages/OtherUsersPage";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    toolbar: theme.mixins.toolbar,
    footbar: {
      [theme.breakpoints.down("sm")]: {
        marginTop: "48px",
      },
    },
    fixedfooter: {
      minHeight: "100vh",
      position: "relative",
      paddingBottom: "60px",
      boxSizing: "border-box",
    },
    footer: {
      [theme.breakpoints.down("sm")]: {
        display: "none",
      },
    },
  })
);

function useLocalStorage(key: any, initialValue: any) {
  // State to store our value
  // Pass initial state function to useState so logic is only executed once
  const [storedValue, setStoredValue] = useState(() => {
    try {
      // Get from local storage by key
      const item = window.localStorage.getItem(key);
      // Parse stored json or if none return initialValue
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      // If error also return initialValue
      console.log(error);
      return initialValue;
    }
  });
  // Return a wrapped version of useState's setter function that ...
  // ... persists the new value to localStorage.
  const setValue = (value: any) => {
    try {
      // Allow value to be a function so we have same API as useState
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      // Save state
      setStoredValue(valueToStore);
      // Save to local storage
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      // A more advanced implementation would handle the error case
      console.log(error);
    }
  };
  return [storedValue, setValue];
}

const App: React.FC = () => {
  const classes = useStyles();

  const [userIcon, setUserIcon] = useState<string>("");
  const [uid, setUid] = useLocalStorage("uid", null);
  const [otherUid, setOtherUid] = useLocalStorage("otherUid", null);

  useEffect(() => {
    return firebase.auth().onAuthStateChanged(async (user) => {
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
            .add({ content: "しろ-せんの素人", userID: user.uid });
        } else {
          // 存在する場合はディスプレイネームとアイコンを更新
          await userDoc.ref.update({
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
  };

  const handleLogin = (uid: string | null) => {
    setUid(uid);
    // setOtherUid(otherUid);
  };

  return (
    <div className="App">
      <div className={classes.fixedfooter}>
        <Router>
          <NavigationBar
            signIn={signIn}
            signOut={signOut}
            uid={uid}
            userIcon={userIcon}
            setOtherUid={setOtherUid}
          />
          <div className={classes.toolbar} />
          <Switch>
            <Route
              exact
              path="/"
              render={() => <TopPage uid={uid} setOtherUid={setOtherUid} />}
            />
            <Route
              path="/mypage"
              render={() =>
                uid ? (
                  <UserPage myUid={uid} otherUid={otherUid} />
                ) : (
                  <Redirect to="/" />
                )
              }
            />
            <Route
              path="/otherspage"
              render={() =>
                uid ? (
                  <OtherUsersPage uid={uid} setOtherUid={setOtherUid} />
                ) : (
                  <Redirect to="/" />
                )
              }
            />
            <Route
              path="/otheruserpage"
              render={() =>
                uid ? (
                  uid === otherUid ? (
                    <Redirect to="/mypage" />
                  ) : (
                    <UserPage myUid={uid} otherUid={otherUid} />
                  )
                ) : (
                  <Redirect to="/" />
                )
              }
            />
          </Switch>
        </Router>
        <div className={classes.footer}>
          <Footer />
        </div>
        <div className={classes.footbar} />
      </div>
    </div>
  );
};

export default App;
