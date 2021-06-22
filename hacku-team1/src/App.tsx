import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import TopPage from './components/pages/TopPage';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Router>
          <Switch>
            <Route exact path='/' component={TopPage}/>
          </Switch>
        </Router>
      </header>
    </div>
  );
}

export default App;
