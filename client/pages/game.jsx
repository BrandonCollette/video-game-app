import React from 'react';
import Navbar from '../components/navbar';

function CommentItem({ event }) {
  const { name, commentBody } = event;

  return (
        <div className="mx-0 card bg-dark aContainer">
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

export default class Game extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      comments: null
    };
  }

  componentDidMount() {
    fetch('/api/comments')
      .then(res => res.json())
      .then(comments => {
        this.setState({ comments });
      });
  }

  render() {
    const { comments } = this.state;
    if (!comments) {
      return (
          <div>
              <Navbar />
              <p className="text-center">LOADING COMMENTS...</p>;
          </div>
    )
    }

    return (
          <div>
              <Navbar />
              <div className="container">
                  <h1 className="text-center">comments</h1>

                  <ul className="list-group list-group-flush mx-0">
                      {
                          comments.length
                            ? comments.map(event => <CommentItem key={event.commentId} event={event} />)
                            : <li className="list-group-item">No Comments</li>
                      }
                  </ul>
              </div>
          </div>
    );
  }
}
