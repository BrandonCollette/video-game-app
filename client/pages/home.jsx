import React from 'react';
import Navbar from '../components/navbar';
import PopularTitles from '../components/populartitles';

export default function Home(props){

    return(
        <>
            <Navbar />
            <PopularTitles platform="48"/>
        </>
    );
}
