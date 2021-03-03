import React from 'react';
import {Link} from "react-router-dom";
 import VanillaTilt from "vanilla-tilt";

export default function GameItem({ event }) {
    const { name, rating, cover, platforms } = event;

    VanillaTilt.init(document.querySelectorAll(".vTilt"), {
        max: 25,
        speed: 400,
    });

    return (

        <div className="col-sm-2 px-0 mb-3 ">
            <div className="card bg-dark text-white h-100">
                <div className="imgContainer vTilt">
                    <img src={`https://images.igdb.com/igdb/image/upload/t_cover_big/${cover.image_id}.jpg`} className="card-img-top img-fluid gameImg" alt="..." />
                    <h5><span className="badge bg-success ratingBadge">{Math.round(rating)}</span></h5>
                </div>
                <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{name}</h5>
                    {/*<p className="card-text mt-auto">Rating: {Math.round(rating)}</p>*/}
                    <p className="card-text mt-auto">Platform: {platforms[0].name}</p>
                    <Link href="" className="btn btn-secondary textGlow mt-auto" to="/game">Details</Link>
                </div>
            </div>
        </div>

    );
}