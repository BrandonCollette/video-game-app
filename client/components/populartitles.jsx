import React from 'react';
import GameItem from '../components/gameitem';
// import VanillaTilt from "vanilla-tilt";




export default class PopularTitles extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            games: null,
        };

        this.windowSize = this.windowSize.bind(this);
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
                this.windowSize();
            });
    }
    windowSize(){
        if($(window).width() <= 576){
            $('.screenStay').removeClass('w-25');
        }
        else if ($(window).width() < 768) {
            // do something for small screens
            $('.screenStay').addClass('w-25');
        } else if ($(window).width() >= 768 && $(window).width() <= 992) {
            // do something for medium screens
            $('.screenRemove').addClass('hidden');
            $('.screenStay').addClass('w-25');
        } else if ($(window).width() > 992 && $(window).width() <= 1200) {
            // do something for big screens
        } else {
            // do something for huge screens
            $('.screenRemove').removeClass('hidden');
            $('.screenStay').removeClass('w-25');
        }

        $(window).resize(function() {
            if($(window).width() <= 576){
                $('.screenStay').removeClass('w-25');
            }
            else if ($(window).width() < 768) {
                // do something for small screens
                $('.screenStay').addClass('w-25');
            } else if ($(window).width() >= 768 && $(window).width() <= 992) {
                // do something for medium screens
                $('.screenRemove').addClass('hidden');
                $('.screenStay').addClass('w-25');
            } else if ($(window).width() > 992 && $(window).width() <= 1200) {
                // do something for big screens
            } else {
                // do something for huge screens
                $('.screenRemove').removeClass('hidden');
                $('.screenStay').removeClass('w-25');
            }
        });
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
                        <div className="container">
                        <div className="row row-flex">
                            {
                                games.length
                                    ? games.map((event, i) => {
                                        let cls = (i === 4 || i === 5) ? 'screenRemove col-sm-2 px-0 mb-3 toBeRemoved vh-50' : 'screenStay col-sm-2 px-0 mb-3 toBeRemoved vh-50';
                                        return(
                                            <div className={ cls } key={i} >
                                                <GameItem key={i} event={event} system={this.props.system}/>
                                            </div>
                                        )
                                    })
                                    : <li className="list-group-item">No games</li>
                            }
                        </div>
                        </div>
                    </div>
                </div>
            );
        }
    }
}

