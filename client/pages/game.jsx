import React, { useState } from 'react';
import Carousel from "../components/carousel";

function CommentItem({ event }) {
  const { name, commentBody } = event;

  return (
        <div className="mx-0 card bg-dark aContainer mb-2">
            <div className="row my-1">
                <div className="col-sm-10 mx-0">
                    <div className="card bg-dark">
                        <div className="card-heaader text-white my-3">
                        </div>
                        <div className="card-body bg-white">
                            <h5 className="card-title">{name}</h5>
                            <p className="card-text">{commentBody}</p>
                        </div>
                        <a href="#" className="btn btn-primary w-25">Submit</a>
                    </div>
                </div>
                <div className="col-sm-2 mx-0 my-auto">
                    <div className="card">
                        <div className="card-body text-center">
                            <h1><span className="badge bg-secondary">0</span></h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  );
}

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
            <div className="card bg-dark text-white my-2 mx-0 gCard" style={{padding: "2vh"}}>
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
                            <div className="gameDetails mt-4" style={{fontsize: "2vh"}}>
                                <div className="text-primary"> Developer:</div>
                                <div> {company}<br/></div>
                                <div className="text-primary"> Genre(s):</div>
                                <div>{genres[0].name}<br/></div>
                                <div className="text-primary">(Age)Rating:</div>
                                <div>{ageRating}</div>
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
        <div className="card bg-dark text-white my-2 mx-0 gCard" style={{padding: "2vh"}}>
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
                <div className="carousel-item active">
                    <img src={`https://images.igdb.com/igdb/image/upload/t_1080p/${screenshots[0].image_id}.jpg`}
                         className="d-block w-100" alt="image 1"/>
                </div>
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
        <div className="card bg-dark text-white my-2 mx-0 gCard" style={{padding: "2vh"}}>
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
    );
}



}



export default class Game extends React.Component {
  constructor(props) {
    super(props);

    this.state = {comments: null}, {game:null};
  }

  componentDidMount() {
    fetch('/api/comments')
      .then(res => res.json())
      .then(comments => {
        this.setState({ comments });
      });

       const title = this.props.titleId;
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
    if (!comments) {
      return (
          <div className="mx-0">
              <div className="text-center">
                  <div className="spinner-border text-light" role="status">
                      <span className="visually-hidden">Loading...</span>
                  </div>
              </div>
          </div>
    )
    }

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
                      <ul className="list-group list-group-flush mx-0">
                          {
                              comments.length
                                ? comments.map((event) => <CommentItem key={event.commentId} event={event} />)
                                : <li className="list-group-item">No Comments</li>
                          }
                      </ul>
          </div>
    );
  }
}
