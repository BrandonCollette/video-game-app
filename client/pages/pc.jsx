import React from 'react';
import Navbar from '../components/navbar';
import PopularTitles from '../components/populartitles';

export default function Pc(props){

    return(
        <>
            <div className="pcBackground" />
            <Navbar system="pc"/>
            <PopularTitles platform="6"/>
        </>
    );
}