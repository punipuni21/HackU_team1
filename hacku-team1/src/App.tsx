import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import TopPage from './components/pages/TopPage';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Router>
          <div>
            <Route exact path='/' component={TopPage}/>
          </div>
        </Router>
      </header>
    </div>
  );
}

export default App;
