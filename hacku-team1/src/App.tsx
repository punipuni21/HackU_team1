import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import TopPage from "./components/pages/TopPage";

import NavBar from "./components/organisms/navbar";
import Footer from "./components/organisms/footer";

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

function App() {
  const classes = useStyles();

  return (
    <div className="App">
      <Router>
        <NavBar />
        <div className={classes.toolbar} />
        <Switch>
          <Route exact path="/" component={TopPage} />
          <Route path="/mypage" component={UserPage} />
          <Route path="/otherspage" component={OtherUsersPage} />
        </Switch>
        <div className={classes.footbar} />
        <div className={classes.footer}>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
