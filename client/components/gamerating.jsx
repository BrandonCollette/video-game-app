import React from 'react';

export default class GameRating extends React.Component{
    constructor(props){
        super(props);

        this.state = ({rating:0,up:false,down:false});

        this.rateUp = this.rateUp.bind(this);
        this.rateDown = this.rateDown.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.averageRating = this.averageRating.bind(this);

    }
    handleSubmit(){
        fetch('/api/rating',{
            method:'POST',
            headers: { "Content-Type": "application/json" },
            body: '{"content": ['+`"${JSON.stringify(this.state.rating)}"`+','+`"${JSON.stringify(this.props.gameId)}"`+']}',
        }).then(res => res.json())
            .then(ratings =>{});


        if(this.state.rating >= this.props.displayRating){
            this.setState({up:true});
        }
        else if(this.state.rating < this.props.displayRating){
            this.setState({down:true});
        }
        // const updatedRating = (this.state.rating + this.props.finRating)/2;
        // $('.theRating').text(Math.round(updatedRating));
        this.averageRating(this.state.rating);
    }
    averageRating(newRating){
        const ratingsArr = this.props.finRating;
        ratingsArr.push(newRating);
        let ratingSum = 0;
        for(let i = 0;i<ratingsArr.length;i++){
            ratingSum+=ratingsArr[i];
        }
        const returnRating = ratingSum/ratingsArr.length;
        $('.theRating').text(Math.round(returnRating));
    }
    rateUp(){
        if(this.state.rating === 100){
            this.setState({rating:100});
        }
        else {
            this.setState({rating: this.state.rating += 10});
        }
    }
    rateDown(){
        if(this.state.rating === 0){
            this.setState({rating:0});
        }
        else {
            this.setState({rating: this.state.rating -= 10});
        }
    }
    render(){
        if(this.state.up === true){
            return(
                <>
                    <div className="sortContainer" >
                        <i className="fas fa-sort-up" />
                    </div>
                    <div className="mt-3 text-center" style={{fontsize: "2vh"}}>RATE THIS GAME</div>
                    <h1><span className="badge bg-secondary">{this.state.rating}</span></h1>
                </>
            )
        }
        else if(this.state.down === true){
            return(
                <>
                    <div className="sortContainer" >
                        <i className="fas fa-sort-down" />
                    </div>
                    <div className="mt-3 text-center" style={{fontsize: "2vh"}}>RATE THIS GAME</div>
                    <h1><span className="badge bg-secondary">{this.state.rating}</span></h1>
                </>
            )
        }
        else {
            return (
                <>
                    <div className="sortContainer">
                    </div>
                    <div className="mt-3 text-center" style={{fontsize: "2vh"}}>RATE THIS GAME</div>
                    <h1><span className="badge bg-secondary">{this.state.rating}</span></h1>
                    <div className="text-center gone">
                        <i className="fas fa-arrow-alt-circle-left symGlow me-1" style={{fontsize: "2vh"}}
                           onClick={this.rateDown}/>
                        <i className="fas fa-arrow-alt-circle-right symGlow ms-1" style={{fontsize: "2vh"}}
                           onClick={this.rateUp}/>
                    </div>
                    <button className="btn btn-primary w-25 mt-1 gone" type="submit" value='submit'
                            onClick={this.handleSubmit}>Rate
                    </button>
                </>
            )
        }
    }

}