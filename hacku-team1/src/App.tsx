import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import TopPage from "./components/pages/TopPage";

import NavigationBar from "./components/organisms/NavigationBar";

import Footer from "./components/organisms/Footer";

import UserPage from "./components/pages/UserPage";

import OtherUsersPage from "./components/pages/OtherUsersPage";

import { Redirect } from "react-router";

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

  const [uid, setUid] = useLocalStorage("uid", null);
  const [otherUid, setOtherUid] = useLocalStorage("otherUid", null);

  const handleLogin = (uid: string | null) => {
    // console.log(uid);
    setUid(uid);
    setOtherUid(otherUid);
  };

  return (
    <div className="App">
      <div className={classes.fixedfooter}>
        <Router>
          <NavigationBar
            handleLogin={handleLogin}
            uid={uid}
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
              render={() => <UserPage myUid={uid} otherUid={otherUid} />}
            />
            <Route
              path="/otherspage"
              render={() => (
                <OtherUsersPage uid={uid} setOtherUid={setOtherUid} />
              )}
            />
            <Route
              path="/otheruserpage"
              // render={() => <UserPage myUid={uid} otherUid={otherUid} />}
              render={() =>
                uid === otherUid ? (
                  <Redirect to="/mypage" />
                ) : (
                  <UserPage myUid={uid} otherUid={otherUid} />
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
