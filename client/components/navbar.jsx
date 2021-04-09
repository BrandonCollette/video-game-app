import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Search from '../pages/search';
import PopularTitles from '../components/populartitles';
// import Game from '../pages/game';

class Navbar extends React.Component{
    constructor(props) {
        super(props);


        this.state = ({value:''}, {searchResults:null}, {search:''}, {parameters:this.props.match.params},{address:null},{system:null},{mobile:null});

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.defineUrl = this.defineUrl.bind(this);
        this.handleKey = this.handleKey.bind(this);
    }


     async handleChange(event) {
        await this.setState({value:event.target.value});
        this.defineUrl();
    }

    defineUrl(){
        if(this.props.system === undefined){
            this.setState({address:"system/"+this.state.value});
        }
        else{
            this.setState({address:this.props.system+"/"+this.state.value});
        }
    }
    componentDidMount(){
        if(this.props.system === undefined) {
            this.setState({system: "defaultMobile",mobile:"defaultMobile"});
        }
        else if(this.props.system === "defaultMobile"){
            this.setState({mobile:"defaultMobile"})
        }
        else{
            const newSystem= this.props.system+"Mobile";
            this.setState({system: this.props.system,mobile:newSystem});
        }
        if(this.props.match.params.system) {
            const background = this.props.match.params.system+"Background";
            $('.colorBackground').addClass(background);
            this.setState({system:this.props.match.params.system});
            this.setState({search:this.props.match.params.search});
            const search = this.props.match.params.search;
            // this.props.onSubmit(this.state.value);
            fetch('/api/search', {
                method:'POST',
                headers: { "Content-Type": "application/json" },
                body:'{"content":'+`"${search}"`+'}',
            })
                .then(res => res.json())
                .then(results => {
                    this.setState({searchResults:results});
                    $('.gameComp').addClass('hidden');
                    // this.setState({value:''});
                });
            this.setState({searchResults:null});
            // $('.navComp').addClass('hidden');
        }
    }

    handleSubmit(event){
        event.preventDefault();
        // this.props.history.push(`/search/${this.state.value}`);
        // this.setState({search:this.state.value});
        // const search = this.state.value;
        // // this.props.onSubmit(this.state.value);
        //     fetch('/api/search', {
        //         method:'POST',
        //         headers: { "Content-Type": "application/json" },
        //         body:'{"content":'+`"${search}"`+'}',
        //     })
        //         .then(res => res.json())
        //         .then(results => {
        //             this.setState({searchResults:results});
        //             $('.gameComp').addClass('hidden');
        //             // this.setState({value:''});
        //         });
        // this.setState({searchResults:null});


        // const { history } = this.props;
        // console.log('ev: ',event.charCode);
        // if(event.charCode==13){
        //     history.push(`/search?q=${this.state.address}`);
        // }
    }

    handleKey(event){
        const { history } = this.props;
        if(event.charCode==13){
            history.push(`/search/${this.state.address}`);
        }
    }


    render() {
        const { searchResults } = this.state;
        if(!searchResults && this.props.title1 === undefined){
            return(
                <div className="gameNavBar">
                <div className="colorBackground" />
                <nav
                    className={`navbar navbar-expand-lg navbar-light bg-dark mb-5 sticky-top defNavbar ${this.state.system}`}>
                    <div className="container-fluid sticky-top">
                        <Link className="navbar-brand text-danger textGlow" to="/">GAMESCORE</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"/>
                        </button>

                        <div className={`collapse navbar-collapse collapseBackground ${this.state.mobile}`} id="navbarSupportedContent">
                            <ul className="navbar-nav  mb-2 mb-lg-0">
                                <li className="nav-item mx-5">
                                    <Link className="nav-link active text-white navTitle" aria-current="page" to="/xbox">Xbox
                                        One</Link>
                                </li>

                                <li className="nav-item mx-5">
                                    <Link className="nav-link active text-white navTitle" aria-current="page"
                                          to="/playstation">Playstation
                                        4</Link>
                                </li>

                                <li className="nav-item mx-5">
                                    <Link className="nav-link active text-white navTitle" aria-current="page" to="/switch">Nintendo
                                        Switch</Link>
                                </li>

                                <li className="nav-item mx-5">
                                    <Link className="nav-link active text-white navTitle" aria-current="page"
                                          to="/pc">PC</Link>
                                </li>

                            </ul>
                            <form className="d-flex" onSubmit={this.handleSubmit}>
                                <input className="form-control me-2 col-sm-* input-lg bigInput"
                                       placeholder="Search" aria-label="Search" type='text'
                                       onKeyPress={event => this.handleKey(event)}
                                       value={this.state.value}
                                       onChange={this.handleChange}/>
                                {/*<Link className="btn btn-outline-success" type="submit" value='submit' to="/search" results={searchResults} search={this.state.value} >Search</Link>*/}

                                    <Link className="btn btn-outline-success searchButton" type="submit" value='submit' results={searchResults} search={this.state.value}
                                            to={`/search/${this.state.address}`}>Search
                                    </Link>

                            </form>
                        </div>
                    </div>
                </nav>
                </div>
            )
        }
        if(!searchResults) {
            return (
                <div className="gameNavBar">
                <div className="colorBackground" />
                    <nav
                        className={`navbar navbar-expand-lg navbar-light bg-dark mb-5 sticky-top defNavbar ${this.state.system}`}>
                        <div className="container-fluid sticky-top">
                            <Link className="navbar-brand text-danger textGlow" to="/">GAMESCORE</Link>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                    aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"/>
                            </button>

                            <div className={`collapse navbar-collapse collapseBackground ${this.state.mobile}`} id="navbarSupportedContent">
                                <ul className="navbar-nav  mb-2 mb-lg-0">
                                    <li className="nav-item mx-5">
                                        <Link className="nav-link active text-white navTitle" aria-current="page" to="/xbox">Xbox
                                            One</Link>
                                    </li>

                                    <li className="nav-item mx-5">
                                        <Link className="nav-link active text-white navTitle" aria-current="page"
                                              to="/playstation">Playstation
                                            4</Link>
                                    </li>

                                    <li className="nav-item mx-5">
                                        <Link className="nav-link active text-white navTitle" aria-current="page" to="/switch">Nintendo
                                            Switch</Link>
                                    </li>

                                    <li className="nav-item mx-5">
                                        <Link className="nav-link active text-white navTitle" aria-current="page"
                                              to="/pc">PC</Link>
                                    </li>

                                </ul>
                                <form className="d-flex" onSubmit={this.handleSubmit}>
                                    <input className="form-control me-2 col-sm-* input-lg bigInput"
                                           placeholder="Search" aria-label="Search" type='text'
                                           onKeyPress={event => this.handleKey(event)}
                                           value={this.state.value}
                                           onChange={this.handleChange}/>
                                    {/*<Link className="btn btn-outline-success" type="submit" value='submit' to="/search" results={searchResults} search={this.state.value} >Search</Link>*/}
                                    <Link className="btn btn-outline-success searchButton" type="submit" value='submit' results={searchResults} search={this.state.value}
                                            to={`/search/${this.state.address}`}>Search
                                    </Link>
                                </form>
                            </div>
                        </div>
                    </nav>
                    <PopularTitles title={this.props.title1} platform={this.props.platform1} system={this.props.system} />
                    <PopularTitles title={this.props.title2} platform={this.props.platform2} system={this.props.system} />
                    <PopularTitles title={this.props.title3} platform={this.props.platform3} system={this.props.system} />
                </div>
            );
        }
    else if(searchResults){
        return(
            <div className="gameNavBar">
            <div className="colorBackground" />
                <nav
                    className={`navbar navbar-expand-lg navbar-light bg-dark mb-5 sticky-top defNavbar ${this.state.system}`}>
                    <div className="container-fluid sticky-top">
                        <Link className="navbar-brand text-danger textGlow" to="/">GAMESCORE</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"/>
                        </button>

                        <div className={`collapse navbar-collapse collapseBackground ${this.state.mobile}`} id="navbarSupportedContent">
                            <ul className="navbar-nav  mb-2 mb-lg-0">
                                <li className="nav-item mx-5">
                                    <Link className="nav-link active text-white navTitle" aria-current="page" to="/xbox">Xbox
                                        One</Link>
                                </li>

                                <li className="nav-item mx-5">
                                    <Link className="nav-link active text-white navTitle" aria-current="page"
                                          to="/playstation">Playstation
                                        4</Link>
                                </li>

                                <li className="nav-item mx-5">
                                    <Link className="nav-link active text-white navTitle" aria-current="page" to="/switch">Nintendo
                                        Switch</Link>
                                </li>

                                <li className="nav-item mx-5">
                                    <Link className="nav-link active text-white navTitle" aria-current="page"
                                          to="/pc">PC</Link>
                                </li>

                            </ul>
                            <form className="d-flex" onSubmit={this.handleSubmit}>
                                <input className="form-control me-2 col-sm-* input-lg bigInput"
                                       placeholder="Search" aria-label="Search" type='text'
                                       onKeyPress={event => this.handleKey(event)}
                                       value={this.state.value}
                                       onChange={this.handleChange}/>
                                {/*<Link className="btn btn-outline-success" type="submit" value='submit' to="/search" results={searchResults} search={this.state.value} >Search</Link>*/}
                                <Link className="btn btn-outline-success" type="submit" value='submit' results={searchResults} search={this.state.value}
                                        to={`/search/${this.state.address}`}>Search
                                </Link>
                            </form>
                        </div>
                    </div>
                </nav>
            <Search results={searchResults} search={this.state.search} system={this.state.system} />
            </div>
        );
        }
    // else if(this.props.match.params.system){
    //     console.log('wow that is woww!');
    //     return(
    //         <nav
    //             className={`navbar navbar-expand-lg navbar-light bg-dark mb-5 sticky-top defNavbar ${this.props.system}`}>
    //             <div className="container-fluid sticky-top">
    //                 <Link className="navbar-brand text-danger textGlow" to="/">GAMESCORE</Link>
    //                 <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
    //                         data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
    //                         aria-expanded="false" aria-label="Toggle navigation">
    //                     <span className="navbar-toggler-icon"/>
    //                 </button>
    //
    //                 <div className="collapse navbar-collapse" id="navbarSupportedContent">
    //                     <ul className="navbar-nav  mb-2 mb-lg-0">
    //                         <li className="nav-item mx-5">
    //                             <Link className="nav-link active text-white navTitle" aria-current="page" to="/xbox">Xbox
    //                                 One</Link>
    //                         </li>
    //
    //                         <li className="nav-item mx-5">
    //                             <Link className="nav-link active text-white navTitle" aria-current="page"
    //                                   to="/playstation">Playstation
    //                                 4</Link>
    //                         </li>
    //
    //                         <li className="nav-item mx-5">
    //                             <Link className="nav-link active text-white navTitle" aria-current="page" to="/switch">Nintendo
    //                                 Switch</Link>
    //                         </li>
    //
    //                         <li className="nav-item mx-5">
    //                             <Link className="nav-link active text-white navTitle" aria-current="page"
    //                                   to="/pc">PC</Link>
    //                         </li>
    //
    //                     </ul>
    //                     <form className="d-flex" onSubmit={this.handleSubmit}>
    //                         <input className="form-control me-2 col-sm-* input-lg bigInput"
    //                                placeholder="Search" aria-label="Search" type='text'
    //                                value={this.state.value}
    //                                onChange={this.handleChange}/>
    //                         {/*<Link className="btn btn-outline-success" type="submit" value='submit' to="/search" results={searchResults} search={this.state.value} >Search</Link>*/}
    //
    //                         <button className="btn btn-outline-success searchButton" type="submit" value='submit' results={searchResults} search={this.state.value}
    //                               to={`/search/${this.state.address}`}>Search
    //                         </button>
    //
    //                     </form>
    //                 </div>
    //             </div>
    //         </nav>
    //     )
    //     }
    }
}
export default withRouter(Navbar);