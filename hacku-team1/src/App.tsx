import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TopPage from "./components/pages/TopPage";

import NavBar from "./components/organisms/navbar";
import Footer from "./components/organisms/footer";

import UserPage from "./components/pages/UserPage";

import OtherUsersPage from "./components/pages/OtherUsersPage";

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Router>
        <NavBar />
          <Switch>
            <Route exact path="/" component={TopPage} />
            <Route path='/mypage' component={UserPage} />
            <Route path='/otherspage' component={OtherUsersPage} />
          </Switch>
        <Footer />
      </Router>
      </header>
    </div>
  );
}

export default App;
