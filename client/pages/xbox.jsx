import React from 'react';
import Navbar from '../components/navbar';

export default function Xbox(props){

    return(
        <>
            <div className="xboxBackground" />
            <Navbar system="xbox"/>
            <h1 className="text-center">Xbox Page</h1>
        </>
    );
}