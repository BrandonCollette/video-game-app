import React from 'react';


function CommentItem({ event, ratings, title }) {
    const { name, commentBody, commentId, gameId } = event;

     function handleDelete(){
        const deleteId = commentId;
        fetch('/api/comments/'+deleteId,{
            method:'DELETE'
        }).then(() => {});
    }

    return (
        <div className="mx-0 card bg-dark aContainer mb-2 commentItem">
            <div className="row my-1">
                <div className="col-sm-12 mx-0">
                    <div className="card bg-dark mx-2">
                        <div className="card-header text-white">
                            <h5 className="card-title">{name}</h5>
                        </div>

                        <div className="card-body bg-white">
                            <p className="card-text">{commentBody}</p>
                        </div>
                    </div>
                </div>
                    <i className="fas fa-times text-white position-absolute top-0 end-0 m-1" onClick={handleDelete} />
            </div>
        </div>
    );
}

let commentId = null;

export default class PostComment extends React.Component{
    constructor(props){
        super(props);

        this.state = {name:'',commentBody:'',comments:null,newComment:0,rating:'',ratings:null,commentId:null,gameId:null};

        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleCommentChange = this.handleCommentChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleRatingChange = this.handleRatingChange.bind(this);
        this.reloadComments = this.reloadComments.bind(this);


    }
    //loads comments
    componentDidMount() {
        const titleStr = this.props.title;

        Promise.all([
            fetch('/api/comments/'+titleStr,{
                     method:'GET',
                     headers: { "Content-Type": "application/json" },
            }).then(res => res.json()),

        ]).then(allResponses => {
            const response1 = allResponses[0];
            // const response2 = allResponses[1];
            this.setState({comments:response1});
        });

        }


    reloadComments(){
        const titleStr = this.props.title;

        Promise.all([
            fetch('/api/comments/'+titleStr,{
                method:'GET',
                headers: { "Content-Type": "application/json" },
            }).then(res => res.json()),
        ]).then(allResponses => {
            const response1 = allResponses[0];
            // const response2 = allResponses[1];
            this.setState({comments:response1});
            commentId = response1[response1.length-1].commentId;
        });
    }
    handleNameChange(event){
        this.setState({name:event.target.value});
    }
    handleCommentChange(event){
        this.setState({commentBody:event.target.value});
        }
    handleRatingChange(event){
        this.setState({rating:event.target.value});
    }
    handleSubmit(event){
        event.preventDefault();
        const titleStr = this.props.title;
        const rating = this.state.rating;
        const comment = this.state.commentBody;
        const name = this.state.name;
        const gameId = this.props.gameId;
        const gameStr = JSON.stringify(gameId);
        this.setState({ratings:this.state.rating,gameId:gameId});
        if(name !== "" && comment !== "") {

            Promise.all([
                fetch('/api/comments',{
                    method:'POST',
                    headers: { "Content-Type": "application/json" },
                    body: '{"content":[' + `"${comment}"` + ',' + `"${name}"` + ',' + `"${gameId}"` + ']}',
                }).then(res => res.json()),
            ]).then(allResponses => {
                const response1 = allResponses[0];
                this.reloadComments();
                this.setState({newComment: this.state.newComment += 1});

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
                    <div className="col-sm-12 mx-0">
                        <div className="card bg-dark mx-2 comments">
                            <div className="card-heaader text-white my-3">
                            </div>
                            <form className="d-flex commentForm" onSubmit={this.handleSubmit}>
                                <input className="form-control me-2 col-sm-* input-lg nameInput position-absolute top-0 start-0"
                                       placeholder="Name" aria-label="Search" type='text'
                                       value={this.state.name}
                                       onChange={this.handleNameChange}/>
                                <input className="form-control me-2 col-sm-* input-lg comInput"
                                       placeholder="Leave a Comment" aria-label="Search" type='text'
                                       value={this.state.commentBody}
                                       onChange={this.handleCommentChange}/>
                                <button className="btn btn-primary w-25 subButton" type="submit" value='submit'>Submit</button>


                            </form>
                        </div>
                    </div>
                </div>
            </div>
                <ul className="list-group list-group-flush mx-0">
                    {
                        comments.length
                            ? comments.map((event) => {
                                return(
                                <CommentItem key={event.commentId} event={event} ratings={this.state.ratings} title={this.props.title}  />
                                )
                            })
                            : <li className="list-group-item mb-3">No Comments</li>
                    }
                </ul>
                </>
        );
    }
}