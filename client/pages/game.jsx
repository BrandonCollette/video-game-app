import React, { useState } from 'react';
import Carousel from "../components/carousel";
import PostComment from '../components/postcomment';
import GameRating from '../components/gamerating';
import Navbar from '../components/navbar';
import { Route, Link, withRouter, useParams } from 'react-router-dom';

function GameCard({ event, averageRating }) {
    const {id, name, rating, cover, platforms,summary,involved_companies,genres,age_ratings,screenshots,videos} = event;

    let allRatings = [];
    let displayRating = 0;
    if(averageRating){
        allRatings = averageRating;
        allRatings.push(rating);
    }
    for(let i=0;i<allRatings.length;i++){
        displayRating = displayRating+=allRatings[i];
    }
    const endRating = displayRating/allRatings.length;


    if(Number.isNaN(averageRating)){
        averageRating = rating;
    }
    const gameId = event.id;
    let ageRating = null;
    let company = "unknown";

    if(involved_companies){
        company = involved_companies[0].company.name;
    }
    let genre = "none";
    if(genres){
        genre = genres[0].name;
    }

    if(age_ratings) {
        switch (age_ratings[0].rating) {
            case 1:
                ageRating = "Three";
                break;
            case 2:
                ageRating = "Seven";
                break;
            case 3:
                ageRating = "Twelve";
                break;
            case 4:
                ageRating = "Sixteen";
                break;
            case 5:
                ageRating = "Eighteen";
                break;
            case 6:
                ageRating = "RP";
                break;
            case 7:
                ageRating = "EC";
                break;
            case 8:
                ageRating = "E";
                break;
            case 9:
                ageRating = "E10";
                break;
            case 10:
                ageRating = "T";
                break;
            case 11:
                ageRating = "M";
                break;
            case 12:
                ageRating = "AO";
                break;
        }
    }
    else{
        ageRating = "No Rating"
    }

    const [screenClicked, setPage] = useState("summary");

    function screenButton(){
        setPage("screenshots");
    }
    function summaryButton(){
        setPage("summary");
    }
    function trailerButton(){
        setPage("trailer");
    }


if(screenClicked === "summary") {
    return (
        <div className="entireCard">

            <div className="behindBackground" />

            <div className="gameBackground" >
                <img src={`https://images.igdb.com/igdb/image/upload/t_1080p/${screenshots[0].image_id}.jpg`} alt="image 1" />
            </div>

            <div className="card bg-dark text-white mb-2 mt-1 mx-0 gCard" style={{padding: "2vh"}}>
                <h1 className="display-5 text-white text-center">{name}</h1>
                <hr className="text-white"/>

                <div className="btn-group d-flex justify-content-center" role="group"
                     aria-label="Basic radio toggle button group">
                    <input type="radio" className="btn-check" name="btnradio" id="btnradio1" autoComplete="off"/>
                    <label className="btn btn-outline-primary buttonWidth" htmlFor="btnradio1" onClick={summaryButton}>SUMMARY</label>

                    <input type="radio" className="btn-check" name="btnradio" id="btnradio2" autoComplete="off"/>
                    <label className="btn btn-outline-primary buttonWidth" onClick={screenButton}
                           htmlFor="btnradio2">SCREENSHOTS</label>

                    <input type="radio" className="btn-check" name="btnradio" id="btnradio3"
                           autoComplete="off"/>
                    <label className="btn btn-outline-primary buttonWidth"
                           htmlFor="btnradio3" onClick={trailerButton}>TRAILER</label>
                </div>


                <div className="container text-white">
                    <div className="row">
                        <div className="col-sm">
                            <img src={`https://images.igdb.com/igdb/image/upload/t_cover_big/${cover.image_id}.jpg`}
                                 className="rounded float-start img-fluid w-100 mt-4" alt="..."/>
                        </div>
                        <div className="col-sm ">
                            <div className="mt-3">USER RATING:</div>
                            <h1><span className="badge bg-success m-1 theRating">{Math.round(endRating)}</span></h1>
                            <div className="sumPlat">
                                <div className="text-primary">
                                    Summary:
                                </div>
                                <div className="summaryText">
                                    {summary}
                                </div>
                                <div className="text-primary">
                                    Platform:
                                </div>
                                <div>
                                    {platforms[0].name}
                                </div>
                            </div>
                        </div>
                        <div className="col-sm text-center">

                            <GameRating gameId={gameId} finRating={allRatings} displayRating={endRating} />

                            <div className="gameDetailsContainer mt-4" style={{fontsize: "2vh"}}>

                                <div className="gameDetail mt-3">
                                    <div className="text-primary"> Developer:</div>
                                    <div> {company}<br/></div>
                                </div>

                                <div className="gameDetail mt-3">
                                    <div className="text-primary"> Genre(s):</div>
                                    <div>{genre}<br/></div>
                                </div>

                                <div className="gameDetail mt-3">
                                    <div className="text-primary">(Age)Rating:</div>
                                    <div>{ageRating}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>

    );
}
if(screenClicked==="screenshots"){
    return(
        <div>

            <div className="behindBackground" />

            <div className="gameBackground" >
                <img src={`https://images.igdb.com/igdb/image/upload/t_1080p/${screenshots[0].image_id}.jpg`} alt="image 1" />
            </div>

        <div className="card bg-dark text-white mb-2 mt-1 mx-0 gCard" style={{padding: "2vh"}}>
            {/*<i className="fas fa-arrow-left" />*/}
            <h1 className="display-5 text-white text-center">{name}</h1>
            <hr className="text-white"/>

            <div className="btn-group d-flex justify-content-center" role="group"
                 aria-label="Basic radio toggle button group">
                <input type="radio" className="btn-check" name="btnradio" id="btnradio1" autoComplete="off"/>
                <label className="btn btn-outline-primary buttonWidth" htmlFor="btnradio1" onClick={summaryButton}>SUMMARY</label>

                <input type="radio" className="btn-check" name="btnradio" id="btnradio2" autoComplete="off"/>
                <label className="btn btn-outline-primary buttonWidth" onClick={screenButton}
                       htmlFor="btnradio2">SCREENSHOTS</label>

                <input type="radio" className="btn-check" name="btnradio" id="btnradio3"
                       autoComplete="off"/>
                <label className="btn btn-outline-primary buttonWidth"
                       htmlFor="btnradio3" onClick={trailerButton}>TRAILER</label>
            </div>


        <div id="gameCaro" className="carousel slide mt-4" data-bs-ride="carousel">
            <div className="carousel-inner">

                <Carousel screenshots={screenshots} />

            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#gameCaro"
                    data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"/>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#gameCaro"
                    data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"/>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
        </div>
            </div>
            );

}
if(screenClicked==="trailer"){
    let vidSrc = "";
    if(!videos){
        vidSrc = "https://www.youtube.com/embed/erVJAAcGlgw";
    }
    else{
        vidSrc = "https://www.youtube.com/embed/"+videos[0].video_id;
    }
    return(
        <div>

            <div className="behindBackground" />

            <div className="gameBackground" >
                <img src={`https://images.igdb.com/igdb/image/upload/t_1080p/${screenshots[0].image_id}.jpg`} alt="image 1" />
            </div>

        <div className="card bg-dark text-white mb-2 mt-1 mx-0 gCard" style={{padding: "2vh"}}>
            {/*<i className="fas fa-arrow-left" />*/}
            <h1 className="display-5 text-white text-center">{name}</h1>
            <hr className="text-white"/>

            <div className="btn-group d-flex justify-content-center" role="group"
                 aria-label="Basic radio toggle button group">
                <input type="radio" className="btn-check" name="btnradio" id="btnradio1" autoComplete="off"/>
                <label className="btn btn-outline-primary buttonWidth" htmlFor="btnradio1" onClick={summaryButton}>SUMMARY</label>

                <input type="radio" className="btn-check" name="btnradio" id="btnradio2" autoComplete="off"/>
                <label className="btn btn-outline-primary buttonWidth" onClick={screenButton}
                       htmlFor="btnradio2">SCREENSHOTS</label>

                <input type="radio" className="btn-check" name="btnradio" id="btnradio3"
                       autoComplete="off"/>
                <label className="btn btn-outline-primary buttonWidth"
                       htmlFor="btnradio3" onClick={trailerButton}>TRAILER</label>
            </div>

            <div className="iframe-container">
            <iframe width="560" height="315" src={vidSrc} frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen />
            </div>

        </div>
        </div>
    );
}




}



export default class Game extends React.Component {
  constructor(props) {
    super(props);

    this.state = {comments: null, game:null, rating:null, path:window.location.pathname, parameters:this.props.match.params};

    this.averageRating = this.averageRating.bind(this);
    this.backButton = this.backButton.bind(this);
  }

  componentDidMount() {
      const title = this.state.parameters.userId;
      const background = this.props.match.params.game+"Background";
      $('.backgroundColor').addClass(background);
      // const titleStr = JSON.stringify(this.props.titleId);
      const titleStr = JSON.stringify(this.state.parameters.userId);

      const platform = '"fields name,rating,cover.image_id,platforms.name,summary,involved_companies.company.name,genres.name,age_ratings.rating,screenshots.image_id,videos.video_id; limit 1; where rating > 0 & id = '+title+';"';

      Promise.all([
          fetch('/api/game',{
              method:'POST',
              headers: { "Content-Type": "application/json" },
              body:'{"content":'+`${platform}`+'}',
          }).then(res => res.json()),
          fetch('/api/rating/'+title,{
                          method:'GET',
                          headers: { "Content-Type": "application/json" },
          }).then(res => res.json()),
          ])
          .then(allResponses => {
              const response1 = allResponses[0];
              const response2 = allResponses[1];
              this.setState({ game:response1});
              this.averageRating(response2);
              // this.props.history.push(`/${this.props.titleId}`);
          })


  }

  averageRating(ratings){
      let finalRating = [];
      ratings.map(score => finalRating.push(score.rating));
      // finalRating = finalRating/ratings.length;
      this.setState({rating:finalRating});
  }

  backButton(){
      history.back();
  }

  render()
  {
    const { comments } = this.state;
    const { game } = this.state;
      const title = this.props.titleId;
      const titleStr = this.state.parameters.userId;
      let paramGame = "";
      if(this.state.parameters.game === "system"){
          paramGame="defaultMobile";
      }
      else {
          paramGame = this.state.parameters.game;
      }

    return (
        <>
            <div className="backgroundColor" />
            <Navbar system={paramGame} />
            <div className="aContainer gameComp">
              <div className="mx-0 hideCard">
                          <ul className="list-group list-group-flush mx-0">
                              {
                                    game
                                      ? game.map((event,i) => {
                                            return(
                                              <div key={i}>
                                                  <i className="fas fa-arrow-left text-white backArrow" onClick={this.backButton} />
                                                  <GameCard event={event} averageRating={this.state.rating} />
                                              </div>
                                          )
                                        })
                                      :  <div className="mx-0">
                                            <div className="text-center">
                                                <div className="spinner-border text-light" role="status">
                                                    <span className="visually-hidden">Loading...</span>
                                                </div>
                                            </div>
                                        </div>
                              }
                          </ul>
                          <PostComment gameId={titleStr} title={titleStr} />
              </div>
            </div>
        </>
    );
   }
}
