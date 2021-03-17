import React from 'react';

export default class GameRating extends React.Component{
    constructor(props){
        super(props);

        this.state = ({rating:0});

        this.rateUp = this.rateUp.bind(this);
        this.rateDown = this.rateDown.bind(this);

    }
    rateUp(){
        if(this.state.rating === 10){
            this.setState({rating:10});
        }
        else {
            this.setState({rating: this.state.rating += 1});
        }
    }
    rateDown(){
        if(this.state.rating === 0){
            this.setState({rating:0});
        }
        else {
            this.setState({rating: this.state.rating -= 1});
        }
    }
    render(){
        return(
            <>
                <div className="mt-3 text-center" style={{fontsize: "2vh"}}>RATE THIS GAME</div>
                <h1><span className="badge bg-secondary">{this.state.rating}</span></h1>
                <div className="text-center">
                    <i className="fas fa-arrow-alt-circle-left symGlow me-1" style={{fontsize: "2vh"}} onClick={this.rateDown} />
                    <i className="fas fa-arrow-alt-circle-right symGlow ms-1" style={{fontsize: "2vh"}} onClick={this.rateUp} />
                </div>
                <button className="btn btn-primary w-25 mt-1" type="submit" value='submit'>Rate</button>
            </>
        )
    }

}