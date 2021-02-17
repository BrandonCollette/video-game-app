import React from 'react';
import Navbar from '../components/navbar';

export default function Pc(props){

    return(
        <>
            <div className="pcBackground" />
            <Navbar system="pc"/>
            <h1 className="text-center">PC Page</h1>
        </>
    );
}