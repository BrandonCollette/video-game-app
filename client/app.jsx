import React from 'react';
import { Route, Link } from 'react-router-dom';
import Home from './pages/home';
import Game from './pages/game';

export default class App extends React.Component {
  render() {
    return (
        <div>
          <div className="text-center">
            <Link className="px-4" to="/">Home</Link>
            <Link className="px-4" to="/search">Search</Link>
          </div>

          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/search">
            <Game />
          </Route>
        </div>
    );
  }
}
