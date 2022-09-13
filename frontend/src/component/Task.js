import React from 'react';
import TaskStyle from '../style/Task.css';
import { Form, Button, Card, Container } from 'react-bootstrap';

export default function Task(props) {

    return (
        <div className='task-container'>
            <div className='task-desc'>
                <p>{props.desc}</p>
                <br/>
                <span>{props.done == 1 ? 'Done' : 'Not done'}</span>
            </div>
            <div className='task-buttons'>
                <button className='btn btn-primary' onClick={props.onDone}>Done</button>
                <button className='btn btn-danger' onClick={props.onDelete}>Delete</button>
            </div>
        </div>
    );
}