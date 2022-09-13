import React from "react";
import Sidebar from './Sidebar';
import OnlineUsers from './Online';
import RoomContent from './RoomContent';
import Middle_style from '../style/Middle.css';
import Sidebar_style from '../style/Sidebar_style.css'
import { Form, Button, Card, Container } from 'react-bootstrap';
import TaskContent from "./TaskContent";
import { useParams } from "react-router-dom";


export default function Home(props) {

    const { id } = useParams();
    
    return (
        <>
            <Sidebar />
            {/* <RoomContent /> */}
            {/* <TaskContent /> */}
            {props.typeOfContent == 'room' ? <RoomContent id={id}/> : <TaskContent id={id}/>}
            <OnlineUsers />
        </>
    )
}