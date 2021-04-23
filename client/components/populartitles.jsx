import React from 'react';
import GameItem from '../components/gameitem';




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
            $('.screen1Remove').addClass('hidden');
            $('.screenStay').addClass('w-100');
            $('.screenStay').removeClass('w-25');
        }
        else if ($(window).width() < 768) {
            // do something for small screens
            $('.screen23Remove').addClass('hidden');
            $('.lastTwo').addClass('w-50');

            $('.screen1Remove').removeClass('hidden');
            $('.screenStay').removeClass('w-100');
            $('.screenStay').addClass('w-25');
        }
        else if ($(window).width() >= 768 && $(window).width() <= 992) {
            // do something for medium screens
            $('.screenRemove').addClass('hidden');
            $('.lastFour').addClass('w-25');

            $('.screen23Remove').removeClass('hidden');
            $('.lastTwo').removeClass('w-50')
        }
        else if ($(window).width() > 992 && $(window).width() <= 1200) {
            // do something for big screens
        }
        else {
            // do something for huge screens
            $('.screenRemove').removeClass('hidden');
            $('.screenStay').removeClass('w-25');
            $('.lastFour').removeClass('w-25');
        }

        $(window).resize(function() {
            if($(window).width() <= 576){
                $('.screen1Remove').addClass('hidden');
                $('.screenStay').addClass('w-100');
                $('.screenStay').removeClass('w-25');
            }
            else if ($(window).width() < 768) {
                // do something for small screens
                $('.screen23Remove').addClass('hidden');
                $('.lastTwo').addClass('w-50');

                $('.screen1Remove').removeClass('hidden');
                $('.screenStay').removeClass('w-100');
                $('.screenStay').addClass('w-25');
            }
            else if ($(window).width() >= 768 && $(window).width() <= 992) {
                // do something for medium screens
                $('.screenRemove').addClass('hidden');
                $('.lastFour').addClass('w-25');

                $('.screen23Remove').removeClass('hidden');
                $('.lastTwo').removeClass('w-50')
            }
            else if ($(window).width() > 992 && $(window).width() <= 1200) {
                // do something for big screens
            }
            else {
                // do something for huge screens
                $('.screenRemove').removeClass('hidden');
                $('.screenStay').removeClass('w-25');
                $('.lastFour').removeClass('w-25');

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
                        <div className="row row-flex ">
                            {
                                games.length
                                    ? games.map((event, i) => {
                                        let cls = "";
                                        // let cls = (i === 4 || i === 5) ? 'screenRemove col-sm-2 px-0 mb-3 toBeRemoved vh-50 popCell' : 'screenStay col-sm-2 px-0 mb-3 toBeRemoved vh-50 popCell';
                                        if(i===1){
                                            cls='screen1Remove col-sm-2 px-0 mb-3 toBeRemoved vh-50 popCell lastTwo lastFour';
                                        }
                                        else if(i===2 || i===3){
                                            cls= 'screen23Remove col-sm-2 px-0 mb-3 toBeRemoved vh-50 popCell lastFour';
                                        }
                                        else if(i===4 || i===5){
                                            cls='screenRemove col-sm-2 px-0 mb-3 toBeRemoved vh-50 popCell ';
                                        }
                                        else{
                                            cls='screenStay col-sm-2 px-0 mb-3 toBeRemoved vh-50 popCell lastTwo lastFour'
                                        }
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

