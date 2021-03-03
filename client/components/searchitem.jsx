import React from 'react';
import { Link } from 'react-router-dom';
// import VanillaTilt from "vanilla-tilt";


export default function SearchItem({ event }) {
    const { name, cover,summary,rating } = event;

    // VanillaTilt.init(document.querySelectorAll(".vTilt"), {
    //     max: 25,
    //     speed: 400
    // });

    if(!cover){
        return(
            <div className="card w-100 bg-dark text-white my-1 px-0 searchItem">
                <div className="card-body">
                    <img src="" className="rounded float-start img-fluid mt-1 ms-0 me-2 searchImg" alt="..." />
                    <h5><span className="badge bg-success ratingBadge m-auto">{Math.round(rating)}</span></h5>
                    <h5 className="card-title c-title">{name}</h5>
                    <p className="card-text c-text">{summary}</p>
                    <Link href="" className="btn btn-primary searchScore" to="/game">Score</Link>
                </div>
            </div>
        )
    }
    else {
        return (

            <div className="card w-100 bg-dark text-white my-1 px-0 searchItem">
                <div className="card-body">
                    <img src={`https://images.igdb.com/igdb/image/upload/t_cover_small/${cover.image_id}.jpg`} className="mb-3 rounded float-start img-fluid mt-1 ms-0 me-2 searchImg" alt="..."/>
                    <h5><span className="badge bg-success ratingBadge m-auto">{Math.round(rating)}</span></h5>
                    <h5 className="card-title c-title">{name}</h5>
                    <p className="card-text c-text">{summary}</p>
                    <Link href="" className="btn btn-primary position-absolute bottom-0 searchScore" to="/game">Score</Link>
                </div>
            </div>

        );
    }
}