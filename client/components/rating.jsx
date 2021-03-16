import React from 'react';

export default class rating extends React.Component{
    constructor(props){
        super(props);

        this.state = {ratingId:this.props.ratingId, gameId:this.props.gameId, ratings:null};
    }
    componentDidMount() {
        // fetch('api/rating/'+this.state.ratingId+'/'+this.state.gameId, {
        //         method:'GET',
        //         headers: { "Content-Type": "application/json" },
        //     })
        //         .then(res => res.json())
        //         .then(ratings => {
        //             this.setState({ ratings });
        //             console.log('ratRatings: ',this.state.ratings);
        //         });
        this.setState({ratings:this.props.ratings});
        // console.log('raId: ',this.state.ratings);
    }

    render(){
        if(this.state.ratings === null){
            return(
                <div className="card-body text-center">
                    <h1><span className="badge bg-secondary">No rating</span></h1>
                </div>
            )
        }
        else {
            const { ratings } = this.state.ratings;
            return (
                <div className="card-body text-center">
                    <h1><span className="badge bg-secondary">{ ratings }</span></h1>
                </div>
            )
        }
    }
}