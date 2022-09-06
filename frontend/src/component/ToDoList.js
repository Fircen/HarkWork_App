import React, { useState, useEffect } from 'react'
import Todo from './Todo';


export default function ToDoList() {
    const [task, setTask] = useState([{}])


    const getApiData = async () => {
        const response = await fetch(
            "/api/v1/task/"
        ).then((response) => response.json());
        setTask(response);
    };;

    useEffect(() => {
        getApiData();
    }, []);

    return (

        <div className='todo-container'>
            <ul className='todo-list'>
                {task.map((tasks) => (
                    <Todo ID={tasks.ID} text={tasks.description} />
                ))}

            </ul>

        </div>

    );
}
