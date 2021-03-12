import React from 'react';
import { Link } from 'react-router-dom';
import Search from '../pages/search';
import PopularTitles from '../components/populartitles';
// import Game from '../pages/game';

export default class Navbar extends React.Component{
    constructor(props) {
        super(props);


        this.state = ({value:''}, {searchResults:null},{search:''});

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        this.setState({value:event.target.value});
    }

    handleSubmit(event){
        event.preventDefault();
        this.setState({search:this.state.value});
        console.log('searchvalue: ',this.state.search);
        const search = this.state.value;
        // this.props.onSubmit(this.state.value);
            fetch('/api/search', {
                method:'POST',
                headers: { "Content-Type": "application/json" },
                body:'{"content":'+`"${search}"`+'}',
            })
                .then(res => res.json())
                .then(results => {
                    this.setState({searchResults:results});
                    // this.setState({value:''});
                });

        this.setState({searchResults:null});
    }


    render() {
        const { searchResults } = this.state;

        if(!searchResults) {
            return (
                <div>
                    <nav
                        className={`navbar navbar-expand-lg navbar-light bg-dark mb-5 sticky-top defNavbar ${this.props.system}`}>
                        <div className="container-fluid sticky-top">
                            <Link className="navbar-brand text-danger textGlow" to="/">GAMESCORE</Link>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                    aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"/>
                            </button>

                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav  mb-2 mb-lg-0">
                                    <li className="nav-item mx-5">
                                        <Link className="nav-link active text-white " aria-current="page" to="/xbox">Xbox
                                            One</Link>
                                    </li>

                                    <li className="nav-item mx-5">
                                        <Link className="nav-link active text-white" aria-current="page"
                                              to="/playstation">Playstation
                                            4</Link>
                                    </li>

                                    <li className="nav-item mx-5">
                                        <Link className="nav-link active text-white" aria-current="page" to="/switch">Nintendo
                                            Switch</Link>
                                    </li>

                                    <li className="nav-item mx-5">
                                        <Link className="nav-link active text-white" aria-current="page"
                                              to="/pc">PC</Link>
                                    </li>

                                </ul>
                                <form className="d-flex" onSubmit={this.handleSubmit}>
                                    <input className="form-control me-2 col-sm-* input-lg bigInput"
                                           placeholder="Search" aria-label="Search" type='text'
                                           value={this.state.value}
                                           onChange={this.handleChange}/>
                                    {/*<Link className="btn btn-outline-success" type="submit" value='submit' to="/search" results={searchResults} search={this.state.value} >Search</Link>*/}
                                    <button className="btn btn-outline-success" type="submit" value='submit' results={searchResults} search={this.state.value}
                                            to="/search">Search
                                    </button>
                                </form>
                            </div>
                        </div>
                    </nav>
                    <PopularTitles title={this.props.title1} platform={this.props.platform1} />
                    <PopularTitles title={this.props.title2} platform={this.props.platform2} />
                    <PopularTitles title={this.props.title3} platform={this.props.platform3} />
                </div>
            );
        }
    else if(searchResults){
        return(
            <div>
                <nav
                    className={`navbar navbar-expand-lg navbar-light bg-dark mb-5 sticky-top defNavbar ${this.props.system}`}>
                    <div className="container-fluid sticky-top">
                        <Link className="navbar-brand text-danger textGlow" to="/">GAMESCORE</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"/>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav  mb-2 mb-lg-0">
                                <li className="nav-item mx-5">
                                    <Link className="nav-link active text-white " aria-current="page" to="/xbox">Xbox
                                        One</Link>
                                </li>

                                <li className="nav-item mx-5">
                                    <Link className="nav-link active text-white" aria-current="page"
                                          to="/playstation">Playstation
                                        4</Link>
                                </li>

                                <li className="nav-item mx-5">
                                    <Link className="nav-link active text-white" aria-current="page" to="/switch">Nintendo
                                        Switch</Link>
                                </li>

                                <li className="nav-item mx-5">
                                    <Link className="nav-link active text-white" aria-current="page"
                                          to="/pc">PC</Link>
                                </li>

                            </ul>
                            <form className="d-flex" onSubmit={this.handleSubmit}>
                                <input className="form-control me-2 col-sm-* input-lg bigInput"
                                       placeholder="Search" aria-label="Search" type='text'
                                       value={this.state.value}
                                       onChange={this.handleChange}/>
                                {/*<Link className="btn btn-outline-success" type="submit" value='submit' to="/search" results={searchResults} search={this.state.value} >Search</Link>*/}
                                <button className="btn btn-outline-success" type="submit" value='submit' results={searchResults} search={this.state.value}
                                        to="/search">Search
                                </button>
                            </form>
                        </div>
                    </div>
                </nav>
            <Search results={searchResults} search={this.state.search}/>
            </div>
        );
        }
    }
}