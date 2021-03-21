import React, { useState,useEffect } from 'react';
import {Link} from "react-router-dom";
import VanillaTilt from "vanilla-tilt";
import Game from "../pages/game";

export default function GameItem({ event }) {
    const {name, rating, cover, platforms, id} = event;
    let gameId = null;
    // this.state = {clicked: false},{titleId:null};
    //
    //  this.clicked = this.clicked.bind(this);
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
                console.log('endRting: ',endRating);
            }
        }
    });


    //new area end

    function clickButton() {
        console.log('thisId: ', id);
        gameId = id;
        // this.setState({clicked: true});
        // this.setState({titleId: id});
        setTitleId(gameId);
        setClicked(true);
    }

    if(clicked===false && theRating !== null) {

        return (
            <div className="col-sm-2 px-0 mb-3 toBeRemoved">
                <div className="card bg-dark text-white h-100">
                    <div className="imgContainer vTilt">
                        <img src={`https://images.igdb.com/igdb/image/upload/t_cover_big/${cover.image_id}.jpg`}
                             className="card-img-top img-fluid gameImg" alt="..." onClick={clickButton} />
                        <h5><span className="badge bg-success ratingBadge">{Math.round(theRating)}</span></h5>
                    </div>
                    <div className="card-body d-flex flex-column">
                        <h5 className="card-title">{name}</h5>
                        {/*<p className="card-text mt-auto">Rating: {Math.round(rating)}</p>*/}
                        <p className="card-text mt-auto">Platform: {platforms[0].name}</p>
                        <button href="" className="btn btn-secondary textGlow mt-auto" to="/game"
                                onClick={clickButton}>Details
                        </button>
                    </div>
                </div>
            </div>


        );
    }
    if(clicked===false && theRating === null) {

        return (
            <div className="col-sm-2 px-0 mb-3 toBeRemoved">
                <div className="card bg-dark text-white h-100">
                    <div className="imgContainer vTilt">
                        <img src={`https://images.igdb.com/igdb/image/upload/t_cover_big/${cover.image_id}.jpg`}
                             className="card-img-top img-fluid gameImg" alt="..." onClick={clickButton} />
                        {/*<h5><span className="badge bg-success ratingBadge">{Math.round(theRating)}</span></h5>*/}
                    </div>
                    <div className="card-body d-flex flex-column">
                        <h5 className="card-title">{name}</h5>
                        {/*<p className="card-text mt-auto">Rating: {Math.round(rating)}</p>*/}
                        <p className="card-text mt-auto">Platform: {platforms[0].name}</p>
                        <button href="" className="btn btn-secondary textGlow mt-auto" to="/game"
                                onClick={clickButton}>Details
                        </button>
                    </div>
                </div>
            </div>


        );
    }
    else{
        $(".toBeRemoved").addClass("hidden");
        return(
            <Game titleId={titleId} />
        );
    }


}