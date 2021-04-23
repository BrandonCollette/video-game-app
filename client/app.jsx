import React from 'react';
import { Route, Link } from 'react-router-dom';
import Home from './pages/home';
import Game from './pages/game';
import Xbox from './pages/xbox';
import Playstation from './pages/playstation';
import Switch from './pages/switch';
import Pc from './pages/pc';
import Search from './pages/search';
import Navbar from './components/navbar';
import GameItem from './components/gameitem';
import PopularTitles from './components/populartitles';


export default class App extends React.Component {
  render() {
    return (
        <div>

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

            <Route path="/game/:game/:userId" render={(props) => <Game {...props} />} />

            <Route path="/search/:system/:search" render={(props) => <Navbar {...props} />} />

        </div>
    );
  }
}
