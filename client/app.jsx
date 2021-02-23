import React from 'react';
import { Route, Link } from 'react-router-dom';
import Home from './pages/home';
import Game from './pages/game';
import Xbox from './pages/xbox';
import Playstation from './pages/playstation';
import Switch from './pages/switch';
import Pc from './pages/pc';
import Search from './pages/search';


export default class App extends React.Component {
  render() {

    return (
        <div>
          {/* <div className="text-center"> */}
          {/*  <Link className="px-4" to="/">Home</Link> */}
          {/*  <Link className="px-4" to="/search">Search</Link> */}
          {/* </div> */}


            <Route exact path="/">
            <Home />
          </Route>
          <Route path="/search">
            <Search />
          </Route>
            <Route path="/xbox">
                <Xbox />
            </Route>
            <Route path="/playstation">
                <Playstation />
            </Route>
            <Route path="/switch">
                <Switch />
            </Route>
            <Route path="/pc">
                <Pc />
            </Route>
        </div>
    );
  }
}
