import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import Game from "../pages/game";


export default function SearchItem({ event, system }) {
    const { name, cover,summary,rating,id } = event;
    let gameId = null;

    const [clicked, setClicked] = useState(false);
    const [titleId, setTitleId] = useState(null);

    function clickButton() {
        gameId = id;
        setTitleId(gameId);
    }

    if(!cover && clicked === false){
        return(
            <div className="card w-100 bg-dark text-white my-1 px-0 searchItem toBeRemoved">
                <div className="card-body">
                    <Link to={`/game/${system}/${id}`} onClick={clickButton} >
                        <img src="" className="rounded float-start img-fluid mt-1 ms-0 me-2 searchImg" alt="..."  />
                    </Link>
                    <h5 className="card-title c-title">{name}</h5>
                    <p className="card-text c-text">{summary}</p>
                    <Link className="btn btn-primary searchScore" to={`/game/${system}/${id}`} onClick={clickButton}>Score</Link>
                </div>
            </div>
        )
    }
    else if(cover && clicked === false){
        return (

            <div className="card w-100 bg-dark text-white my-1 px-0 searchItem toBeRemoved">
                <div className="card-body">
                    <Link to={`/game/${system}/${id}`} onClick={clickButton} >
                        <img src={`https://images.igdb.com/igdb/image/upload/t_cover_small/${cover.image_id}.jpg`} className="mb-3 rounded float-start img-fluid mt-1 ms-0 me-2 searchImg" alt="..." />
                    </Link>
                    <h5 className="card-title c-title">{name}</h5>
                    <p className="card-text c-text">{summary}</p>
                    <Link className="btn btn-primary position-absolute bottom-0 searchScore" to={`/game/${system}/${id}`} onClick={clickButton}>Score</Link>
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