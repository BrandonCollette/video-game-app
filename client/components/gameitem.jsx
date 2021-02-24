import React from 'react';
import {Link} from "react-router-dom";

export default function GameItem({ event }) {
    const { name, rating, cover } = event;
    return (

        <div className="col-sm-2 px-0">
            <div className="card bg-dark text-white h-100">
                <img src={cover.url} className="card-img-top img-fluid gameImg" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">Rating: {Math.round(rating)}</p>
                    <Link href="" className="btn btn-secondary textGlow" to="/game">Details</Link>
                </div>
            </div>
        </div>

    );
}