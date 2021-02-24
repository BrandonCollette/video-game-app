import React from 'react';
import Navbar from '../components/navbar';
import PopularTitles from '../components/populartitles';

export default function Playstation(props){

    return(
        <>
            <div className="playstationBackground" />
            <Navbar system="playstation"/>
            <PopularTitles platform="48"/>
        </>
    );
}