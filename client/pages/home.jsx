import React from 'react';
import Navbar from '../components/navbar';
import PopularTitles from '../components/populartitles';

export default function Home(props){

    return(
        <>
            <Navbar title1="POPULAR TITLES" platform1='"fields name,rating,cover.image_id,platforms.name; limit 6; where rating > 95 & platforms = (4,130,48);"'
                    title2="TOP RATED TITLES" platform2='"fields name,rating,cover.image_id,platforms.name; limit 6; where rating > 98;"'
                    title3="MORE..." platform3='"fields name,rating,cover.image_id,platforms.name; limit 6; where rating > 75 & platforms = (4,130,48);"' className="navComp" />
        </>
    );
}
