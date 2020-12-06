import React from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Editor from './views/Editor';
import Page from './views/Page';
import ReactGA from 'react-ga';

ReactGA.initialize('G-S7RJLWP3ES');
ReactGA.pageview(window.location.pathname + window.location.search);

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Editor} />
        <Route exact path="/page" component={Page} />
      </Switch>
    </Router>
  );
}

export default App;
