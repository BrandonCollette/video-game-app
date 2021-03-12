import React from 'react';


function CommentItem({ event }) {
    const { name, commentBody } = event;

    return (
        <div className="mx-0 card bg-dark aContainer mb-2">
            <div className="row my-1">
                <div className="col-sm-10 mx-0">
                    <div className="card bg-dark">
                        <div className="card-heaader text-white">
                            <h5 className="card-title">{name}</h5>
                        </div>
                        <div className="card-body bg-white">
                            <p className="card-text">{commentBody}</p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-2 mx-0 my-auto">
                    <div className="card bg-dark">
                        <div className="card-body text-center">
                            <h1><span className="badge bg-secondary">0</span></h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}



export default class PostComment extends React.Component{
    constructor(props){
        super(props);

        this.state = {name:'',commentBody:'',comments:null,newComment:0};

        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleCommentChange = this.handleCommentChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }
    //loads comments
    componentDidMount() {
        const titleStr = this.props.title;
        fetch('/api/comments/'+titleStr,{
            method:'GET',
            headers: { "Content-Type": "application/json" },
        })
            .then(res => res.json())
            .then(comments => {
                this.setState({ comments });
                console.log('postbrah: ',this.state.comments);
            });
    }

    handleNameChange(event){
        this.setState({name:event.target.value});
    }
    handleCommentChange(event){
        this.setState({commentBody:event.target.value});
        }
    handleSubmit(event){
        event.preventDefault();
        const titleStr = this.props.title;
        const comment = this.state.commentBody;
        const name = this.state.name;
        const gameId = this.props.gameId;
        console.log('tname: ',name,'tcomm: ',comment);
        if(name !== "" && comment !== "") {
            fetch('/api/comments', {
                method: 'POST',
                headers: {"Content-Type": "application/json"},
                body: '{"content":[' + `"${comment}"` + ',' + `"${name}"` + ',' + `"${gameId}"` + ']}',
                // body:'{"comcontent":'+`"${comment}"`+'},{"namecontent":'+`"${name}"`+'},{"gameId":'+`"${gameId}"`+'}',
            })
                .then(res => res.json())
                .then(results => {
                    this.setState({newComment: this.state.newComment += 1});
                    console.log('newCommNUMBEr: ', this.state.newComment);
                    //reloads comments
                    fetch('/api/comments/'+titleStr,{
                        method:'GET',
                        headers: { "Content-Type": "application/json" },
                    })
                        .then(res => res.json())
                        .then(comments => {
                            this.setState({ comments });
                            console.log('postbrah: ',this.state.comments);
                        });
                });
        }
        else{
            console.log('comment not allowed');
        }
        }

    render(){
        const { comments } = this.state;
        if (!comments) {
            return (
                <></>
            )
        }

        return(
            <>
            <div className="mx-0 card bg-dark aContainer mb-2">
                <div className="row my-1">
                    <div className="col-sm-10 mx-0">
                        <div className="card bg-dark">
                            <div className="card-heaader text-white my-3">
                            </div>
                            <form className="d-flex" onSubmit={this.handleSubmit}>
                                <input className="form-control me-2 col-sm-* input-lg nameInput position-absolute top-0 start-0"
                                       placeholder="Name" aria-label="Search" type='text'
                                       value={this.state.name}
                                       onChange={this.handleNameChange}/>
                                <input className="form-control me-2 col-sm-* input-lg comInput"
                                       placeholder="Leave a Comment" aria-label="Search" type='text'
                                       value={this.state.commentBody}
                                       onChange={this.handleCommentChange}/>
                                {/*<Link className="btn btn-outline-success" type="submit" value='submit' to="/search" results={searchResults} search={this.state.value} >Search</Link>*/}
                                <button className="btn btn-primary w-25 subButton" type="submit" value='submit'>Submit</button>
                            </form>
                        </div>
                    </div>
                    <div className="col-sm-2 mx-0 my-auto">
                        <div className="card bg-dark">
                            <div className="card-body text-center">
                                <h1><span className="badge bg-secondary">0</span></h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                <ul className="list-group list-group-flush mx-0">
                    {
                        comments.length
                            ? comments.map((event) => <CommentItem key={event.commentId} event={event} />)
                            : <li className="list-group-item mb-3">No Comments</li>
                    }
                </ul>
                </>
        );
    }
}