import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Show from './Components/Show/Show';
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
        <Route exact path="/show/:id">
          <Show />
        </Route>
        <Route>This is 404 page</Route>
      </Switch>
    </div>
  );
}

export default App;
