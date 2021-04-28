import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Navs from './Components/Navs';
import Home from './pages/Home';
import Start from './pages/Start';

function App() {
  return (
    <div>
      <Navs />
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
