import React from 'react';
import Navbar from '../components/navbar';
import PopularTitles from '../components/populartitles';

export default function Playstation(props){

    return(
        <>
            <div className="xboxBackground" />
            <Navbar system="xbox"/>
            <PopularTitles platform="49"/>
        </>
    );
}