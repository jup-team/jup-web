import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { SignInPage, SignUpPage } from './pages';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <SignInPage />
        </Route>
        <Route path="/sign-up">
          <SignUpPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
