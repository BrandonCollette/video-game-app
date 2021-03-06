import React from 'react';
import Navbar from '../components/navbar';
import PopularTitles from '../components/populartitles';

export default function Playstation(props){

    return(
        <>
            <div className="playstationBackground" />
            <Navbar system="playstation" title1="POPULAR PLAYSTATION TITLES" platform1='"fields name,rating,cover.image_id,platforms.name; limit 6; where rating > 80 & platforms = 48;"'
                    title2="SHOOTING GAMES" platform2='"fields name,rating,cover.image_id,platforms.name; limit 6; where rating > 0 & platforms = 48 & genres = (5,6);"'
                    title3="RACING GAMES" platform3='"fields name,rating,cover.image_id,platforms.name; limit 6; where rating > 0 & platforms = 48 & genres = (9,10);"' />
        </>
    );
}