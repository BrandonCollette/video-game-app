import React from 'react';
import { Route, Link } from 'react-router-dom';

export default class SearchButton extends React.Component{
    constructor(props){
        super(props);

        this.searchClick = this.searchClick.bind(this);

        this.state = {
            results:this.props.results,
        }
    }
    componentDidMount() {
        
    }
    searchClick(){
        // console.log('results: ',this.state.results);
        // history.pushState('/temp','/temp','/temp');
        // history.back();
    }
    render(){
        if(this.props.searchCheck===true){
            return(
                <Link className="btn btn-outline-info searchButton" type="submit" value='submit' results={this.state.results} search={this.props.search}
                    to={`${this.props.address}`}>Search
                </Link>
            )
        }
        else if(this.state.results && this.props.searchCheck===true){
            return(
                <Link className="btn btn-outline-info searchButton" type="submit" value='submit' onClick={this.searchClick} results={this.state.results} search={this.props.search}
                      to={`${this.props.address}`}>Search
                </Link>
            )
        }
        else{
            return(
                <button className="btn btn-outline-info searchButton" type="submit" value='submit'>Search</button>
            )
        }
    }
}