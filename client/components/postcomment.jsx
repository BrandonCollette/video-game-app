import React from 'react';

export default class PostComment extends React.Component{
    constructor(props){
        super(props);

        this.state = {name:'',commentBody:'',newComment:0};

        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleCommentChange = this.handleCommentChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }
    handleNameChange(event){
        this.setState({name:event.target.value});
    }
    handleCommentChange(event){
        this.setState({commentBody:event.target.value});
    }
    handleSubmit(event){
        event.preventDefault();
        const comment = this.state.commentBody;
        const name = this.state.name;
        const gameId = this.props.gameId;
        fetch('/api/comments', {
            method:'POST',
            headers: { "Content-Type": "application/json" },
            body:'{"content":['+`"${comment}"`+','+`"${name}"`+','+`"${gameId}"`+']}',
            // body:'{"comcontent":'+`"${comment}"`+'},{"namecontent":'+`"${name}"`+'},{"gameId":'+`"${gameId}"`+'}',
        })
            .then(res => res.json())
            .then(results => {
                this.setState({newComment:this.state.newComment+=1});
                console.log('new: ',this.state.newComment);
            });
        console.log('commment this: ',name,comment);
    }
    render(){

        return(
            <div className="mx-0 card bg-dark aContainer mb-2">
                <div className="row my-1">
                    <div className="col-sm-10 mx-0">
                        <div className="card bg-dark">
                            <div className="card-heaader text-white my-3">
                            </div>
                            <form className="d-flex" onSubmit={this.handleSubmit}>
                                <input className="form-control me-2 col-sm-* input-lg bigInput"
                                       placeholder="Name" aria-label="Search" type='text'
                                       value={this.state.name}
                                       onChange={this.handleNameChange}/>
                                <input className="form-control me-2 col-sm-* input-lg bigInput"
                                       placeholder="Comment" aria-label="Search" type='text'
                                       value={this.state.commentBody}
                                       onChange={this.handleCommentChange}/>
                                {/*<Link className="btn btn-outline-success" type="submit" value='submit' to="/search" results={searchResults} search={this.state.value} >Search</Link>*/}
                                <button className="btn btn-primary w-25" type="submit" value='submit' search={this.state.value}
                                        to="/search">Submit
                                </button>
                            </form>
                            <div className="card-body bg-white">
                                {/*<h5 className="card-title">name</h5>*/}
                                {/*<p className="card-text">commentBody</p>*/}
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-2 mx-0 my-auto">
                        <div className="card">
                            <div className="card-body text-center">
                                <h1><span className="badge bg-secondary">0</span></h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}