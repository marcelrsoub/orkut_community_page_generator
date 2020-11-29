import React from 'react';
import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Editor from './views/Editor';
import Page from './views/Page';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Editor} />
        {/* <Route exact path="/" component={Page} /> */}
      </Switch>
    </Router>
  );
}

export default App;
