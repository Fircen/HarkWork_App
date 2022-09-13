import React, { useEffect, useRef, useState } from 'react';
import Sidebar_style from '../style/Sidebar_style.css'
import { Form, Button, Card, Container } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
const API_URL = 'http://localhost:3001/api/v1/room';

export default function Sidebar() {
    const [room, setRoom] = useState([{}])
    const [task, setTask] = useState([{}])
    useEffect(() => {
        const getApiData = async () => {
            const response = await fetch(
                'http://localhost:3001/api/v1/room'
            ).then((response) => response.json());
            setRoom(response);
        }
        getApiData();

    }, [])

    useEffect(() => {
        const getApiData = async () => {
            const response = await fetch(
                'http://localhost:3001/api/v1/task/list'
            ).then((response) => response.json());
            setTask(response);
        }
        getApiData();

    }, [])


    const navigate = useNavigate();


    const logout = () => {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('user');
        window.location.pathname = "/login";
    }

    return (
        <>
            <div className='Sidebar'>
                <div className='User'>
                    <h3 className='title'>{localStorage.getItem('user')}</h3>
                </div>
                <div className='Logout'>
                    <button className="btn btn-primary" onClick={logout}>Logout</button>
                </div>
                <hr />
                <div className='title'>🌐═══๑۩ Task ۩๑═══🌐</div>
                <ul className='List'>
                    {task.map((val, key) => {
                        return (
                            <li
                                key={key}
                                className='row'
                                onClick={() => {navigate('/tasklist/'+val.list_id)}}>
                                <div id='title'>{val.name}</div>
                            </li>)
                    })
                    }
                </ul>
                <h3 className='title'></h3>
                <div className='title'>🌐═══๑۩ Room ۩๑═══🌐</div>
                <div className='title'><span onClick={() => { }}>Add Room</span></div>
                <ul className='List'>
                    {room.map((val, key) => {
                        return (
                            <li
                                key={key}
                                className='row'
                                onClick={() => {navigate('/room/'+val.id)}}>
                                <div id='title'>{val.name}</div>
                            </li>)
                    })
                    }
                </ul>


            </div>


        </>



    )
}
