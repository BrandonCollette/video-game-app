import React from 'react';
import Navbar from '../components/navbar';
import SearchItem from '../components/searchitem';


//  function SearchItem({ event }) {
//     const { name, cover,summary } = event;
//     console.log('event: ',event);
//     if(!cover){
//         return(
//             <div className="card w-100 bg-dark text-white my-1 px-0">
//                 <div className="card-body">
//                     <img src="" className="rounded float-start img-fluid mt-1 ms-0 me-2 searchImg" alt="..." />
//                     <h5 className="card-title c-title">{name}</h5>
//                     <p className="card-text c-text">{summary}</p>
//                     <a href="" className="btn btn-primary">Score</a>
//                 </div>
//             </div>
//         )
//     }
//     else {
//         return (
//
//             <div className="card w-100 bg-dark text-white my-1 px-0">
//                 <div className="card-body">
//                     <img src={cover.url} className="rounded float-start img-fluid mt-1 ms-0 me-2 searchImg" alt="..."/>
//                     <h5 className="card-title c-title">{name}</h5>
//                     <p className="card-text c-text">{summary}</p>
//                     <a href="" className="btn btn-primary">Score</a>
//                 </div>
//             </div>
//
//         );
//     }
// }


export default class Search extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            results: this.props.results,
        };
        console.log('searchARes: ',this.state.results);
    }

    // onSearchSubmit() {
    //     console.log('it worked: ',this.props.value);
    //     fetch('/api/search',{body: this.props.value})
    //         .then(res => res.json())
    //         .then(results => {
    //             console.log('sbodyvalue: ',this.props.value);
    //             this.setState({ results });
    //         })
    // };

    render() {
        const { results } = this.state;
        if (!results) {
            return (
                <div>
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
                {/*<Navbar />*/}
                <div className="aContainer">
                    <div className="my-5">
                        <h5 className="text-white">TOP RESULTS FOR {this.props.search.toUpperCase()}</h5>
                        <hr className="text-white" />
                    </div>
                    <div className="row">
                        {
                            results.length
                                ? results.map((event,i) => <SearchItem key={i} event={event} />)
                                : <li className="list-group-item">No Results</li>
                        }
                    </div>
                </div>
            </div>
        );
    }






};