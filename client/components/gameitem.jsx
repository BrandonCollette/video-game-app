import React, { useState,useEffect } from 'react';
import {Link, withRouter} from "react-router-dom";
import VanillaTilt from "vanilla-tilt";



function GameItem({ event,system }, props) {
    const {name, rating, cover, platforms, id} = event;
    let gameId = null;

    const [clicked, setClicked] = useState(false);
    const [titleId, setTitleId] = useState(null);
    const [ratings, setRatings] = useState(null);
    const [fetched, setFetch] = useState(false);
    const [theRating, setTheRating] = useState(null);
    let finalRating = null;
    let endRating = null;

    VanillaTilt.init(document.querySelectorAll(".vTilt"), {
        max: 25,
        speed: 400,
    });

    //new area start
    useEffect(() => {
        if(event && fetched === false) {
            fetch('api/rating/'+id, {
                method: 'GET',
                headers: {"Content-Type": "application/json"},
            }).then(res => res.json())
                .then(ratings => {
                    setRatings(ratings);
                });
            if(ratings !== null){
                setFetch(true);
                for(let i =0;i<ratings.length;i++){
                    finalRating+=ratings[i].rating;
                }
                endRating = (rating + finalRating)/(ratings.length+1);
                setTheRating(endRating);
            }
        }
    });


    //new area end

    function clickButton() {
        gameId = id;
        setTitleId(gameId);
    }

    let address = null;
    if(system === undefined){
        address = "system/"+id;
    }
    else{
        address = system+"/"+id;
    }

    //set the image id
    let imageId = null;
    if(!cover){
        imageId = 'co2f0t';
    }
    else if(cover){
        imageId = cover.image_id;
    }

    if(clicked===false && theRating !== null) {

        return (
            <div className="popTitle h-100">
                <div className="card bg-dark text-white h-100">
                    <div className="imgContainer vTilt">
                        <Link to={`/game/${address}`} onClick={clickButton} aria-current="page">
                            <div style = {{ backgroundImage: `url("https://images.igdb.com/igdb/image/upload/t_cover_big/${imageId}.jpg")` }}
                                 className="card-img-top img-fluid gameImg"
                            />
                        </Link>
                        <h5><span className="badge bg-success ratingBadge">{Math.round(theRating)}</span></h5>
                    </div>
                    <div className="card-body d-flex flex-column">
                        <h5 className="card-title cardInfoTitle">{name}</h5>
                        {/*<p className="card-text mt-auto">Rating: {Math.round(rating)}</p>*/}
                        <p className="card-text mt-auto cardInfo">Platform: {platforms[0].name}</p>
                        <Link className="btn btn-secondary textGlow mt-auto detailsButton" to={`/game/${address}`} aria-current="page"
                                onClick={clickButton}>Details
                        </Link>
                    </div>
                </div>
            </div>


        );
    }
    if(clicked===false && theRating === null) {

        return (
            <div className="popTitle h-100">
                <div className="card bg-dark text-white h-100">
                    <div className="imgContainer vTilt">
                        <Link to={`/game/${address}`} onClick={clickButton} aria-current="page">
                            <div style = {{ backgroundImage: `url("https://images.igdb.com/igdb/image/upload/t_cover_big/${imageId}.jpg")` }}
                                 className="card-img-top img-fluid gameImg"
                            />
                        </Link>
                    </div>
                    <div className="card-body d-flex flex-column">
                        <h5 className="card-title cardInfoTitle">{name}</h5>
                        {/*<p className="card-text mt-auto">Rating: {Math.round(rating)}</p>*/}
                        <p className="card-text mt-auto cardInfo">Platform: {platforms[0].name}</p>
                        <Link className="btn btn-secondary textGlow mt-auto detailsButton" to={`/game/${address}`}  aria-current="page"
                                onClick={clickButton}>Details
                        </Link>
                    </div>
                </div>
            </div>


        );
    }
}
export default withRouter(GameItem);