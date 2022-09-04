import React from 'react'

export default function Todo({ text }) {

    const completeHandler = (e) => {
        e.preventDefault();

        return console.log();


        /*
        fetch('/api/v1/task/' + id, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                'done': true
            })
        });*/

    }


    return (
        <div className='todo'>
            <li className='todo-item'>{text}</li>
            <button onClick={completeHandler} className='complete-btn'>
                <i className='fas fa-check'></i>
            </button>
            <button className='trash-btn'>
                <i className='fas fa-trash'></i>
            </button>

        </div>
    )
}
