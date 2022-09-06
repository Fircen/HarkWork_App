import React from 'react'

export default function Todo({ text, ID }) {

    const completeHandler = () => {






        fetch('/api/v1/task/' + ID, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                "ID": ID,
                "description": text,
                "done": true
            })
        });

    }


    return (
        <div className='todo' id={ID}>
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
