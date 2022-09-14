import React, { useEffect, useRef, useState } from 'react';
import Message from './Message';
import Middle_style from '../style/Middle.css';
import MessageStyle from '../style/Message.css';
import { Form, Button, Card, Container } from 'react-bootstrap';
import moment from 'moment'
import socket from '../utilty/Socket.js'

export default function RoomContent(props) {
    const [msg, setMsg] = useState('');
    const [msgList, setMsgList] = useState([]);
    const [roomName, setRoomName] = useState('');
    //const room = 'Basic';
    const user = localStorage.getItem('user');

    useEffect(() => {
        const getApiData = async () => {
            const response = await fetch(
                'http://localhost:3001/api/v1/room/' + props.id
            ).then((response) => response.json());
            setRoomName(response.data.name);
        }
        getApiData();

    }, [])

    const sendMessage = async (e) => {
        e.preventDefault();
        if (sendMessage !== "") {
            const messageData = {
                room: roomName,
                user: user,
                message: msg,
                time: moment().format('h:mm a')
            }
            await socket.emit('send_message', messageData)
            setMsgList((list) => [...list, messageData]);
        }
        setMsg('');
    }

    useEffect(
        () => {
            socket.off('receive_message').on('receive_message', (data) => {
                setMsgList((list) => [...list, data])
            })
        }, [socket])



    return (
        <div className='middle'>
            <div className='messages'>
                {msgList.map((val, key) => {
                    return (
                        <Message key={key} user={val.user} text={val.message} date={val.time} />
                    )
                })}
            </div>
            <div className='form-container'>
                <form className='form' onSubmit={sendMessage}>
                    <input className='text-input' value={msg} type='text' id='msg' onChange={(event) => {
                        setMsg(event.target.value)
                    }} />
                    <input type='submit' hidden />
                </form>
            </div>
        </div>
    );
}