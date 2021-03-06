import React from 'react';
import Navbar from '../components/navbar';
import PopularTitles from '../components/populartitles';

export default function Switch(props){

    return(
        <>
            <div className="switchBackground" />
            <Navbar system="switch" title1="POPULAR SWITCH TITLES" platform1='"fields name,rating,cover.image_id,platforms.name; limit 6; where rating > 80 & platforms = 130 & involved_companies.company = 70;"'
                    title2="SHOOTING GAMES" platform2='"fields name,rating,cover.image_id,platforms.name; limit 6; where rating > 85 & platforms = (130,4) & genres = 5;"'
                    title3="RACING GAMES" platform3='"fields name,rating,cover.image_id,platforms.name; limit 6; where rating > 0 & platforms = (130,4) & genres = 10;"' />
        </>
    );
}