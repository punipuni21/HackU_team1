import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import TopPage from "./components/pages/TopPage";
// import Navbar from "./components/organisms/navbar";

import Navbar from "./components/organisms/Navbar";

import Footer from "./components/organisms/Hooter";

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
    footer: {
      [theme.breakpoints.down("sm")]: {
        display: "none",
      },
    },
  })
);

const App: React.FC = () => {
  const classes = useStyles();

  const [uid, setUid] = useState<any>("");

  const handleLogin = (uid: string) => {
    console.log(uid);

    setUid(uid);
  };

  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Navbar handleLogin={handleLogin} />
          <div className={classes.toolbar} />
          <Switch>
            <Route exact path="/" render={() => <TopPage uid={uid} />} />
            <Route path="/mypage" render={() => <UserPage uid={uid} />} />
            <Route
              path="/otherspage"
              render={() => <OtherUsersPage uid={uid} />}
            />
          </Switch>
          <div className={classes.footbar} />
          <div className={classes.footer}>
            <Footer />
          </div>
        </Router>
      </header>
    </div>
  );
};

export default App;
