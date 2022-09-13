import pool from '../database.js';


export const createTaskList = async (req, res) => {
    try {
        const result = await pool.query(
            'INSERT INTO task_list (name) VALUES($1);', [req.body.name]);
        res.status(201).json(result);

    }
    catch (err) {
        console.log(err)
    }
};
export const getAllList = async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM task_list')
        res.status(200).json(result.rows)
    }
    catch (err) {
        console.log(err)
    }
};
export const getAllFromList = async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM task_list INNER JOIN task USING (list_id);')
        res.status(200).json(result.rows)
    }
    catch (err) {
        console.log(err)
    }
};



export const createTask = async (req, res) => {
    try {
        const result = await pool.query(
            'INSERT INTO task (list_id,description) VALUES($1,$2);', [req.body.list_id, req.body.description]);
        res.status(201).json(result);

    }
    catch (err) {
        console.log(err)
    }
};

export const getTask = async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM task WHERE "ID"=$1', [req.params.id]);
        res.status(200).json(result.rows);
    } catch (err) {
        console.log(err)
    }
};

export const updateTask = async (req, res) => {
    try {
        const result = await pool.query('UPDATE task SET done=$1 WHERE "ID"=$2',
            [req.body.done, req.params.id])
        res.status(200).json(result).send({ message: "Succes updated" })
    } catch (err) {
        console.log(err)
    }
};

export const deleteTask = async (req, res) => {
    try {
        const result = await pool.query('DELETE  * FROM task WHERE "ID"=$1',
            [req.params.id])
        res.status(200).send({ message: "Succes delete" })
    } catch (err) {
        console.log(err)
    }

};

