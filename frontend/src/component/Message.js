import React from 'react';
import Message from '../style/Message.css';
import { Form, Button, Card, Container } from 'react-bootstrap';

export default function Content(props) {

    return (
        <div className='message-container'>
            <div className='message-info'>
                <h5>{props.user}</h5>
                <span>{props.date}</span>
            </div>
            <div className='message-content'>
                {props.text}
            </div>
        </div>
    );
}