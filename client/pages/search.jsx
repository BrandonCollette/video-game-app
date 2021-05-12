import React from 'react';
import { Route, Link } from 'react-router-dom';
import Navbar from '../components/navbar';
import SearchItem from '../components/searchitem';

export default class Search extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            results: this.props.results,
            searchVerify:this.props.verify
        };
    }

    componentDidMount(){

    }

    render() {
        const { results } = this.state;

        if (!results) {
            return (
                <div className="bruhSpin">
                    <p className="text-center">
                        <div className="spinner-border text-light" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </p>
                </div>
            )

        }

        else {

            $('.bruhSpin').addClass('hidden');

            return (
                <div>
                    <div className="aContainer">
                        <div className="my-5 toBeRemoved">
                            <h5 className="text-white">TOP RESULTS FOR {this.props.search.toUpperCase()}</h5>
                            <hr className="text-white"/>
                        </div>
                        <div className="row">
                            {
                                results.length
                                    ? results.map((event, i) => <SearchItem key={i} event={event}
                                                                            system={this.props.system}/>)
                                    : <li className="list-group-item">No Results</li>
                            }
                        </div>
                    </div>
                </div>
            );
        }
    }






};