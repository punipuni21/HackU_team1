import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TopPage from "./components/pages/TopPage";

import NavBar from "./components/organisms/navbar";
import Footer from "./components/organisms/footer";

import UserPage from "./components/pages/UserPage";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Switch>
            <Route exact path="/" component={TopPage} />
          </Switch>
        </Router>
      </header>
    </div>
  );
}

export default App;
