import React from 'react';
import { Route, Link } from 'react-router-dom';
import Home from './pages/home';
import Game from './pages/game';

export default class App extends React.Component {
  render() {

    return (
        <div>
          {/* <div className="text-center"> */}
          {/*  <Link className="px-4" to="/">Home</Link> */}
          {/*  <Link className="px-4" to="/search">Search</Link> */}
          {/* </div> */}

            <nav className="navbar navbar-expand-lg navbar-light bg-dark mb-5 sticky-top">
                <div className="container-fluid">
                    <Link className="navbar-brand text-danger textGlow" to="/">GAMESCORE</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav  mb-2 mb-lg-0">
                            <li className="nav-item mx-5">
                                <a className="nav-link active text-white" aria-current="page" href="#">Xbox One</a>
                            </li>

                            <li className="nav-item mx-5">
                                <a className="nav-link active text-white" aria-current="page" href="#">Playstation 4</a>
                            </li>

                            <li className="nav-item mx-5">
                                <a className="nav-link active text-white" aria-current="page" href="#">Nintendo Switch</a>
                            </li>

                            <li className="nav-item mx-5">
                                <a className="nav-link active text-white" aria-current="page" href="#">PC</a>
                            </li>

                        </ul>
                        <form className="d-flex" action="">
                            <input className="form-control me-2 col-sm-* input-lg bigInput" type="search"
                                   placeholder="Search" aria-label="Search"></input>
                            <Link className="btn btn-outline-success" type="submit" to="/game">Search</Link>
                        </form>
                    </div>
                </div>
            </nav>

            <Route exact path="/">
            <Home />
          </Route>
          <Route path="/game">
            <Game />
          </Route>
        </div>
    );
  }
}
