import React from 'react';
import Navbar from '../components/navbar';
import PopularTitles from '../components/populartitles';

export default function Pc(props){

    return(
        <>
            <div className="pcBackground" />
            <Navbar system="pc" title1="POPULAR TITLES" platform1='"fields name,rating,cover.image_id,platforms.name; limit 6; where rating > 80 & platforms = 6;"'
                    title2="SHOOTER GAMES" platform2='"fields name,rating,cover.image_id,platforms.name; limit 6; where rating > 80 & platforms = 6 & genres = 5;"'
                    title3="RACING GAMES" platform3='"fields name,rating,cover.image_id,platforms.name; limit 6; where rating > 70 & platforms = 6 & genres = 10;"' />
            {/*<PopularTitles title="POPULAR TITLES" platform='"fields name,rating,cover.image_id,platforms.name; limit 6; where rating > 80 & platforms = 6;"' />*/}
            {/*<PopularTitles title="SHOOTER GAMES" platform='"fields name,rating,cover.image_id,platforms.name; limit 6; where rating > 80 & platforms = 6 & genres = 5;"' />*/}
            {/*<PopularTitles title="RACING GAMES" platform='"fields name,rating,cover.image_id,platforms.name; limit 6; where rating > 70 & platforms = 6 & genres = 10;"' />*/}
        </>
    );
}