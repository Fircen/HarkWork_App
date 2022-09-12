import React, { useEffect, useRef, useState } from 'react';
import Sidebar_style from '../style/Sidebar_style.css'
import { Form, Button, Card, Container } from 'react-bootstrap'
const API_URL = 'http://localhost:3001/api/v1/room';

export default function Sidebar() {
    const [room, setRoom] = useState([{}])

    useEffect(() => {
        const getApiData = async () => {
            const response = await fetch(
                API_URL
            ).then((response) => response.json());
            setRoom(response);
        }
        getApiData();

    }, [])

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
                    <li className='row'> <div id='title'>Task1 </div></li>
                    <li className='row'> <div id='title'>Task1 </div></li>
                    <li className='row'> <div id='title'>Task1 </div></li>
                    <li className='row'> <div id='title'>Task1 </div></li>
                </ul>
                <h3 className='title'></h3>
                <div className='title'>🌐═══๑۩ Room ۩๑═══🌐</div>
                <ul className='List'>
                    {room.map((val, key) => {
                        return (
                            <li
                                key={key}
                                className='row'
                                onClick={() => { }}>
                                <div id='title'>{val.name}</div>
                            </li>)
                    })
                    }
                </ul>


            </div>


        </>



    )
}
