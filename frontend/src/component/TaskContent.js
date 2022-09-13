import React, { useEffect, useRef, useState } from 'react';
import Task from './Task';
import Middle_style from '../style/Middle.css';
import TaskStyle from '../style/Task.css';
import { Form, Button, Card, Container } from 'react-bootstrap';
import moment from 'moment'
import socket from '../utilty/Socket.js'

export default function TaskContent(props) {
    const [task, setTask] = useState('');
    const [taskList, setTaskList] = useState([]);
    const tskList = 'Basic';
    //const tskList = props.id;
    const user = localStorage.getItem('user');

    const getTasks = async (e) => {
        e.preventDefault();

    }

    const createTask = async (e) => {
        e.preventDefault();

    }

    const updateTask = async (e, id) => {
        e.preventDefault();

    }

    const deleteTask = async (e, id) => {
        e.preventDefault();

        await fetch.delete('http://localhost:3001/api/v1/task/' + id, {method: 'DELETE'});
        setTaskList(taskList.filter((task) => task.id !== id));
    }

    // const sendMessage = async (e) => {
    //     e.preventDefault();
    //     if (sendMessage !== "") {
    //         const messageData = {
    //             room: room,
    //             user: user,
    //             message: msg,
    //             time: moment().format('h:mm a')
    //         }
    //         await socket.emit('send_message', messageData)
    //         setMsgList((list) => [...list, messageData]);

    //     }
    //     setMsg('');
    // }

    // useEffect(
    //     () => {
    //         socket.off('receive_message').on('receive_message', (data) => {

    //             setMsgList((list) => [...list, data])
    //         })
    //     }, [socket])



    return (
        <div className='middle'>
            <div className='tasks'>
                {taskList.map((val, key) => {
                    return (
                        <Task key={key} desc={val.description} done={val.done} onDone={() => updateTask(val.id)} onDelete={() => deleteTask(val.id)} />
                    )
                })}
            </div>
            <div className='form-container'>
                <form className='form' onSubmit={createTask}>
                    <input className='text-input' value={task} type='text' id='task' onChange={(event) => {
                        setTask(event.target.value)
                    }} />
                    <input type='submit' hidden />
                </form>
            </div>
        </div>
    );
}