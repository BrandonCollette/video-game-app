import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar(props){

    return (
        <nav className={`navbar navbar-expand-lg navbar-light bg-dark mb-5 sticky-top defNavbar ${props.system}`} >
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
                            <Link className="nav-link active text-white" aria-current="page" to="/xbox">Xbox One</Link>
                        </li>

                        <li className="nav-item mx-5">
                            <Link className="nav-link active text-white" aria-current="page" to="/playstation">Playstation 4</Link>
                        </li>

                        <li className="nav-item mx-5">
                            <Link className="nav-link active text-white" aria-current="page" to="/switch">Nintendo Switch</Link>
                        </li>

                        <li className="nav-item mx-5">
                            <Link className="nav-link active text-white" aria-current="page" to="/pc">PC</Link>
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
    );
}