import React from 'react';
import Navbar from '../components/navbar';
import PopularTitles from '../components/populartitles';

export default function Playstation(props){

    return(
        <>
            <div className="xboxBackground" />
            <Navbar system="xbox" title1="POPULAR TITLES" platform1='"fields name,rating,cover.image_id,platforms.name; limit 6; where rating > 75 & platforms = 49 & genres = (5,10);"'
                    title2="TOP RATED TITLES" platform2='"fields name,rating,cover.image_id,platforms.name; limit 6; where rating > 0 & platforms = (11,12) & involved_companies.company = 620;"'
                    title3="MORE..." platform3='"fields name,rating,cover.image_id,platforms.name; limit 6; where rating > 60 & platforms = 49 & genres = (5,10);"' />
            {/*<PopularTitles title="POPULAR TITLES" platform='"fields name,rating,cover.image_id,platforms.name; limit 6; where rating > 75 & platforms = 49 & genres = (5,10);"' />*/}
            {/*<PopularTitles title="TOP-RATED TITLES" platform='"fields name,rating,cover.image_id,platforms.name; limit 6; where rating > 0 & platforms = (11,12) & involved_companies.company = 620;"' />*/}
            {/*<PopularTitles title="MORE..." platform='"fields name,rating,cover.image_id,platforms.name; limit 6; where rating > 60 & platforms = 49 & genres = (5,10);"' />*/}
        </>
    );
}