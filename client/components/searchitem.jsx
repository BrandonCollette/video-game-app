import React from 'react';

export default function SearchItem({ event }) {
    const { name, cover,summary } = event;
    console.log('event: ',event);
    if(!cover){
        return(
            <div className="card w-100 bg-dark text-white my-1 px-0">
                <div className="card-body">
                    <img src="" className="rounded float-start img-fluid mt-1 ms-0 me-2 searchImg" alt="..." />
                    <h5 className="card-title c-title">{name}</h5>
                    <p className="card-text c-text">{summary}</p>
                    <a href="" className="btn btn-primary">Score</a>
                </div>
            </div>
        )
    }
    else {
        return (

            <div className="card w-100 bg-dark text-white my-1 px-0">
                <div className="card-body">
                    <img src={cover.url} className="rounded float-start img-fluid mt-1 ms-0 me-2 searchImg" alt="..."/>
                    <h5 className="card-title c-title">{name}</h5>
                    <p className="card-text c-text">{summary}</p>
                    <a href="" className="btn btn-primary">Score</a>
                </div>
            </div>

        );
    }
}