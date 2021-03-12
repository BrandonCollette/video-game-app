import React, { useState } from 'react';
import Carousel from "../components/carousel";
import PostComment from '../components/postcomment';

function GameCard({ event }) {
    const { name, rating, cover, platforms,summary,involved_companies,genres,age_ratings,screenshots,videos} = event;
    console.log('gevent: ',event);
    let ageRating = null;
    let company = "unknown";

    if(involved_companies){
        company = involved_companies[0].company.name;
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
        console.log('screen button much wow');
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
        <div>

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
                        <div className="col-sm">
                            <div className="mt-3">USER RATING:</div>
                            <h1><span className="badge bg-success m-1">{Math.round(rating)}</span></h1>
                            <div className="text-primary">
                                Summary:
                            </div>
                            <div>
                                {summary}
                            </div>
                            <div className="text-primary">
                                Platform:
                            </div>
                            <div>
                                {platforms[0].name}
                            </div>
                        </div>
                        <div className="col-sm text-center">
                            <div className="mt-3" style={{fontsize: "2vh"}}>RATE THIS GAME</div>
                            <h1><span className="badge bg-secondary">0</span></h1>
                            <i className="fas fa-arrow-alt-circle-left symGlow" style={{fontsize: "2vh"}}/>
                            <i className="fas fa-arrow-alt-circle-right symGlow" style={{fontsize: "2vh"}}/>
                            <div className="gameDetailsContainer mt-5" style={{fontsize: "2vh"}}>

                                <div className="gameDetail mt-3">
                                    <div className="text-primary"> Developer:</div>
                                    <div> {company}<br/></div>
                                </div>

                                <div className="gameDetail mt-3">
                                    <div className="text-primary"> Genre(s):</div>
                                    <div>{genres[0].name}<br/></div>
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
                {/*<div className="carousel-item active">*/}
                {/*    <img src={`https://images.igdb.com/igdb/image/upload/t_1080p/${screenshots[0].image_id}.jpg`}*/}
                {/*         className="d-block w-100" alt="image 1"/>*/}
                {/*</div>*/}
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

    this.state = {comments: null}, {game:null};
  }

  componentDidMount() {
      const title = this.props.titleId;
      const titleStr = JSON.stringify(this.props.titleId);

       console.log('wtitle: ',title);
      const platform = '"fields name,rating,cover.image_id,platforms.name,summary,involved_companies.company.name,genres.name,age_ratings.rating,screenshots.image_id,videos.video_id; limit 1; where rating > 0 & id = '+title+';"';
      fetch('/api/game',{
          method:'POST',
          headers: { "Content-Type": "application/json" },
          body:'{"content":'+`${platform}`+'}',
      })
          .then(res => res.json())
          .then(game => {
              this.setState({ game });
              console.log('game:',game);
          })
  }

  render() {
    const { comments } = this.state;
    const { game } = this.state;
      const title = this.props.titleId;
      const titleStr = JSON.stringify(this.props.titleId);

    return (
          <div className="mx-0">
                      <ul className="list-group list-group-flush mx-0">
                          {
                                game
                                  ? game.map((event,i) => <GameCard key={i} event={event} />)
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
    );
  }
}
