import React from 'react';
import Navbar from '../components/navbar';

function GameItem({ event }) {
    const { name, rating, cover } = event;
    return (

                <div className="col-sm-2 px-0">
                    <div className="card bg-dark text-white h-100">
                        <img src={cover.url} className="card-img-top img-fluid gameImg" alt="..."></img>
                            <div className="card-body">
                                <h5 className="card-title">{name}</h5>
                                <p className="card-text">Rating: {rating}</p>
                                <a href="" className="btn btn-secondary textGlow">Details</a>
                            </div>
                    </div>
                </div>

    );
}

export default class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            games: null,
        };
    }

    componentDidMount() {
        fetch('/api/game')
            .then(res => res.json())
            .then(games => {
                this.setState({ games });
            })
    }


    render() {
        const { games } = this.state;
        if (!games) {
            return (
                <div>
                    <Navbar />
                    <p className="text-center">
                        <div className="spinner-border text-light" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </p>;
                </div>
            )
        }

        return (
            <div>
                <Navbar />
                <div className="aContainer">
                <div className="mt-5">
                    <h1 className="display-5 text-white">POPULAR TITLES</h1>
                    <hr className="text-white"></hr>
                </div>
                    <div className="row">
                    {
                            games.length
                            ? games.map((event,i) => <GameItem key={i} event={event} />)
                            : <li className="list-group-item">No games</li>
                    }
                    </div>
                </div>
            </div>
        );
    }
}

