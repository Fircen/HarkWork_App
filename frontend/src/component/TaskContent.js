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
    const getApiData = async () => {
        const response = await fetch(
            'http://localhost:3001/api/v1/task/list/' + props.id
        ).then((response) => response.json());
        setTaskList(response);
    }
    const createTask = async () => {
        //e.preventDefault();
        const response = await fetch('http://localhost:3001/api/v1/task/list/' + props.id, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ description: task })
        })
        setTask('');
        getApiData();
    }

    const updateTask = async (id, done) => {
        const response = await fetch('http://localhost:3001/api/v1/task/' + id + '-' + !done, { method: 'PATCH' })
        getApiData();
    }

    const deleteTask = async (id) => {
        //e.preventDefault();
        await fetch('http://localhost:3001/api/v1/task/' + id, { method: 'DELETE' });
        getApiData();
    }
    useEffect(() => {
        getApiData();
    }, [props.id])



    return (
        <div className='middle'>
            <div className='tasks'>
                {taskList.map((val, key) => {
                    return (
                        <Task key={key} desc={val.description} done={val.done} onDone={() => updateTask(val.task_id, val.done)} onDelete={() => deleteTask(val.task_id)} />
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