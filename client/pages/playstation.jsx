import React from 'react';
import Navbar from '../components/navbar';
import PopularTitles from '../components/populartitles';

export default function Playstation(props){

    return(
        <>
            <div className="playstationBackground" />
            <Navbar system="playstation" title1="POPULAR TITLES" platform1='"fields name,rating,cover.image_id,platforms.name; limit 6; where rating > 80 & platforms = 48;"'
                    title2="SHOOTER GAMES" platform2='"fields name,rating,cover.image_id,platforms.name; limit 6; where rating > 0 & platforms = 48 & genres = (5,6);"'
                    title3="RACING GAMES" platform3='"fields name,rating,cover.image_id,platforms.name; limit 6; where rating > 0 & platforms = 48 & genres = (9,10);"' />
        {/*    <PopularTitles title="POPULAR TITLES" platform='"fields name,rating,cover.image_id,platforms.name; limit 6; where rating > 80 & platforms = 48;"' />*/}
        {/*    <PopularTitles title="SHOOTER GAMES" platform='"fields name,rating,cover.image_id,platforms.name; limit 6; where rating > 0 & platforms = 48 & genres = (5,6);"' />*/}
        {/*    <PopularTitles title="RACING GAMES" platform='"fields name,rating,cover.image_id,platforms.name; limit 6; where rating > 0 & platforms = 48 & genres = (9,10);"' />*/}
        </>
    );
}