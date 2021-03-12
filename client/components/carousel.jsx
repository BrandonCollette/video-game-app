import React from 'react';

export default function Carousel({ screenshots }){
    console.log('sbirthday length: ',screenshots.length);

    if(!screenshots){
        return(
            <h1>No Screenshots Available</h1>
        )
    }
    else {
        return (
            <>
                {
                    screenshots.map((screenshot,index) => {
                            let cls = (index === 0) ? 'carousel-item active' : 'carousel-item';
                            return (
                                <div className={ cls } key={index}><img
                                    src={`https://images.igdb.com/igdb/image/upload/t_1080p/${screenshot.image_id}.jpg`}
                                    className="d-block w-100" alt="image 1"/></div>)
                        }
                    )

                }
            </>
        )
    }
}