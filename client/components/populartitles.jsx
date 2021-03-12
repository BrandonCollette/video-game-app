import React from 'react';
import GameItem from '../components/gameitem';
// import VanillaTilt from "vanilla-tilt";




export default class PopularTitles extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            games: null,
        };
    }

    componentDidMount() {
        const platform = this.props.platform;
        fetch('/api/game',{
            method:'POST',
            headers: { "Content-Type": "application/json" },
            body:'{"content":'+`${platform}`+'}',
        })
            .then(res => res.json())
            .then(games => {
                this.setState({ games });
                console.log('popGames: ',this.state.games)
            })
    }


    render() {
        const { games } = this.state;


        if (!games) {
            return(
                <div className="popular position-absolute start-50">
                    <div className="text-center">
                        <div className="spinner-border text-light" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                </div>
            )
        }
    else if(games) {
            return (
                <div className="popular">
                    <div className="aContainer">
                        <div className="mt-5 toBeRemoved">
                            <h1 className="display-5 text-white">{this.props.title}</h1>
                            <hr className="text-white"/>
                        </div>
                        <div className="row">
                            {
                                games.length
                                    ? games.map((event, i) => <GameItem key={i} event={event}/>)
                                    : <li className="list-group-item">No games</li>
                            }
                        </div>
                    </div>
                </div>
            );
        }
    }
}

