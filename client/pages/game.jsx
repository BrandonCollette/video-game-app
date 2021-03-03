import React from 'react';
import GameNavbar from '../components/gamenavbar';

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
    const { name, rating, cover, platforms,summary} = event;
    console.log('event: ',event);
    return(
            <div className="card bg-dark text-white my-2 mx-0 gCard" style={{padding:"2vh"}}>
                <h1 className="display-5 text-white">{name}</h1>
                <hr className="text-white" />

                    <div className="btn-group d-flex justify-content-center" role="group"
                         aria-label="Basic radio toggle button group">
                        <input type="radio" className="btn-check" name="btnradio" id="btnradio1" autoComplete="off"/>
                            <label className="btn btn-outline-primary buttonWidth" htmlFor="btnradio1">SUMMARY</label>

                            <input type="radio" className="btn-check" name="btnradio" id="btnradio2" autoComplete="off" />
                                <label className="btn btn-outline-primary buttonWidth"
                                       htmlFor="btnradio2">COMMENTS</label>

                                <input type="radio" className="btn-check" name="btnradio" id="btnradio3"
                                       autoComplete="off" />
                                    <label className="btn btn-outline-primary buttonWidth"
                                           htmlFor="btnradio3">TRAILER</label>
                    </div>


                    <div className="container text-white">
                        <div className="row">
                            <div className="col-sm">
                                <img src={`https://images.igdb.com/igdb/image/upload/t_cover_big/${cover.image_id}.jpg`}
                                     className="rounded float-start img-fluid w-100 mt-4" alt="..." />
                            </div>
                            <div className="col-sm">
                                <div className="mt-3">USER RATING:</div>
                                <h1><span className="badge bg-success m-1">{Math.round(rating)}</span></h1>
                                <div  className="text-primary">
                                    Summary:
                                </div>
                                <div >
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
                                <div className="mt-3" style={{fontsize:"2vh"}}>RATE THIS GAME</div>
                                <h1><span className="badge bg-secondary">0</span></h1>
                                <i className="fas fa-arrow-alt-circle-left symGlow" style={{fontsize:"2vh"}} />
                                <i className="fas fa-arrow-alt-circle-right symGlow" style={{fontsize:"2vh"}} />
                                <div className="gameDetails mt-4" style={{fontsize:"2vh"}}>Developer: id Software<br />
                                    Genre(s): Shooter, First-Person<br />
                                    Rating: M</div>
                            </div>
                        </div>
                    </div>
            </div>

    );
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
      const platform = '"fields name,rating,cover.image_id,platforms.name,summary; limit 1; where rating > 0 & id = '+title+';"';
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
                                  : <li className="list-group-item">No Game</li>
                          }
                      </ul>
                      <h1 className="text-center">comments</h1>

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
