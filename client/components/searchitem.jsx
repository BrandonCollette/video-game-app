import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import Game from "../pages/game";
// import VanillaTilt from "vanilla-tilt";


export default function SearchItem({ event }) {
    const { name, cover,summary,rating,id } = event;
    let gameId = null;


    const [clicked, setClicked] = useState(false);
    const [titleId, setTitleId] = useState(null);

    // VanillaTilt.init(document.querySelectorAll(".vTilt"), {
    //     max: 25,
    //     speed: 400
    // });

    function clickButton() {
        gameId = id;
        // this.setState({clicked: true});
        // this.setState({titleId: id});
        setTitleId(gameId);
        setClicked(true);
    }

    if(!cover && clicked === false){
        return(
            <div className="card w-100 bg-dark text-white my-1 px-0 searchItem toBeRemoved">
                <div className="card-body">
                    <img src="" className="rounded float-start img-fluid mt-1 ms-0 me-2 searchImg" alt="..." onClick={clickButton} />
                    <h5><span className="badge bg-success ratingBadge m-auto">{Math.round(rating)}</span></h5>
                    <h5 className="card-title c-title">{name}</h5>
                    <p className="card-text c-text">{summary}</p>
                    <button href="" className="btn btn-primary searchScore" to="/game" onClick={clickButton}>Score</button>
                </div>
            </div>
        )
    }
    else if(cover && clicked === false){
        return (

            <div className="card w-100 bg-dark text-white my-1 px-0 searchItem toBeRemoved">
                <div className="card-body">
                    <img src={`https://images.igdb.com/igdb/image/upload/t_cover_small/${cover.image_id}.jpg`} className="mb-3 rounded float-start img-fluid mt-1 ms-0 me-2 searchImg" alt="..." onClick={clickButton} />
                    <h5><span className="badge bg-success ratingBadge m-auto">{Math.round(rating)}</span></h5>
                    <h5 className="card-title c-title">{name}</h5>
                    <p className="card-text c-text">{summary}</p>
                    <button href="" className="btn btn-primary position-absolute bottom-0 searchScore" to="/game" onClick={clickButton}>Score</button>
                </div>
            </div>

        );
    }
    else if(clicked === true){
        $(".toBeRemoved").addClass("hidden");
        return(
            <Game titleId={titleId} />
        );
    }
}