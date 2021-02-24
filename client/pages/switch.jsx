import React from 'react';
import Navbar from '../components/navbar';
import PopularTitles from '../components/populartitles';

export default function Switch(props){

    return(
        <>
            <div className="switchBackground" />
            <Navbar system="switch"/>
            <PopularTitles platform="130"/>
        </>
    );
}