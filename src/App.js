import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Start from './pages/Start';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/started">
          <Start />
        </Route>
        <Route>This is 404 page</Route>
      </Switch>
    </div>
  );
}

export default App;
