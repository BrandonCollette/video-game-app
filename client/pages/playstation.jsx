import React from 'react';
import Navbar from '../components/navbar';

export default function Playstation(props){

    return(
        <>
            <div className="playstationBackground" />
            <Navbar system="playstation"/>
            <h1 className="text-center">Playstation Page</h1>
        </>
    );
}