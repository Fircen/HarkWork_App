import React from 'react';
import Message from './Message';
import Middle_style from '../style/Middle.css';
import MessageStyle from '../style/Message.css';
import { Form, Button, Card, Container } from 'react-bootstrap';

export default function Content() {

    const messages = [
        {
            "user": "Adam",
            "text": "fajna wiadomosc",
            "date": "11.09.2022 16:00"
        },
        {
            "user": "Maciek",
            "text": "super wiadomosc",
            "date": "11.09.2022 16:01"
        },
        {
            "user": "Adam",
            "text": "xD",
            "date": "11.09.2022 16:02"
        },
        {
            "user": "Adam",
            "text": "fajna wiadomosc",
            "date": "11.09.2022 16:00"
        },
        {
            "user": "Maciek",
            "text": "super wiadomosc",
            "date": "11.09.2022 16:01"
        },
        {
            "user": "Adam",
            "text": "xD",
            "date": "11.09.2022 16:02"
        },
        {
            "user": "Adam",
            "text": "fajna wiadomosc",
            "date": "11.09.2022 16:00"
        },
        {
            "user": "Maciek",
            "text": "super wiadomosc",
            "date": "11.09.2022 16:01"
        },
        {
            "user": "Adam",
            "text": "xD",
            "date": "11.09.2022 16:02"
        },
        {
            "user": "Adam",
            "text": "fajna wiadomosc",
            "date": "11.09.2022 16:00"
        },
        {
            "user": "Maciek",
            "text": "super wiadomosc",
            "date": "11.09.2022 16:01"
        },
        {
            "user": "Adam",
            "text": "xD",
            "date": "11.09.2022 16:02"
        },
        {
            "user": "Adam",
            "text": "fajna wiadomosc",
            "date": "11.09.2022 16:00"
        },
        {
            "user": "Maciek",
            "text": "super wiadomosc",
            "date": "11.09.2022 16:01"
        },
        {
            "user": "Adam",
            "text": "xD",
            "date": "11.09.2022 16:02"
        }
    ];

    const sendMessage = () => {

    }

    return (
        <div className='middle'>
            <div className='messages'>
                {messages.map((val, key) => {
                    return (
                        <Message key={key} user={val.user} text={val.text} date={val.date} />
                    )
                })}
            </div>
            <div className='form-container'>
                <form className='form' onSubmit={sendMessage}>
                    <input className='text-input' type='text'/>
                    <input type='submit' hidden/>
                </form>
            </div>
        </div>
    );
}