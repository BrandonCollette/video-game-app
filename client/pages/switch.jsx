import React from 'react';
import Navbar from '../components/navbar';

export default function Switch(){

    return(
        <>
            <div className="switchBackground" />
            <Navbar system="switch"/>
            <h1 className="text-center">Switch Page</h1>
        </>
    );
}