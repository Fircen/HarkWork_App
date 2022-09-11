import React from "react";
import Sidebar from './Sidebar';
import OnlineUsers from './Online';
import Middle_style from '../style/Middle.css'

export default function Home() {


    return (
        <>
            <Sidebar/>
            <div className="middle">
                <h1> Siema</h1>
            </div>          
            <OnlineUsers/>
        </>
    )
}