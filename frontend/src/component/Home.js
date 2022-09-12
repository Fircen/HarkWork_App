import React from "react";
import Sidebar from './Sidebar';
import OnlineUsers from './Online';
import Content from './Content';
import Middle_style from '../style/Middle.css';
import Sidebar_style from '../style/Sidebar_style.css'
import { Form, Button, Card, Container } from 'react-bootstrap';


export default function Home() {

    
    
    return (
        <>
            <Sidebar />
            <Content />
            <OnlineUsers />
        </>
    )
}